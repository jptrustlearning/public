/* =====================================================================
   JPT · ปุ่มติดต่อทีมงาน (Customer Support) → LINE OA @jptrust · A233 (16 ต.ค. 2026)
   ใส่ในหน้า 1 บรรทัดก่อน </body>:
     <script defer src="/support-line.js?v=1"></script>
   ตัวเลือก: data-bottom="78"  ยกปุ่มขึ้น (px) เมื่อหน้ามีปุ่มลอยอื่นอยู่มุมขวาล่าง
   ไม่มีอิโมจิ · ไอคอน SVG หูฟัง + กล่องข้อความ (ตามภาพที่จูนส่ง) สีแบรนด์เลือดหมู/ทอง
   ไม่มี animation วน (หน้าแรกเคยกิน CPU — A132) · z-index 110 = ใต้แถบเมนูบน (120) และ modal (200)
   ===================================================================== */
(function(){
  if (document.getElementById('jptSupport')) return;
  var me = document.currentScript;
  var lift = me && me.getAttribute('data-bottom');
  var LINE_URL = 'https://line.me/R/ti/p/@jptrust';

  var css = ''
  + '#jptSupport{position:fixed;right:16px;bottom:calc(' + (lift ? (parseInt(lift,10)||16) : 18) + 'px + env(safe-area-inset-bottom,0px));z-index:110;'
  +   'display:block;width:58px;height:58px;text-decoration:none;-webkit-tap-highlight-color:transparent;'
  +   'animation:jptSupIn .45s ease-out .6s both}'
  + '#jptSupport .js-btn{width:58px;height:58px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;'
  +   'background:#FFFEF8;border:1px solid rgba(212,175,55,.6);'
  +   'box-shadow:0 12px 28px -10px rgba(26,10,14,.55),0 2px 6px rgba(26,10,14,.12);transition:transform .18s ease,box-shadow .18s ease}'
  + '#jptSupport .js-btn svg{width:36px;height:36px;display:block}'
  + '#jptSupport .js-tip{position:absolute;right:calc(100% + 10px);top:50%;background:#2d1018;color:#F4E4BA;border:1px solid rgba(212,175,55,.35);border-radius:14px;'
  +   'padding:8px 13px 8px;font-family:Anuphan,"Noto Sans Thai",system-ui,sans-serif;line-height:1.25;white-space:nowrap;'
  +   'box-shadow:0 10px 24px -10px rgba(26,10,14,.6);opacity:0;transform:translate(8px,-50%);pointer-events:none;transition:opacity .18s ease,transform .18s ease}'
  + '#jptSupport .js-tip b{display:block;font-size:13.5px;font-weight:600;color:#FAF6ED}'
  + '#jptSupport .js-tip span{display:block;font-size:11.5px;font-weight:400;color:#D4AF37;letter-spacing:.2px}'
  + '@media(hover:hover){#jptSupport:hover .js-btn{transform:translateY(-2px);box-shadow:0 16px 32px -10px rgba(26,10,14,.6),0 2px 6px rgba(26,10,14,.14)}'
  +   '#jptSupport:hover .js-tip{opacity:1;transform:translate(0,-50%)}}'
  + '#jptSupport:focus-visible{outline:none}'
  + '#jptSupport:focus-visible .js-btn{outline:2px solid #D4AF37;outline-offset:3px}'
  + '#jptSupport:focus-visible .js-tip{opacity:1;transform:translate(0,-50%)}'
  + '@media(max-width:480px){#jptSupport{right:14px;width:54px;height:54px}#jptSupport .js-btn{width:54px;height:54px}#jptSupport .js-btn svg{width:34px;height:34px}}'
  + '@keyframes jptSupIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}'
  + '@media(prefers-reduced-motion:reduce){#jptSupport{animation:none}}'
  + '@media print{#jptSupport{display:none!important}}';

  var ICON = '<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">'
  + '<path d="M9 24.6A15 15 0 0 1 39 24.6" fill="none" stroke="#3a1520" stroke-width="3.7"/>'
  + '<path d="M12.7 21.9V36.4H7.4A2.4 2.4 0 0 1 5 34V24.3A2.4 2.4 0 0 1 7.4 21.9Z" fill="#3a1520"/>'
  + '<path d="M35.3 21.9H40.6A2.4 2.4 0 0 1 43 24.3V34A2.4 2.4 0 0 1 40.6 36.4H35.3Z" fill="#3a1520"/>'
  + '<ellipse cx="24" cy="30.6" rx="9.6" ry="8.3" fill="#D4AF37"/>'
  + '<path d="M18.4 36.4C18.9 38.5 18.3 40 17 41.4C19.7 41.7 22.3 40.9 23.7 38.9Z" fill="#D4AF37"/>'
  + '</svg>';

  function mount(){
    if (document.getElementById('jptSupport')) return;
    var st = document.createElement('style');
    st.id = 'jpt-support-css';
    st.textContent = css;
    document.head.appendChild(st);

    var a = document.createElement('a');
    a.id = 'jptSupport';
    a.href = LINE_URL;
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('aria-label', 'ติดต่อทีมงาน ทาง LINE @jptrust');
    a.setAttribute('data-track', 'support-line');
    a.innerHTML = '<span class="js-btn">' + ICON + '</span>'
      + '<span class="js-tip" aria-hidden="true"><b>ติดต่อทีมงาน</b><span>LINE @jptrust</span></span>';
    document.body.appendChild(a);
  }

  if (document.body) mount();
  else document.addEventListener('DOMContentLoaded', mount);
})();
