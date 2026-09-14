(function () {
  'use strict';

  /* ===== ตั้งค่าเอกสารที่แจก — แก้ที่นี่ที่เดียว =====
     url ว่าง = ปิดทั้งระบบ (ปุ่ม/บล็อกจะไม่ขึ้นเลย ไม่มีลิงก์ตาย)
     ใส่ path ไฟล์ PDF แล้วทุกจุดจะโผล่พร้อมกัน                */
  var DOC = {
    slug:  'gold-asia-regime-high-low-edge',
    title: 'ทองคำ วันที่ Asia ดัง กับวันที่ Asia เงียบ',
    meta:  'PDF · ไฟล์เดียวจบ',
    url:   ''
  };

  var SB_URL = 'https://rcdukwwcbyryauhqlzmx.supabase.co';
  var SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZHVrd3djYnlyeWF1aHFsem14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5MTY0MDAsImV4cCI6MjA4NTQ5MjQwMH0.rprPmudJYyb6dyhXb9Z9GrtQWEeIX99A2Wrj55PvS54';

  if (!DOC.url) return;

  var CSS = [
    '.rd-block{background:#FAF6ED;border:1px solid rgba(212,175,55,0.3);border-radius:18px;padding:26px 20px;margin:clamp(30px,5vw,48px) 0;text-align:center}',
    '.rd-eyebrow{font-family:\'Cinzel\',serif;font-size:10px;letter-spacing:2.4px;text-transform:uppercase;color:#8B6914;margin-bottom:8px}',
    '.rd-title{font-size:clamp(17px,2.4vw,21px);font-weight:600;color:#722F37;line-height:1.4;margin-bottom:8px}',
    '.rd-sub{font-size:13.5px;color:#7A6F62;line-height:1.7;margin:0 auto 18px;max-width:420px}',
    '.rd-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;background:linear-gradient(135deg,#E6C769,#D4AF37);color:#3a1520;',
    '  padding:13px 24px;border-radius:100px;font-size:15px;font-weight:600;border:none;cursor:pointer;font-family:inherit;text-decoration:none;transition:transform .18s ease}',
    '.rd-btn:hover{transform:translateY(-2px)}',
    '.rd-btn svg{width:18px;height:18px;fill:none;stroke:#3a1520;stroke-width:2.1;stroke-linecap:round;stroke-linejoin:round}',
    '.rd-meta{font-size:12px;color:#7A6F62;margin-top:11px}',
    '.rd-link{display:inline-flex;align-items:center;gap:6px;margin-top:14px;font-size:13.5px;color:#F4E4BA;background:none;border:none;cursor:pointer;font-family:inherit;text-decoration:none;border-bottom:1px solid rgba(212,175,55,0.45);padding-bottom:2px}',
    '.rd-link:hover{color:#D4AF37;border-bottom-color:#D4AF37}',
    '.rd-ov{position:fixed;inset:0;z-index:300;background:rgba(20,8,12,0.66);display:flex;align-items:center;justify-content:center;padding:20px}',
    '.rd-ov[hidden]{display:none}',
    '.rd-modal{background:#FFFEF8;border:1px solid rgba(212,175,55,0.35);border-radius:20px;max-width:400px;width:100%;padding:30px 24px;position:relative;box-shadow:0 30px 70px rgba(20,8,12,0.42);font-family:\'Anuphan\',sans-serif}',
    '.rd-x{position:absolute;top:13px;right:16px;background:none;border:none;font-size:27px;line-height:1;color:#7A6F62;cursor:pointer}',
    '.rd-h{font-size:20px;font-weight:600;color:#722F37;line-height:1.35;margin:4px 0 8px}',
    '.rd-p{font-size:13.5px;color:#7A6F62;line-height:1.7;margin:0 0 18px}',
    '.rd-in{width:100%;box-sizing:border-box;border:1px solid rgba(212,175,55,0.42);border-radius:100px;padding:12px 18px;font-size:15px;',
    '  font-family:inherit;color:#3D3228;background:#FAF6ED;margin-bottom:10px}',
    '.rd-in:focus{outline:none;border-color:#D4AF37}',
    '.rd-err{font-size:12.5px;color:#A32D2D;margin:-4px 0 10px;min-height:16px}',
    '.rd-go{width:100%}',
    '.rd-fine{font-size:11.5px;color:#7A6F62;line-height:1.65;margin-top:14px;text-align:center}',
    '.rd-done{text-align:center}',
    '.rd-tick{width:50px;height:50px;margin:0 auto 14px;border-radius:50%;background:rgba(212,175,55,0.14);border:1px solid rgba(212,175,55,0.35);display:flex;align-items:center;justify-content:center}',
    '.rd-tick svg{width:24px;height:24px;fill:none;stroke:#8B6914;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}'
  ].join('\n');

  var DL_ICO = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7 11l5 5 5-5M4 20h16"/></svg>';

  function inject() {
    var st = document.createElement('style');
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  var ov, form, done, input, err;

  function buildModal() {
    ov = document.createElement('div');
    ov.className = 'rd-ov';
    ov.hidden = true;
    ov.innerHTML =
      '<div class="rd-modal" role="dialog" aria-modal="true" aria-label="ดาวน์โหลดเอกสารงานวิจัย">' +
        '<button class="rd-x" aria-label="ปิด">&times;</button>' +
        '<div class="rd-form">' +
          '<div class="rd-eyebrow">Free research</div>' +
          '<div class="rd-h">รับเอกสารงานวิจัยฉบับเต็ม</div>' +
          '<p class="rd-p">กรอกอีเมลเพื่อดาวน์โหลด และรับงานวิจัยชิ้นถัดไปเมื่อเผยแพร่</p>' +
          '<input class="rd-in" type="email" inputmode="email" autocomplete="email" placeholder="name@email.com" aria-label="อีเมล">' +
          '<div class="rd-err" role="alert"></div>' +
          '<button class="rd-btn rd-go">รับเอกสาร</button>' +
          '<p class="rd-fine">ใช้ส่งงานวิจัยเท่านั้น ไม่ส่งต่อให้ใคร ยกเลิกได้ทุกเมื่อ</p>' +
        '</div>' +
        '<div class="rd-done" hidden>' +
          '<div class="rd-tick"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg></div>' +
          '<div class="rd-h" style="text-align:center">เรียบร้อย</div>' +
          '<p class="rd-p" style="text-align:center">ไฟล์จะเริ่มโหลดอัตโนมัติ ถ้าไม่ขึ้นให้กดปุ่มด้านล่าง</p>' +
          '<a class="rd-btn rd-go" href="' + DOC.url + '" download>' + DL_ICO + 'ดาวน์โหลด PDF</a>' +
        '</div>' +
      '</div>';
    document.body.appendChild(ov);

    form  = ov.querySelector('.rd-form');
    done  = ov.querySelector('.rd-done');
    input = ov.querySelector('.rd-in');
    err   = ov.querySelector('.rd-err');

    ov.querySelector('.rd-x').addEventListener('click', close);
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !ov.hidden) close(); });
    ov.querySelector('.rd-go').addEventListener('click', submit);
    input.addEventListener('input', function () { err.textContent = ''; });
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
  }

  function open() {
    if (!ov) buildModal();
    form.hidden = false;
    done.hidden = true;
    err.textContent = '';
    input.value = '';
    ov.hidden = false;
    document.body.style.overflow = 'hidden';
    setTimeout(function () { input.focus(); }, 60);
  }

  function close() {
    ov.hidden = true;
    document.body.style.overflow = '';
  }

  function submit() {
    var v = (input.value || '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
      err.textContent = 'กรอกอีเมลให้ถูกต้องก่อนนะครับ';
      input.focus();
      return;
    }
    err.textContent = '';
    save(v);
    form.hidden = true;
    done.hidden = false;
    setTimeout(function () {
      var a = document.createElement('a');
      a.href = DOC.url;
      a.setAttribute('download', '');
      document.body.appendChild(a);
      a.click();
      a.remove();
    }, 400);
  }

  /* เก็บอีเมลแบบไม่ขวางทาง — ถ้าตารางยังไม่ได้สร้างหรือเน็ตล่ม ผู้ใช้ยังได้ไฟล์ */
  function save(email) {
    try {
      fetch(SB_URL + '/rest/v1/research_leads', {
        method: 'POST',
        headers: {
          'apikey': SB_KEY,
          'Authorization': 'Bearer ' + SB_KEY,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({ email: email, doc_slug: DOC.slug })
      })["catch"](function () {});
    } catch (e) {}
  }

  function mountBlocks() {
    var slots = document.querySelectorAll('[data-rd-block]');
    for (var i = 0; i < slots.length; i++) {
      var b = document.createElement('div');
      b.className = 'rd-block';
      b.innerHTML =
        '<div class="rd-eyebrow">Free research</div>' +
        '<div class="rd-title">' + DOC.title + '</div>' +
        '<p class="rd-sub">เอกสารฉบับเต็มของงานวิจัยชิ้นนี้ ดาวน์โหลดฟรี</p>' +
        '<button class="rd-btn" type="button">' + DL_ICO + 'ดาวน์โหลดงานวิจัย · ฟรี</button>' +
        '<div class="rd-meta">' + DOC.meta + '</div>';
      b.querySelector('.rd-btn').addEventListener('click', open);
      slots[i].appendChild(b);
    }
    var links = document.querySelectorAll('[data-rd-open]');
    for (var j = 0; j < links.length; j++) {
      links[j].hidden = false;
      links[j].addEventListener('click', function (e) { e.preventDefault(); open(); });
    }
  }

  function init() { inject(); mountBlocks(); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.JPTResearchDownload = { open: open, doc: DOC };
})();
