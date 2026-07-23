/* ============================================================
   JP TRUST LEARNING — PUBLIC LIBRARY · RESEARCH INDEX
   ------------------------------------------------------------
   ไฟล์เดียวจบ: แก้ที่นี่ที่เดียว หน้าแรก + หน้าหมวดทั้ง 6 อัปเดตตาม

   วิธีเพิ่มงานใหม่ = เพิ่ม object ใน RESEARCH
     cat    : momentum | analysis | dashboard | macro | method | curated
     type   : own | interactive | article | dashboard | curated
     status : active (เผยแพร่แล้ว) | dev (กำลังพัฒนา) | ext (งานคัดสรร)
     href   : ลิงก์เต็ม หรือ "#" ถ้ายังไม่เผยแพร่
   ============================================================ */

const CATS = [
  {
    key: "momentum",
    unit: "เรื่อง",
    title: "กลยุทธ์ Momentum",
    eyebrow: "Momentum",
    desc: "ผลทดสอบกลยุทธ์โมเมนตัมย้อนหลังกว่า 30 ปี พร้อม trade log เต็ม",
    page: "lib-momentum.html"
  },
  {
    key: "analysis",
    unit: "บทความ",
    title: "บทวิเคราะห์",
    eyebrow: "Analysis",
    desc: "เจาะลึกตลาด เศรษฐกิจ และจิตวิทยาราคา เป็นรายเหตุการณ์",
    page: "lib-analysis.html"
  },
  {
    key: "dashboard",
    unit: "แดชบอร์ด",
    title: "Dashboard",
    eyebrow: "Dashboard",
    desc: "แดชบอร์ดเปรียบเทียบสินทรัพย์และเครื่องมือแบบโต้ตอบ",
    page: "lib-dashboard.html"
  },
  {
    key: "macro",
    unit: "เรื่อง",
    title: "Macro & ความเสี่ยง",
    eyebrow: "Macro & Risk",
    desc: "สัญญาณเศรษฐกิจมหภาค ค่าเงิน และการบริหารความเสี่ยงของพอร์ต",
    page: "lib-macro.html"
  },
  {
    key: "method",
    unit: "เรื่อง",
    title: "ข้อมูล & ระเบียบวิธี",
    eyebrow: "Methodology",
    desc: "คุณภาพข้อมูล survivorship bias และระเบียบวิธี backtest",
    page: "lib-method.html"
  },
  {
    key: "curated",
    unit: "เรื่อง",
    title: "งานวิจัยคัดสรร",
    eyebrow: "Curated",
    desc: "งานวิจัยวิชาการและแหล่งอ้างอิงภายนอกที่เราคัดมา",
    page: "lib-curated.html"
  }
];

const RESEARCH = [
  /* ---------- บทวิเคราะห์ ---------- */
  {
    cat: "analysis", type: "article", status: "active",
    title: "สงครามชิปความจำ 2026: ของขาดที่สุดในโลก กลายเป็นหุ้นที่ร่วงแรงที่สุด",
    desc: "ราคาความจำขึ้น 8–9 เท่าในปีเดียว Micron ทำงบดีที่สุดในประวัติศาสตร์ แต่หุ้นทั้งกลุ่มเข้าสู่ภาวะหมี — เจาะราคา DRAM/NAND รายไตรมาส สัญญา take-or-pay 100 พันล้าน คู่แข่งทั้งกระดาน (SK Hynix · Samsung · SanDisk · WDC) และปฏิทินที่จะตัดสินรอบนี้",
    assets: ["S&P 500"], href: "https://public.jptrustlearning.com/memory-chip-analysis.html"
  },
  {
    cat: "analysis", type: "article", status: "active",
    title: "เรื่องเล่า vs ข้อเท็จจริง: เมื่อ Meta Compute เขย่าหุ้นชิปทั้งกระดาน",
    desc: "ข่าวชิ้นเดียวจาก Bloomberg — Meta เตรียมปล่อยเช่ากำลังประมวลผล AI ส่วนเกิน — ทำหุ้น memory และ neocloud ร่วงยกกลุ่ม ทั้งที่ดีมานด์ยังไม่หาย บทวิเคราะห์กึ่งจิตวิทยา แยก 'เรื่องเล่า' ที่ตลาดเชื่อ ออกจาก 'ข้อเท็จจริง' ของธุรกิจ",
    assets: ["S&P 500"], href: "https://public.jptrustlearning.com/meta-compute-narrative-vs-facts.html"
  },
  {
    cat: "analysis", type: "article", status: "active",
    title: "ราคา vs มูลค่า: บทเรียนจิตวิทยาจากกรณี Micron",
    desc: "เมื่อ Micron ทำงบดีที่สุดในประวัติศาสตร์แต่หุ้นกลับร่วง — แยก 'ราคา' (อารมณ์ตลาด) ออกจาก 'มูลค่า' (ตัวธุรกิจ) ผ่านวิกฤตหน่วยความจำ RAMageddon และคดีฟ้องฮั้วราคา DRAM",
    assets: ["S&P 500"], href: "https://public.jptrustlearning.com/micron-price-vs-value.html"
  },

  /* ---------- Dashboard ---------- */
  {
    cat: "dashboard", type: "dashboard", status: "active",
    title: "เปรียบเทียบผลตอบแทนสินทรัพย์ · ข้อมูลสด",
    desc: "แดชบอร์ดเทียบผลตอบแทนหุ้นสหรัฐ ทองคำ น้ำมัน และเงินฝาก เลือกกรอบเวลา 1–20 ปี ดึงราคาสดจาก Yahoo Finance คำนวณ CAGR · Max Drawdown · เวลาฟื้นตัว · ความผันผวน · Sharpe (Rf=0) เพิ่มสินทรัพย์เองได้",
    assets: ["S&P 500", "Gold", "Oil", "FX"], href: "https://public.jptrustlearning.com/asset-comparison-live.html"
  },
  {
    cat: "dashboard", type: "dashboard", status: "active",
    title: "เปรียบเทียบผลตอบแทนสินทรัพย์ · ชุดข้อมูลอ้างอิง",
    desc: "เวอร์ชันชุดข้อมูลคงที่ (reproducible) สำหรับอ้างอิงตัวเลขในบทความ — เมตริกเดียวกับเวอร์ชันสด แต่ผลลัพธ์ไม่เปลี่ยนตามวัน เหมาะกับการอ้างอิงและตรวจทานย้อนหลัง",
    assets: ["S&P 500", "Gold", "Oil"], href: "https://public.jptrustlearning.com/asset-comparison.html"
  },
  {
    cat: "dashboard", type: "dashboard", status: "active",
    title: "S&P 500 Scanner — เวอร์ชันเปิดให้ใช้ฟรี",
    desc: "สแกนหุ้นใน S&P 500 ตามคะแนนโมเมนตัมรวม อัปเดตรายวันจากข้อมูลปิดตลาด ใช้ดูภาพรวมว่าหุ้นตัวไหนกำลังอยู่ในกลุ่มนำตลาด",
    assets: ["S&P 500"], href: "https://app.jptrustlearning.com/Free_scannerSP500%20(6).html"
  },
  {
    cat: "dashboard", type: "dashboard", status: "active",
    title: "Gold Momentum — เวอร์ชันเปิดให้ใช้ฟรี",
    desc: "แดชบอร์ดโมเมนตัมทองคำ แสดงสัญญาณและพฤติกรรมราคาย้อนหลัง สำหรับผู้ที่ต้องการติดตามทองคำในกรอบระยะกลาง",
    assets: ["Gold"], href: "https://app.jptrustlearning.com/JPTrust_Free_GOLD.html"
  },

  /* ---------- กลยุทธ์ Momentum ---------- */
  {
    cat: "momentum", type: "article", status: "active",
    title: "Factor Decay: สัญญาณโมเมนตัม 30 ปี \"เสื่อม\" หรือยัง — วัดด้วย Rank IC",
    desc: "สัญญาณที่เคยได้ผล จะได้ผลตลอดไปไหม — วัดสุขภาพสัญญาณด้วย Rank IC ทุกรอบ rebalance 236 รอบตลอด 30 ปี พบทศวรรษที่สัญญาณหลับสนิทแต่พอร์ตยังรอด แล้วจับแชมป์ชนผู้ท้าชิงจากตำราอีก 4 factor บนเงื่อนไขเดียวกันเป๊ะ พร้อมเปิดข้อจำกัดของข้อมูลทั้งหมด",
    assets: ["S&P 500"], href: "https://public.jptrustlearning.com/factor-decay-rank-ic.html"
  },
  {
    cat: "momentum", type: "own", status: "active",
    title: "กระจายพอร์ตแบบไหนดีกว่ากัน — ผลทดสอบ 7 รูปทรง 3 ช่วงเวลา",
    desc: "ถือหุ้น 10 ตัวเท่ากัน แต่กระจายคนละรูปทรง (10×1 · 5×2 · 4×3) ผลต่างกันแค่ไหน — ทดสอบบนกลยุทธ์โมเมนตัมชุดเดียวกัน ทั้งระบบ 11 อุตสาหกรรมและ 28 ธีม วัดด้วย Average Drawdown · Ulcer Index · Sortino ไม่ใช่แค่ Max Drawdown พร้อมหมายเหตุข้อจำกัดของชุดข้อมูล",
    assets: ["S&P 500"], href: "https://public.jptrustlearning.com/diversification-shape.html"
  },
  {
    cat: "momentum", type: "article", status: "active",
    title: "หุ้น Momentum คืออะไร? — พื้นฐานสำหรับมือใหม่",
    desc: "อธิบายแนวคิด 'ของที่กำลังแรง มักจะแรงต่อ' — ทำไม Momentum ถึงเกิด วัดจากราคาและปริมาณซื้อขายอย่างไร พร้อมงานวิจัยรองรับ (Jegadeesh & Titman 1993) และตัวอย่างเปรียบเทียบ ย่อยให้มือใหม่เข้าใจง่าย",
    assets: ["S&P 500"], href: "https://public.jptrustlearning.com/what-is-momentum.html"
  },
  {
    cat: "momentum", type: "article", status: "active",
    title: "ทำไมหุ้นบางตัวขึ้นต่อเนื่องหลายเดือน?",
    desc: "ข่าวดีชิ้นเดียวไม่ได้ถูกรับรู้จบในวันเดียว — เจาะกลไกที่ทำให้ราคาไต่ขึ้นเป็นขั้นบันไดนานหลายเดือน ทั้งการไหลต่อของราคาหลังประกาศงบ (PEAD) เงินสถาบันที่ทยอยสะสม และการปรับประมาณการของนักวิเคราะห์ พร้อมสัญญาณว่าแรงส่งกำลังหมด อ้างอิง Ball & Brown (1968), Bernard & Thomas (1989), Jegadeesh & Titman (1993)",
    assets: ["S&P 500"], href: "https://public.jptrustlearning.com/why-stocks-rise-for-months.html"
  },
  {
    cat: "momentum", type: "article", status: "active",
    title: "หุ้นแบบไหนเรียกว่า Momentum? — เกณฑ์คัดหุ้นแรง",
    desc: "เช็กลิสต์คุณสมบัติหุ้น Momentum 4 ข้อ — แข็งแกร่งกว่าตลาด · ขาขึ้นชัด · Volume หนุน · แรงส่งต่อเนื่อง พร้อมแยกให้เห็นว่าแบบไหน 'ไม่ใช่' Momentum (เด้งวันเดียว · หุ้นร่วง · หุ้นกระแสที่ราคาไม่ยืนยัน)",
    assets: ["S&P 500"], href: "https://public.jptrustlearning.com/momentum-stock-criteria.html"
  },
  {
    cat: "momentum", type: "article", status: "active",
    title: "Momentum Investing คืออะไร? — กลยุทธ์ลงทุนตามแรงส่ง",
    desc: "กลยุทธ์เลือกซื้อหุ้นที่กำลังแรงแล้วถือตามระบบ ปรับพอร์ตเป็นรอบ ไม่เดา ไม่เทรดตามข่าว — อธิบายกระบวนการ 4 ขั้น (คัด · ลงเท่ากัน · ถือ · Rebalance) เหตุผลเชิงคณิตศาสตร์ที่ทำให้ได้ผล และงานวิจัยรองรับ (Jegadeesh & Titman 1993, AQR)",
    assets: ["S&P 500"], href: "https://public.jptrustlearning.com/momentum-investing.html"
  },
  {
    cat: "momentum", type: "article", status: "active",
    title: "Momentum ต่างจากหุ้นเติบโต (Growth) อย่างไร?",
    desc: "Momentum คัดหุ้นจากพฤติกรรมราคาที่กำลังนำตลาด ส่วนหุ้นเติบโต (Growth) คัดจากพื้นฐานธุรกิจที่โตเร็ว — อธิบายจุดต่าง จุดทับซ้อน พร้อมตัวอย่างหุ้นที่เป็นอย่างหนึ่งแต่ไม่เป็นอีกอย่าง",
    assets: ["S&P 500"], href: "https://public.jptrustlearning.com/momentum-vs-growth.html"
  },
  {
    cat: "momentum", type: "article", status: "active",
    title: "Momentum ต่างจาก Value Investing อย่างไร?",
    desc: "ซื้อของแรง vs ซื้อของถูก — สองแนวคิดที่แทบตรงข้ามกันทั้งจังหวะซื้อและกรอบเวลา แต่งานวิจัย AQR พบว่าสัมพันธ์กันเชิงลบและเสริมกันได้ พร้อมตัวอย่างหุ้นตัวเดียวกันที่สองสายมองต่างกัน",
    assets: ["S&P 500"], href: "https://public.jptrustlearning.com/momentum-vs-value.html"
  },
  {
    cat: "momentum", type: "interactive", status: "active",
    title: "Rolling 6M Momentum Lab · 1996–2026",
    desc: "Backtest กลยุทธ์ momentum หมุนสลับล็อตทุกเดือน ทดสอบ live ตั้งแต่กลางปี 1996 ครอบฟองสบู่ดอทคอม วิกฤตปี 2008 และโควิด พร้อม trade log เต็ม",
    assets: ["S&P 500"], href: "https://app.jptrustlearning.com/sp500-rolling-lb6-hold6_lab_v7_hist1996.html"
  },
  {
    cat: "momentum", type: "article", status: "active",
    title: "SMC Patient Hunter — Strategy Report",
    desc: "รายงานสรุปตรรกะกลยุทธ์ตามแนว Smart Money Concept ที่รอจังหวะเข้าซื้อแบบเลือกสรร พร้อมผลทดสอบและเงื่อนไขความเสี่ยง",
    assets: ["S&P 500"], href: "https://app.jptrustlearning.com/smc-patient-hunter-report.html"
  },
  {
    cat: "momentum", type: "own", status: "dev",
    title: "Momentum Research",
    desc: "งานวิจัยเชิงลึกว่าด้วยพฤติกรรม momentum ของหุ้นผู้นำตลาด — ช่วง lookback, รอบ rebalance และการกระจายล็อต กำลังเรียบเรียง",
    assets: ["S&P 500"], href: "#"
  },

  /* ---------- Macro & ความเสี่ยง ---------- */
  {
    cat: "macro", type: "interactive", status: "active",
    title: "Macro Overlay & Defensive Extend (v8neg)",
    desc: "ขยายรอบถือเมื่อสัญญาณ macro 4 สินทรัพย์ (SPY · WTI · Gold · USDJPY) ติดลบพร้อมกัน — โมเดลตั้งรับเมื่อไม่มีตัวนำให้หนีไป ทดสอบย้อนถึง 1996",
    assets: ["S&P 500", "Gold", "FX"], href: "https://app.jptrustlearning.com/sp500-rolling-lb6-hold6_lab_v8neg_hist1996.html"
  },
  {
    cat: "macro", type: "interactive", status: "active",
    title: "USDJPY × SPY — สัญญาณ 6 เดือน",
    desc: "ความสัมพันธ์ระหว่างค่าเงินเยนกับตลาดหุ้นสหรัฐในกรอบ 6 เดือน ใช้เป็นตัวกรอง risk-on / risk-off ของพอร์ต",
    assets: ["FX", "S&P 500"], href: "https://app.jptrustlearning.com/usdjpy-spy-6m-summary.html"
  },

  /* ---------- ข้อมูล & ระเบียบวิธี ---------- */
  {
    cat: "method", type: "own", status: "active",
    title: "Survivorship Bias ใน Backtest 25 ปี",
    desc: "วัด coverage จริงของดัชนีย้อนยุคดอทคอม (~50% ของสมาชิกจริง) แล้วประเมินว่าผลลัพธ์ backtest เกินจริงเท่าไร — ประมาณ +2–4% CAGR/ปี ในช่วงต้น และลดลงเหลือ ~0 ที่ปี 2015+",
    assets: ["S&P 500"], href: "#"
  },
  {
    cat: "method", type: "own", status: "active",
    title: "Data Integrity: ตรวจจับ Split & Delisted Corruption",
    desc: "ระเบียบวิธีคัดกรองข้อมูลราคาเสีย — ตรวจจับ stock split จริง (close ratio + volume jump) และข้อมูล delisted ปลอมจาก ticker collision ก่อนนำเข้า backtest",
    assets: ["S&P 500"], href: "#"
  },

  /* ---------- งานวิจัยคัดสรร ---------- */
  {
    cat: "curated", type: "curated", status: "ext",
    title: "Jegadeesh & Titman (1993) — Returns to Buying Winners",
    desc: "งานวิจัยวิชาการคลาสสิกที่วางรากฐานของ momentum investing แสดงว่าหุ้นที่ทำผลงานดีมักทำต่อในกรอบ 3–12 เดือน — งานคัดสรรจากภายนอก",
    assets: ["Academic"], href: "#"
  }
];

const TYPE_LABEL = {
  own: "งานวิจัยเรา", interactive: "Interactive", article: "บทความ",
  dashboard: "Dashboard", curated: "Curated"
};
const STATUS_LABEL = { active: "เผยแพร่แล้ว", dev: "กำลังพัฒนา", ext: "งานคัดสรร" };

const catCount = k => RESEARCH.filter(r => r.cat === k).length;
const catItems = k => RESEARCH.filter(r => r.cat === k);
const catByKey = k => CATS.find(c => c.key === k);
