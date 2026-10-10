/* GiveDestiny — ภาพประกอบต่อกล่อง (SVG วาดเอง · ไม่ใช้รูปจากเว็บองค์กร)
   สี: ทอง #C9A227 / #A8861A / #E1C56A · ชมพู #FBE3E8 / #F6CCD6 / #EFAFBF · ครีมทอง #F3E6BD
   gradient #gdBg / #gdGold / #gdPink ประกาศไว้ใน index.html (hidden svg) · viewBox 200×200 จัตุรัสเสมอ
   เพิ่มกล่องใหม่: GD_ART["<id>"] = '<svg ...>' · ถ้าไม่มี id หน้าเว็บจะใช้ไอคอนหมวดแทน */
window.GD_ART = (function(){
  var BG = '<rect width="200" height="200" fill="url(#gdBg)"/>';
  var SPARK = '<g fill="#E1C56A" opacity=".75"><circle cx="30" cy="34" r="3"/><circle cx="170" cy="28" r="2.2"/><circle cx="178" cy="150" r="2.6"/><circle cx="24" cy="160" r="2"/></g>';
  var G = '<g fill="none" stroke="#C9A227" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">';
  var W = function(inner){ return '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img">' + BG + SPARK + inner + '</svg>'; };
  var waves = function(y, op){ return '<path d="M14 ' + y + ' q12-9 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0" fill="none" stroke="#C9A227" stroke-width="3" stroke-linecap="round" opacity="' + (op || 1) + '"/>'; };
  var heart = function(x, y, s, fill){ return '<path transform="translate(' + x + ' ' + y + ') scale(' + s + ')" d="M0 6 C-2 1 -9 0 -9 -5 C-9 -9 -5 -11 -2 -9 C-1 -8 0 -7 0 -6 C0 -7 1 -8 2 -9 C5 -11 9 -9 9 -5 C9 0 2 1 0 6Z" fill="' + (fill || '#EFAFBF') + '" stroke="#C9A227" stroke-width="1.5"/>'; };

  return {
    /* 1 รามาฯ — ตึกโรงพยาบาล + กากบาททอง + ธง */
    rama: W(G +
      '<rect x="38" y="82" width="124" height="88" rx="8" fill="#fff"/>' +
      '<rect x="72" y="52" width="56" height="34" rx="7" fill="#fff"/>' +
      '<path d="M100 60v18M91 69h18" stroke-width="5"/>' +
      '<rect x="50" y="96" width="18" height="18" rx="3" fill="#FBE3E8"/><rect x="132" y="96" width="18" height="18" rx="3" fill="#FBE3E8"/>' +
      '<rect x="50" y="126" width="18" height="18" rx="3" fill="#FBE3E8"/><rect x="132" y="126" width="18" height="18" rx="3" fill="#FBE3E8"/>' +
      '<rect x="86" y="130" width="28" height="40" rx="5" fill="#F6CCD6"/>' +
      '<path d="M22 170h156"/>' +
      '<path d="M128 52V30"/><path d="M128 31h16l-4 6 4 6h-16z" fill="#EFAFBF"/>' +
      '</g>'),

    /* 2 ศิริราช — ตึกริมแม่น้ำ + หัวใจ */
    siriraj: W(G +
      '<path d="M48 142V78l52-26 52 26v64z" fill="#fff"/>' +
      '<path d="M48 78h104"/>' +
      '<rect x="60" y="92" width="16" height="16" rx="3" fill="#FBE3E8"/><rect x="124" y="92" width="16" height="16" rx="3" fill="#FBE3E8"/>' +
      '<rect x="60" y="118" width="16" height="16" rx="3" fill="#FBE3E8"/><rect x="124" y="118" width="16" height="16" rx="3" fill="#FBE3E8"/>' +
      '<rect x="88" y="112" width="24" height="30" rx="4" fill="#F6CCD6"/>' +
      heart(100, 66, 1.3, '#EFAFBF') +
      '</g>' + waves(158) + waves(174, .45)),

    /* 3 สร้างรอยยิ้ม — ใบหน้ายิ้มกว้าง */
    operationsmile: W(G +
      '<circle cx="100" cy="100" r="56" fill="#fff"/>' +
      '<path d="M76 90q6-7 12 0M112 90q6-7 12 0" stroke-width="3.5"/>' +
      '<path d="M70 110q30 32 60 0" stroke-width="4.5"/>' +
      '<circle cx="66" cy="110" r="7" fill="#FBE3E8" stroke="none"/><circle cx="134" cy="110" r="7" fill="#FBE3E8" stroke="none"/>' +
      '<path d="M150 56l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#E1C56A" stroke="#A8861A" stroke-width="1.5"/>' +
      '</g>'),

    /* 4 DonationHUB — ห่วงชูชีพ + คลื่น */
    donationhub: W(
      '<circle cx="100" cy="92" r="44" fill="none" stroke="#F6CCD6" stroke-width="24"/>' +
      '<circle cx="100" cy="92" r="44" fill="none" stroke="#C9A227" stroke-width="24" stroke-dasharray="34.6 34.5" transform="rotate(-22 100 92)"/>' +
      '<circle cx="100" cy="92" r="56" fill="none" stroke="#A8861A" stroke-width="2.5"/>' +
      '<circle cx="100" cy="92" r="32" fill="#fff" stroke="#A8861A" stroke-width="2.5"/>' +
      heart(100, 94, 1.2, '#EFAFBF') +
      waves(160) + waves(176, .45)),

    /* 5 เพื่อนพึ่ง(ภาฯ) — ถุงยังชีพ + คลื่น */
    friendsofpa: W(G +
      '<path d="M74 78c0-22 52-22 52 0" stroke-width="4"/>' +
      '<rect x="56" y="78" width="88" height="86" rx="14" fill="#fff"/>' +
      '<path d="M56 100h88" opacity=".6"/>' +
      heart(100, 128, 1.6, '#EFAFBF') +
      '<circle cx="42" cy="150" r="10" fill="#F3E6BD"/><path d="M34 150h16" stroke-width="2.5"/>' +
      '</g>' + waves(180, .6)),

    /* 6 รพ.เด็ก — หมีน้อย + หัวใจ */
    childrenhospital: W(G +
      '<circle cx="64" cy="70" r="16" fill="#fff"/><circle cx="136" cy="70" r="16" fill="#fff"/>' +
      '<circle cx="64" cy="70" r="7" fill="#FBE3E8" stroke="none"/><circle cx="136" cy="70" r="7" fill="#FBE3E8" stroke="none"/>' +
      '<circle cx="100" cy="104" r="46" fill="#fff"/>' +
      '<ellipse cx="100" cy="120" rx="20" ry="14" fill="#FBE3E8"/>' +
      '<circle cx="100" cy="114" r="4.5" fill="#A8861A" stroke="none"/>' +
      '<path d="M100 119v6M94 128q6 5 12 0"/>' +
      '<circle cx="84" cy="96" r="3.5" fill="#A8861A" stroke="none"/><circle cx="116" cy="96" r="3.5" fill="#A8861A" stroke="none"/>' +
      heart(148, 148, 1.6, '#EFAFBF') +
      '</g>'),

    /* 7 โสสะ — บ้านกับครอบครัว */
    sos: W(G +
      '<path d="M40 100L100 48l60 52" stroke-width="4"/>' +
      '<path d="M54 92v76h92V92" fill="#fff"/>' +
      heart(100, 76, 1.1, '#EFAFBF') +
      '<circle cx="78" cy="118" r="9" fill="#F6CCD6"/><path d="M64 156a14 14 0 0 1 28 0" fill="#FBE3E8"/>' +
      '<circle cx="122" cy="118" r="9" fill="#F6CCD6"/><path d="M108 156a14 14 0 0 1 28 0" fill="#FBE3E8"/>' +
      '<circle cx="100" cy="128" r="7" fill="#F3E6BD"/><path d="M90 156a10 10 0 0 1 20 0" fill="#F3E6BD"/>' +
      '</g>'),

    /* 8 ศุภนิมิต — หนังสือเปิด + ดวงอาทิตย์ */
    worldvision: W(G +
      '<circle cx="100" cy="66" r="20" fill="#F3E6BD"/>' +
      '<path d="M100 34v-8M100 106v-6M68 66h-8M140 66h-8M77 43l-6-6M129 43l6-6"/>' +
      '<path d="M30 150q35-16 70 0q35-16 70 0v-56q-35-16-70 0q-35-16-70 0z" fill="#fff"/>' +
      '<path d="M100 94v56"/>' +
      '<path d="M44 112q28-10 48-3M44 128q28-10 48-3M108 109q20-7 48 3M108 125q20-7 48 3" opacity=".5"/>' +
      '</g>'),

    /* 9 มูลนิธิเด็ก — ดอกทานตะวัน (บ้านทานตะวัน) */
    ffc: W(G +
      '<path d="M100 130v50"/><path d="M100 160q-20-2-26-18q16 0 26 18zM100 170q20-2 26-18q-16 0-26 18z" fill="#F3E6BD"/>' +
      (function(){ var s=''; for (var i=0;i<12;i++){ s += '<ellipse cx="100" cy="64" rx="10" ry="22" transform="rotate(' + (i*30) + ' 100 100)" fill="#E1C56A" stroke="#A8861A" stroke-width="2"/>'; } return s; })() +
      '<circle cx="100" cy="100" r="24" fill="#A8861A" stroke="#8A6E12"/>' +
      '<g fill="#F3E6BD" stroke="none"><circle cx="92" cy="94" r="2.5"/><circle cx="106" cy="92" r="2.5"/><circle cx="100" cy="104" r="2.5"/><circle cx="110" cy="106" r="2.2"/><circle cx="90" cy="108" r="2.2"/></g>' +
      '</g>'),

    /* 10 ช่วยคนตาบอด — ดวงตา + จุดเบรลล์ */
    blind: W(G +
      '<path d="M30 96q70-60 140 0q-70 60-140 0z" fill="#fff" stroke-width="3.5"/>' +
      '<circle cx="100" cy="96" r="24" fill="#F6CCD6"/><circle cx="100" cy="96" r="12" fill="#C9A227" stroke="#A8861A"/>' +
      '<circle cx="106" cy="90" r="4" fill="#fff" stroke="none"/>' +
      '<g fill="#C9A227" stroke="none"><circle cx="64" cy="150" r="6"/><circle cx="64" cy="170" r="6"/><circle cx="84" cy="150" r="6"/><circle cx="104" cy="170" r="6"/><circle cx="124" cy="150" r="6"/><circle cx="144" cy="150" r="6"/><circle cx="144" cy="170" r="6"/></g>' +
      '</g>'),

    /* 11 Soi Dog — หน้าหมา + ปลอกคอ */
    soidog: W(G +
      '<ellipse cx="54" cy="100" rx="16" ry="30" transform="rotate(14 54 100)" fill="#F6CCD6"/>' +
      '<ellipse cx="146" cy="100" rx="16" ry="30" transform="rotate(-14 146 100)" fill="#F6CCD6"/>' +
      '<circle cx="100" cy="96" r="46" fill="#fff"/>' +
      '<ellipse cx="100" cy="112" rx="18" ry="12" fill="#FBE3E8"/>' +
      '<ellipse cx="100" cy="106" rx="7" ry="5" fill="#A8861A" stroke="none"/>' +
      '<path d="M100 111v6M92 122q8 6 16 0"/>' +
      '<circle cx="84" cy="88" r="4" fill="#A8861A" stroke="none"/><circle cx="116" cy="88" r="4" fill="#A8861A" stroke="none"/>' +
      '<path d="M62 148q38 18 76 0" stroke-width="9" stroke="#E1C56A"/><path d="M62 148q38 18 76 0" stroke-width="9" stroke="#C9A227" stroke-dasharray="10 8"/>' +
      heart(100, 170, 1.1, '#EFAFBF') +
      '</g>'),

    /* 12 บ้านสงเคราะห์สัตว์พิการ — หมารถเข็น (หันขวา ล้อใต้ท้ายลำตัว) */
    home4animals: W(G +
      '<path d="M50 108q-12-14-6-26" stroke-width="3.5"/>' +
      '<ellipse cx="98" cy="108" rx="48" ry="26" fill="#fff"/>' +
      '<circle cx="146" cy="86" r="22" fill="#fff"/>' +
      '<ellipse cx="128" cy="76" rx="8" ry="16" transform="rotate(20 128 76)" fill="#F6CCD6"/>' +
      '<circle cx="152" cy="84" r="3" fill="#A8861A" stroke="none"/><ellipse cx="166" cy="92" rx="4.5" ry="3.5" fill="#A8861A" stroke="none"/>' +
      '<path d="M156 100q6 4 10-2" stroke-width="2.5"/>' +
      '<path d="M122 132v30M138 130v32" stroke-width="4"/>' +
      '<path d="M62 134h32" stroke-width="4"/><path d="M68 134v12M88 134v12" stroke-width="3"/>' +
      '<circle cx="68" cy="160" r="15" fill="#F3E6BD"/><path d="M68 145v30M53 160h30M57.4 149.4l21.2 21.2M78.6 149.4l-21.2 21.2" stroke-width="1.8" opacity=".7"/><circle cx="68" cy="160" r="4.5" fill="#C9A227" stroke="none"/>' +
      '<circle cx="94" cy="160" r="15" fill="#F3E6BD"/><path d="M94 145v30M79 160h30M83.4 149.4l21.2 21.2M104.6 149.4l-21.2 21.2" stroke-width="1.8" opacity=".7"/><circle cx="94" cy="160" r="4.5" fill="#C9A227" stroke="none"/>' +
      heart(170, 146, 1.2, '#EFAFBF') +
      '</g>'),

    /* 13 สืบนาคะเสถียร — ภูเขา ต้นสน และช้างหันซ้าย */
    seub: W(G +
      '<path d="M14 118L56 62l36 56z" fill="#FBE3E8"/><path d="M84 118l44-64 58 64z" fill="#F3E6BD"/>' +
      '<path d="M28 118l10-16 10 16zM40 118l12-20 12 20zM142 118l12-20 12 20zM158 118l10-16 10 16z" fill="#fff"/>' +
      '<path d="M20 170h160" opacity=".6"/>' +
      '<path d="M76 168v-30q0-24 26-24h30q26 0 26 24v30" fill="#fff"/>' +
      '<path d="M84 168v-16M100 168v-14M132 168v-14M150 168v-16" stroke-width="3.5"/>' +
      '<circle cx="66" cy="122" r="22" fill="#fff"/>' +
      '<path d="M50 136c-10 6-14 20-8 32" stroke-width="7" stroke="#fff"/><path d="M50 136c-10 6-14 20-8 32" stroke-width="3"/>' +
      '<ellipse cx="80" cy="120" rx="10" ry="16" fill="#F6CCD6"/>' +
      '<circle cx="58" cy="118" r="2.8" fill="#A8861A" stroke="none"/>' +
      '<path d="M48 130q-6 6-10 4" stroke-width="2.5" opacity=".8"/>' +
      '</g>'),

    /* 14 รักษ์ไทย — สองมือประคองต้นกล้าในดิน */
    raksthai: W(G +
      '<path d="M100 132V84"/>' +
      '<path d="M100 108q-8-26-36-24q6 26 36 24zM100 94q8-26 36-24q-6 26-36 24z" fill="#F3E6BD"/>' +
      '<path d="M66 140q34-14 68 0v8q-34 10-68 0z" fill="#A8861A" stroke="#8A6E12"/>' +
      '<path d="M66 140v-10q0-8 8-8t8 8v10M50 150q0-12 10-12t10 10v12q0 12 14 14h12" fill="#fff"/>' +
      '<path d="M134 140v-10q0-8-8-8t-8 8v10M150 150q0-12-10-12t-10 10v12q0 12-14 14h-12" fill="#fff"/>' +
      '<path d="M50 150v18q0 12 12 12h76q12 0 12-12v-18" fill="#fff"/>' +
      '<path d="M74 176q26 6 52 0" opacity=".5"/>' +
      '</g>'),

    /* 15 กระจกเงา — กระจกมือสะท้อนหัวใจ */
    mirror: W(G +
      '<path d="M100 136l-12 36h24z" fill="#E1C56A" stroke="#A8861A"/>' +
      '<circle cx="100" cy="88" r="52" fill="#fff" stroke-width="9" stroke="#E1C56A"/>' +
      '<circle cx="100" cy="88" r="52" stroke="#A8861A" stroke-width="2"/>' +
      '<path d="M66 70q12-20 34-22" stroke="#FBE3E8" stroke-width="5" opacity=".9"/>' +
      heart(100, 92, 2.4, '#EFAFBF') +
      '</g>'),

    /* 16 สันติภาวัน — ดอกบัวบานในบาตร */
    santibhavan: W(G +
      '<path d="M100 108q-18-24 0-54q18 30 0 54z" fill="#F6CCD6"/>' +
      '<path d="M100 108q-36-12-40-44q30 6 40 44zM100 108q36-12 40-44q-30 6-40 44z" fill="#FBE3E8"/>' +
      '<path d="M100 108q-48 2-58-26q36-4 58 26zM100 108q48 2 58-26q-36-4-58 26z" fill="#fff"/>' +
      '<path d="M40 112h120" stroke-width="4"/>' +
      '<path d="M46 112q6 50 54 50t54-50" fill="#fff"/>' +
      '<path d="M62 122q0 26 30 32" opacity=".35"/>' +
      '</g>')
  };
})();
