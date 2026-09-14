#!/usr/bin/env python3
"""
โหลดโลโก้บริษัทสำหรับการ์ด Live Snapshot ในหน้าแรก (public/index.html)

แหล่ง : github.com/nvstly/icons  → ticker_icons/<TICKER>.png (250x250 PNG โปร่งใส
         เวอร์ชันที่แต่งมาสำหรับธีมมืด — โลโก้สีเข้มถูกทำให้เป็นสีขาว/สว่าง)
ปลายทาง: public/logos/<TICKER>.png  ย่อเหลือ 96x96 (การ์ดแสดงที่ 34px จึงเหลือเฟือถึงจอ 2x)
รายชื่อ : constituents.csv ใน repo `pages` (คอลัมน์ Symbol)

ทำไมต้องเก็บไฟล์ไว้เอง ไม่ลิงก์ข้ามเว็บ
  - ถ้าต้นทางปิดบริการหรือเปลี่ยนพาธ หน้าแรกจะรูปแตกทันที
  - ลดการยิง request ออกนอกโดเมนตอนผู้ใช้เปิดหน้า

หุ้นที่ต้นทางไม่มีโลโก้ ไม่ต้องทำอะไร — การ์ดใน index.html จะสลับไปแสดง
อักษรย่อในกรอบเดียวกันเองผ่าน onerror (ดู .snap-logo.no-logo)

วิธีใช้:
    python tools/fetch_logos.py                     # เติมเฉพาะตัวที่ยังไม่มี
    python tools/fetch_logos.py --force             # โหลดใหม่ทั้งหมด
    python tools/fetch_logos.py --csv path/to.csv   # ระบุรายชื่อเอง

ต้องมี: pillow
"""

import argparse
import csv
import io
import json
import os
import sys
import urllib.request
from concurrent.futures import ThreadPoolExecutor

from PIL import Image

REPO = "nvstly/icons"
BRANCH = "main"
ICON_DIR = "ticker_icons"
RAW = f"https://raw.githubusercontent.com/{REPO}/{BRANCH}/{ICON_DIR}/"
TREE = f"https://api.github.com/repos/{REPO}/git/trees/{BRANCH}?recursive=1"
SIZE = 96
UA = {"User-Agent": "jptrust-logo-fetch"}


def fetch(url, timeout=30):
    return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=timeout).read()


def available_tickers():
    """ชื่อไฟล์ทั้งหมดที่ต้นทางมี (เรียก API ครั้งเดียว ไม่ต้องยิงทีละตัวแล้วกิน 404)"""
    tree = json.loads(fetch(TREE))
    if tree.get("truncated"):
        print("! tree ถูกตัด — รายชื่ออาจไม่ครบ", file=sys.stderr)
    return {
        os.path.basename(n["path"])[:-4]
        for n in tree.get("tree", [])
        if n["path"].startswith(ICON_DIR + "/") and n["path"].endswith(".png")
    }


def resolve(symbol, have):
    """S&P ใช้จุด (BRK.B) ต้นทางบางตัวใช้ขีดหรือไม่มีคั่น ลองทุกแบบก่อนยอมแพ้"""
    for cand in (symbol, symbol.replace(".", "-"), symbol.replace(".", ""), symbol.replace("-", ".")):
        if cand in have:
            return cand
    return None


def save(symbol, filename, outdir):
    img = Image.open(io.BytesIO(fetch(RAW + filename + ".png"))).convert("RGBA")
    img.thumbnail((SIZE, SIZE), Image.LANCZOS)
    canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))  # จัดกึ่งกลางบนผืนโปร่งใสจัตุรัส
    canvas.paste(img, ((SIZE - img.width) // 2, (SIZE - img.height) // 2))
    canvas.save(os.path.join(outdir, symbol + ".png"), optimize=True)


def main():
    here = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    ap = argparse.ArgumentParser()
    ap.add_argument("--csv", default=os.path.join(here, "constituents.csv"))
    ap.add_argument("--out", default=os.path.join(here, "logos"))
    ap.add_argument("--force", action="store_true", help="โหลดทับของเดิม")
    ap.add_argument("--workers", type=int, default=12)
    args = ap.parse_args()

    if not os.path.exists(args.csv):
        sys.exit(f"ไม่พบ {args.csv} — คัดลอก constituents.csv จาก repo `pages` มาก่อน")
    os.makedirs(args.out, exist_ok=True)

    with open(args.csv, newline="", encoding="utf-8") as f:
        symbols = [r["Symbol"].strip() for r in csv.DictReader(f) if r.get("Symbol", "").strip()]

    have = available_tickers()
    jobs, missing = [], []
    for s in symbols:
        src = resolve(s, have)
        if not src:
            missing.append(s)
        elif args.force or not os.path.exists(os.path.join(args.out, s + ".png")):
            jobs.append((s, src))

    failed = []

    def run(job):
        try:
            save(job[0], job[1], args.out)
        except Exception as exc:  # ตัวเดียวพังไม่ควรล้มทั้งรอบ
            failed.append((job[0], str(exc)[:60]))

    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        list(pool.map(run, jobs))

    total = sum(os.path.getsize(os.path.join(args.out, f)) for f in os.listdir(args.out))
    print(f"รายชื่อ {len(symbols)} ตัว · โหลดรอบนี้ {len(jobs) - len(failed)} · พลาด {len(failed)}")
    print(f"ต้นทางไม่มีโลโก้ {len(missing)} ตัว (การ์ดจะใช้อักษรย่อแทน): {', '.join(missing[:20])}")
    print(f"ไฟล์ใน {args.out}: {len(os.listdir(args.out))} · รวม {total / 1048576:.2f} MB")
    if failed:
        print("พลาด:", failed[:10])


if __name__ == "__main__":
    main()
