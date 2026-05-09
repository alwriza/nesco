"use client";

export default function PageRu() {
  return (
    <div>

      {/* ND NAV */}
      <div className="nd-nav" id="nd-navbar">
        <div className="nd-nav-inner">
          <a href="/ru" className="nd-nav-logo">
            <img src="/images/149/15248642/logo2-eaRu4CpcSUUG0yx_VFAUbA.png" alt="NEScO" />
          </a>
          <ul className="nd-nav-menu" id="nd-nav-menu">
            <li><a href="#ed-646418145">Правила</a></li>
            <li><a href="#nd-team">Команда</a></li>
            <li><a href="#nd-partners">Партнёры</a></li>
            <li><a href="#nd-contacts">Контакты</a></li>
          </ul>
          <div className="nd-nav-right">
            <a href="/ru/register" className="nd-nav-reg">Регистрация</a>
            <div className="nd-nav-langs">
              <a href="/kk">KZ</a><a href="/en">EN</a><a href="/ru" className="active">RU</a>
            </div>
            <button className="nd-burger" id="nd-burger" aria-label="menu" onClick={() => { const m = document.getElementById('nd-nav-menu'); if (m) m.classList.toggle('open'); }}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
  /* Accordion Optimizations */
  .preset-accordion-v3-tech-startup {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    background-color: #1a1654 !important;
    background-image: url("/images/431/5912614/honecombshapebackgroundimage.png") !important;
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    width: 100vw !important;
    position: relative !important;
    left: 50% !important;
    margin-left: -50vw !important;
    padding: 0 0 80px !important;
    border: none !important;
    overflow: hidden !important;
    box-sizing: border-box !important;
  }
  .nd-divider-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }
  .nd-divider-bottom svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 80px;
    margin-bottom: -1px;
    shape-rendering: auto;
  }
  .nd-divider-bottom .shape-fill {
    fill: #f8f8fc;
  }
  .preset-accordion-v3-tech-startup .accordion-trigger,
  .preset-accordion-v3-tech-startup .accordion-content,
  .preset-accordion-v3-tech-startup .accordion-content .inner,
  .preset-accordion-v3-tech-startup .inner,
  .preset-accordion-v3-tech-startup .columns-box,
  .preset-accordion-v3-tech-startup .columns-box .inner,
  .preset-accordion-v3-tech-startup .preset-columns-two-v2-tech-startup,
  .preset-accordion-v3-tech-startup .preset-columns-two-v2-tech-startup .inner {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }
  .preset-accordion-v3-tech-startup > .inner {
    max-width: 1000px !important;
    margin: 0 auto !important;
    padding: 0 20px !important;
  }
  .preset-accordion-v3-tech-startup .accordion-trigger {
    border: none !important;
    padding: 10px 0 !important;
  }
  .preset-accordion-v3-tech-startup .accordion-trigger h4,
  .preset-accordion-v3-tech-startup .accordion-trigger h3 {
    font-family: 'Playfair Display', serif !important;
    font-size: 28px !important;
    letter-spacing: 0.5px !important;
    text-align: left !important;
    color: #fff !important;
    margin: 0 !important;
    padding-top: 30px !important;
  }
  .preset-accordion-v3-tech-startup .accordion-content .inner {
    padding: 0 0 20px !important;
  }
  .preset-accordion-v3-tech-startup .ed-image {
    display: block !important;
    max-width: 100% !important;
    height: auto !important;
    margin: 0 !important;
  }
  .preset-accordion-v3-tech-startup .ed-image img {
    max-height: 450px !important;
    width: auto !important;
    max-width: 100% !important;
    object-fit: contain !important;
  }
  .preset-accordion-v3-tech-startup .preset-columns-two-v2-tech-startup > .inner {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 40px !important;
    align-items: center !important;
  }
  .preset-accordion-v3-tech-startup .columns-box {
    flex: 1 1 450px !important;
    max-width: 100% !important;
    padding: 0 !important;
  }
  .preset-accordion-v3-tech-startup .ed-text p,
  .preset-accordion-v3-tech-startup .ed-text ul li,
  .preset-accordion-v3-tech-startup .ed-text span {
    font-family: 'Roboto', sans-serif !important;
    font-size: 20px !important;
    line-height: 1.6 !important;
    color: rgba(255,255,255,0.9) !important;
    text-align: left !important;
  }
  .preset-accordion-v3-tech-startup .ed-headline h3 {
    font-family: 'Playfair Display', serif !important;
    font-size: 32px !important;
    margin-top: 0 !important;
    margin-bottom: 20px !important;
    text-align: left !important;
    color: #fff !important;
  }
  #ed-646418145 > .inner, #ed-647200827 > .inner, #ed-612774587 > .inner {
    padding: 0 !important;
  }
  .preset-accordion-v3-tech-startup .wv-boxed,
  .preset-accordion-v3-tech-startup .wv-spacer {
    padding: 0 !important;
    margin: 0 !important;
  }
  .preset-accordion-v3-tech-startup .ed-spacer {
    display: none !important;
  }
  .nd-scroll-indicator { display: none !important; }
  .nd-nav {
    position: sticky; top: 0; z-index: 200;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(0,0,0,0.05);
    transition: background 0.3s;
  }
  .nd-nav-inner {
    max-width: 1200px; margin: 0 auto;
    padding: 0 2rem; height: 80px;
    display: flex; align-items: center; gap: 2rem;
  }
  .nd-nav-logo img { width: 110px; height: auto; display: block; }
  .nd-nav-menu {
    flex: 1; display: flex; align-items: center; gap: 1.75rem;
    list-style: none; margin: 0; padding: 0;
    justify-content: center;
  }
  .nd-nav-menu a {
    font-family: 'Roboto', sans-serif; font-size: 15px;
    color: #1a1654; text-decoration: none; font-weight: 500;
    letter-spacing: 0.5px; transition: color 0.2s;
  }
  .nd-nav-menu a:hover, .nd-nav-menu a.active { color: #8b87e8; }
  .nd-nav-right { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }
  .nd-nav-reg {
    font-family: 'Roboto', sans-serif; font-size: 14px; font-weight: 500;
    background: #5b54e8; color: #fff; padding: 0.6rem 1.4rem;
    border-radius: 6px; text-decoration: none; transition: background 0.2s;
    white-space: nowrap;
  }
  .nd-nav-reg:hover { background: #4a43d4; }
  .nd-nav-langs { display: flex; gap: 12px; }
  .nd-nav-langs a {
    font-family: 'Roboto', sans-serif; font-size: 13px; font-weight: 700;
    color: #1a1654; text-decoration: none;
    opacity: 0.5;
    transition: all 0.2s;
    position: relative;
    padding: 0 !important;
    background: transparent !important;
  }
  .nd-nav-langs a:hover, .nd-nav-langs a.active {
    opacity: 1;
    color: #5b54e8;
  }
  .nd-nav-langs a.active::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #5b54e8;
  }
  .nd-burger {
    display: none; flex-direction: column; gap: 5px;
    background: none; border: none; cursor: pointer; padding: 4px;
  }
  .nd-burger span { display: block; width: 22px; height: 2px; background: #1a1654; border-radius: 2px; }
  @media (max-width: 900px) {
    .nd-nav-menu { display: none; position: fixed; inset: 0; flex-direction: column; justify-content: center; background: #0a0820; z-index: 300; gap: 2rem; }
    .nd-nav-menu.open { display: flex; }
    .nd-nav-menu a { font-size: 20px; color: rgba(255,255,255,0.8); }
    .nd-burger { display: flex; z-index: 301; }
  }

  .nd-stats-row {
    display: grid; grid-template-columns: repeat(3,1fr); gap: 10px;
    margin-top: 24px;
  }
  .nd-stat {
    background: rgba(18,16,74,0.7); border: 1px solid rgba(91,84,232,0.25);
    border-radius: 8px; padding: 12px 14px;
  }
  .nd-stat-n { font-size: 24px; font-weight: 600; color: #fff; line-height: 1; }
  .nd-stat-l { font-size: 11px; color: rgba(255,255,255,0.4); margin-top: 4px; }
  .nd-deadline-badge {
    position: absolute; top: 20px; right: 20px;
    background: rgba(91,84,232,0.15); border: 1px solid rgba(91,84,232,0.35);
    border-radius: 6px; padding: 5px 10px;
    font-family: 'Roboto', sans-serif; font-size: 12px; color: #8b87e8;
  }
  .nd-scroll-indicator {
    text-align: center; font-size: 11px; color: rgba(255,255,255,0.25);
    margin-top: 16px; letter-spacing: 1px;
  }
  .nd-hero-btns { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
  .nd-btn-secondary {
    font-family: 'Roboto', sans-serif; font-size: 14px; color: rgba(255,255,255,0.6);
    border: 1px solid rgba(255,255,255,0.2); padding: 0.6rem 1.4rem;
    border-radius: 6px; text-decoration: none; transition: all 0.2s;
    background: transparent;
  }
  .nd-btn-secondary:hover { color: #fff; border-color: rgba(255,255,255,0.5); }
  /* Hide old logo strip under hero */
  #ed-646418064, #ed-647200764 { display: none !important; }

  .nd-rules-section { background: #1a1654; padding: 64px 2rem; }
  .nd-rules-inner { max-width: 900px; margin: 0 auto; }
  .nd-rules-header { text-align: center; margin-bottom: 36px; }
  .nd-rules-title { font-family: 'Playfair Display', serif; font-size: clamp(28px,4vw,42px); color: #fff; margin-bottom: 10px; }
  .nd-rules-tabs {
    display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;
    margin-bottom: 36px;
  }
  .nd-rtab {
    font-family: 'Roboto', sans-serif; font-size: 13px;
    padding: 7px 16px; border-radius: 100px;
    color: rgba(255,255,255,0.45); background: rgba(255,255,255,0.06);
    border: none; cursor: pointer; transition: all 0.2s;
  }
  .nd-rtab.active, .nd-rtab:hover { background: rgba(91,84,232,0.4); color: #fff; }
  .nd-rules-panel { display: none; }
  .nd-rules-panel.active { display: block; }
  .nd-rules-item {
    display: flex; gap: 16px; padding: 20px;
    background: rgba(255,255,255,0.04); border-radius: 10px;
    margin-bottom: 12px; border: 1px solid rgba(91,84,232,0.15);
    transition: border-color 0.2s;
  }
  .nd-rules-item:hover { border-color: rgba(91,84,232,0.4); }
  .nd-rules-icon {
    width: 42px; height: 42px; background: rgba(91,84,232,0.2);
    border-radius: 8px; display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; color: #8b87e8;
  }
  .nd-rules-step { font-size: 10px; color: #5b54e8; font-weight: 700; letter-spacing: 1px; margin-bottom: 4px; }
  .nd-rules-item-h { font-size: 15px; color: #fff; font-weight: 500; margin-bottom: 4px; }
  .nd-rules-item-s { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.6; }
  .nd-team-section { background: #f8f8fc; padding: 0; margin-top: -2px !important; border-top: none !important; position: relative !important; z-index: 10 !important; }
  .nd-team-inner { max-width: 1000px; margin: 0 auto; padding-top: 60px; padding-bottom: 60px; padding-left: 2rem; padding-right: 2rem; }
  .nd-team-header { text-align: center; margin-bottom: 40px; }
  .nd-team-title { font-family: 'Playfair Display', serif; font-size: clamp(26px,4vw,40px); color: #1a1654; margin-bottom: 8px; }
  .nd-team-sub { font-size: 14px; color: rgba(0,0,0,0.4); }
  .nd-team-group-title { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: rgba(0,0,0,0.3); text-align: center; margin-bottom: 20px; }
  .nd-team-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px 20px;
    margin-bottom: 40px;
  }
  @media (max-width: 900px) { .nd-team-grid { grid-template-columns: repeat(3, 1fr); gap: 30px 15px; } }
  @media (max-width: 600px) { .nd-team-grid { grid-template-columns: repeat(2, 1fr); gap: 30px 10px; } }
  .nd-team-card {
    background: transparent; border-radius: 0; padding: 0;
    text-align: center;
    box-shadow: none;
    transition: transform 0.2s;
  }
  .nd-team-card:hover { transform: translateY(-4px); }
  .nd-team-ava {
    width: 140px; height: 140px; border-radius: 50%;
    object-fit: cover; display: block; margin: 0 auto 12px;
    background: linear-gradient(135deg, #5b54e8, #3b34c8);
  }
  .nd-team-name { font-size: 22px; color: #1a1654; font-weight: 600; margin-bottom: 6px; }
  .nd-team-role { font-size: 18px; color: rgba(0,0,0,0.5); }

  .nd-partners-section {
    background: #f8f8fc; padding: 48px 2rem;
    text-align: center;
  }
  .nd-partners-title {
    font-family: 'Roboto', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 3px; text-transform: uppercase;
    color: rgba(0,0,0,0.35); margin-bottom: 28px;
  }
  .nd-partners-row {
    display: flex; align-items: center; justify-content: center;
    gap: 32px; flex-wrap: nowrap; overflow-x: auto; padding-bottom: 10px;
    max-width: 1000px; margin: 0 auto;
  }
  .nd-partners-row a { display: flex; align-items: center; }
  .nd-partners-row img {
    height: 80px; width: auto; max-width: 100%; object-fit: contain; flex-shrink: 1;
    object-fit: contain;
    
    transition: filter 0.3s;
  }
  
  /* Hide old partners section */
  #ed-647175036, #ed-647200767, #ed-612773933 { display: none !important; }

  .nd-footer {
    background: #0a0820; padding: 56px 2rem 0;
    font-family: 'Roboto', sans-serif;
  }
  .nd-footer-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 48px;
  }
  .nd-footer-brand-logo img { height: 38px; display: block; margin-bottom: 14px; }
  .nd-footer-brand-desc { font-size: 13px; color: rgba(255,255,255,0.35); line-height: 1.7; margin-bottom: 18px; }
  .nd-footer-socials { display: flex; gap: 10px; }
  .nd-footer-socials a {
    width: 34px; height: 34px; background: rgba(91,84,232,0.18);
    border-radius: 6px; display: flex; align-items: center; justify-content: center;
    text-decoration: none; transition: background 0.2s; font-size: 14px;
  }
  .nd-footer-socials a:hover { background: rgba(91,84,232,0.4); }
  .nd-footer-col-h { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 14px; }
  .nd-footer-links { list-style: none; margin: 0; padding: 0; }
  .nd-footer-links li { margin-bottom: 9px; }
  .nd-footer-links a { font-size: 13px; color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s; }
  .nd-footer-links a:hover { color: #8b87e8; }
  .nd-footer-copy {
    max-width: 1100px; margin: 40px auto 0;
    border-top: 1px solid rgba(255,255,255,0.06);
    padding: 18px 0; font-size: 12px;
    color: rgba(255,255,255,0.2); text-align: center;
  }
  /* Hide old footer */
  .preset-footer-thrud-v3-tech-startup, [class*="footer-thrud"] { display: none !important; }
  .ed-reference-container.footer { display: none !important; }

figure {
        margin: 0;
      }
      #ed-646418007 {
        flex-basis: auto;
        flex-grow: 1;
      }
      
      @media screen and (max-width: 575px) {
        
      }
      
      
      @media screen and (max-width: 575px) {
        
      }
      
      
      @media screen and (max-width: 575px) {
        
      }
      
      
      @media screen and (max-width: 575px) {
        
      }
      #ed-646418016 {
        flex-grow: 1;
        flex-basis: auto;
      }
      #ed-646418016 > .inner {
        place-content: center flex-end;
        align-items: center;
      }
      @media screen and (max-width: 975px) {
        #ed-646418016 > .inner {
          justify-content: flex-end;
        }
      }
      #ed-646418001 > .inner {
        justify-content: space-between;
        align-items: center;
      }
      #ed-646418028 {
        flex-basis: 489px;
      }
      #ed-646418028 h1 {
        text-align: left;
      }
      @media screen and (max-width: 975px) {
        #ed-646418028 {
          flex-basis: 500px;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646418028 {
          flex-basis: 100%;
        }
      }
      #ed-646418031 .space {
        height: 12px;
      }
      #ed-646418034 {
        flex-basis: 500px;
      }
      @media screen and (max-width: 575px) {
        #ed-646418034 {
          flex-basis: 100%;
        }
      }
      #ed-646418037 .space {
        height: 40px;
      }
      #ed-646418040 a.button {
        width: 211px;
      }
      #ed-646418040 {
        text-align: left;
      }
      @media screen and (max-width: 575px) {
        #ed-646418025 {
          margin: 60px 0px 0px;
        }
      }
      #ed-646418022 > .inner {
        align-content: center;
      }
      #ed-646418022 {
        order: 0;
        flex-grow: 1;
        flex-basis: auto;
      }
      #ed-646417998 > .inner {
        align-content: stretch;
        flex-direction: column;
      }
      #ed-646417998 {
        min-height: 90vh;
      }
      @media screen and (max-width: 975px) {
        #ed-646417998 {
          min-height: 600px;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646417998 {
          min-height: 90vh;
        }
      }
      #ed-646418073 .background-image-holder {
        background-position: left center;
        background-size: contain;
      }
      #ed-646418070 {
        text-align: center;
      }
      #ed-646418070 img {
        width: 342px;
      }
      #ed-646418067 {
        flex-grow: 1;
        flex-shrink: 1;
      }
      #ed-646418067 > .inner {
        place-content: flex-start;
        align-items: flex-start;
      }
      #ed-646418064 > .inner {
        justify-content: space-between;
        align-items: stretch;
      }
      #ed-646418148 {
        margin: 0px 32px 0px 8px;
      }
      @media screen and (max-width: 975px) {
        #ed-646418148 {
          margin: 0px 32px 0px 8px;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646418148 {
          flex-basis: auto;
          margin: 0px 8px;
          order: -1;
        }
      }
      #ed-646418163 .space {
        height: 12px;
      }
      #ed-646418157 > .inner {
        align-content: center;
      }
      #ed-646418172 {
        transform: translate3d(0px, 0px, 0px) scale(0.8) rotate(0deg)
          skew(0deg, 0deg);
      }
      @media screen and (max-width: 975px) {
        #ed-646418169 {
          order: -1;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646418169 {
          order: -1;
        }
      }
      #ed-646418175 {
        margin: 0px 32px 0px 0px;
      }
      @media screen and (max-width: 975px) {
        #ed-646418175 {
          flex-basis: auto;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646418175 {
          border-style: solid;
          border-width: 0px 0px 2px;
          margin: 0px 8px;
          order: -1;
        }
      }
      #ed-646418190 .space {
        height: 12px;
      }
      #ed-646418184 > .inner {
        align-content: center;
      }
      #ed-646418199 {
        transform: translate3d(0px, 0px, 0px) scale(0.8) rotate(0deg)
          skew(0deg, 0deg);
      }
      @media screen and (max-width: 975px) {
        #ed-646418196 {
          order: -1;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646418196 {
          order: -1;
        }
      }
      #ed-646418202 {
        margin: 0px 32px 0px 0px;
      }
      @media screen and (max-width: 975px) {
        #ed-646418202 {
          flex-basis: auto;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646418202 {
          flex-basis: auto;
          border-style: solid;
          border-width: 0px 0px 2px;
          margin: 0px 8px;
          order: -1;
        }
      }
      #ed-646418217 .space {
        height: 12px;
      }
      #ed-646418211 > .inner {
        align-content: center;
      }
      #ed-646418226 {
        transform: translate3d(0px, 0px, 0px) scale(0.8) rotate(0deg)
          skew(0deg, 0deg);
      }
      @media screen and (max-width: 975px) {
        #ed-646418223 {
          order: -1;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646418223 {
          order: -1;
        }
      }
      #ed-646418229 {
        margin: 0px 32px 0px 0px;
      }
      @media screen and (max-width: 975px) {
        #ed-646418229 {
          flex-basis: auto;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646418229 {
          flex-basis: auto;
          border-style: solid;
          border-width: 0px 0px 2px;
          margin: 0px 8px;
          order: -1;
        }
      }
      #ed-646418244 .space {
        height: 12px;
      }
      #ed-646418238 > .inner {
        align-content: center;
      }
      #ed-646418253 {
        transform: translate3d(0px, 0px, 0px) scale(0.8) rotate(0deg)
          skew(0deg, 0deg);
      }
      @media screen and (max-width: 975px) {
        #ed-646418250 {
          order: -1;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646418250 {
          order: -1;
        }
      }
      #ed-646418256 {
        margin: 0px 32px 0px 0px;
      }
      @media screen and (max-width: 975px) {
        #ed-646418256 {
          flex-basis: auto;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646418256 {
          flex-basis: auto;
          border-style: solid;
          border-width: 0px 0px 2px;
          margin: 0px 8px;
          order: -1;
        }
      }
      #ed-646418271 .space {
        height: 12px;
      }
      #ed-646418265 > .inner {
        align-content: center;
      }
      #ed-646418280 {
        transform: translate3d(0px, 0px, 0px) scale(0.8) rotate(0deg)
          skew(0deg, 0deg);
      }
      @media screen and (max-width: 975px) {
        #ed-646418277 {
          order: -1;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646418277 {
          order: -1;
        }
      }
      #ed-646418145 > .inner {
        padding: 80px;
      }
      #ed-646418145 {
        margin: 0px 0px 100px;
      }
      @media screen and (max-width: 975px) {
        #ed-646418145 {
          margin: 0px 0px 100px;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646418145 {
          margin: 0px 0px 80px;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646418145 > .inner {
          padding: 24px 16px;
        }
      }
      #ed-647175042 img {
        width: 100%;
      }
      #ed-647175045 img {
        width: 100%;
      }
      #ed-647175036 > .inner {
        padding: 40px 16px;
      }
      @media screen and (max-width: 975px) {
        #ed-647175036 > .inner {
          padding: 16px;
          justify-content: center;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-647175036 > .inner {
          justify-content: center;
          padding: 25px 16px;
        }
      }
      #ed-653501096 {
        text-align: left;
      }
      #ed-653501096 img {
        width: 149px;
      }
      #ed-653501099 .space {
        height: 16px;
      }
      #ed-653501093 > .inner {
        justify-content: flex-start;
      }
      #ed-653501108 .space {
        height: 16px;
      }
      @media screen and (max-width: 575px) {
        #ed-653501108 .space {
          height: 48px;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-653501111 {
          flex-basis: 100%;
        }
      }
      #ed-653501102 > .inner {
        justify-content: flex-end;
      }
      @media screen and (max-width: 575px) {
        #ed-653501102 > .inner {
          justify-content: flex-start;
        }
      }
      #ed-653501090 > .inner {
        place-content: flex-start center;
        align-items: flex-start;
      }
      #ed-653501114 {
        text-align: right;
      }
      #ed-653501114 svg {
        width: 5%;
      }
      #ed-657921622 > .inner {
        justify-content: center;
        padding: 80px 16px 32px;
      }
      #ed-648523911, #ed-648523914, #ed-648523917 {
        position: absolute;
        bottom: 28%;
        margin: 0;
        transform: none !important;
      }
      #ed-648523911 { right: 80px; }
      #ed-648523917 { right: 45px; }
      #ed-648523914 { right: 10px; }
      @media screen and (max-width: 575px) {
        #ed-648523911, #ed-648523914, #ed-648523917 { bottom: 5px; }
        #ed-648523911 { right: 75px; }
        #ed-648523917 { right: 40px; }
        #ed-648523914 { right: 5px; }
      }
    
      #ed-648608559 {
        position: absolute;
        left: 20px;
        top: 10px;
        transform: scale(0.2) !important;
        transform-origin: left top !important;
        margin: 0;
      }
      @media screen and (max-width: 975px) {
        #ed-648608559 { left: 10px; transform: scale(0.15) !important; }
      }
      @media screen and (max-width: 575px) {
        #ed-648608559 { left: 5px; transform: scale(0.12) !important; top: 5px; }
      }
    ` }} />
      <div className="ed-element ed-container banner preset-banner-v3-tech-startup preset-banner-v3-tech-startup-homepage" style={{ background: 'linear-gradient(81deg, #0a0820 0%, #150040 100%) 0% 0% / auto' }} id="ed-646417998">
        <div className="inner">
          <div className="ed-element ed-container wv-spacer banner-content wv-boxed" style={{ position: 'relative' }} id="ed-646418022">
            <div className="background">
              <figure className="ed-element ed-video wv-bg" id="ed-648608562">
                <video width="100%" playsInline autoPlay loop muted>
                  <source type="video/mp4" src="/images/0/15296793/pexels-video-3129957-tFIkL6xWZSkE_iekiTlz3w.mp4" />
                </video>
              </figure>
            </div>
            <div className="inner homepage" data-parallax-amount={0}>
              <div className="ed-element ed-container wv-boxed" style={{ backgroundColor: 'rgba(58, 60, 59, 0)', backgroundSize: 'auto' }} id="ed-646418025">
                <div className="inner">
                  <div className="ed-element ed-headline logo custom-theme wv-overflow_visible" id="ed-646418028">
                    <h1>
                      <span className="color-background">National Engineering &amp; Science Olympiad</span>
                    </h1>
                  </div>
                  <div className="ed-element ed-spacer" id="ed-646418031">
                    <div className="space" />
                  </div>
                  <div className="ed-element ed-text custom-theme" id="ed-646418034">
                    <p style={{ textAlign: 'left' }}>Инновационный формат научного соревнования для школьников</p>
                  </div>
                  <div className="ed-element ed-spacer" id="ed-646418037">
                    <div className="space" />
                  </div>
                  <div className="ed-element ed-button custom-theme" id="ed-646418040">
                    <a className="button center button-large" href="/ru/register">Зарегистрироваться</a>
                  </div>
                </div>
              </div>
              <div className="ed-element ed-spacer" id="ed-646418043">
                <div style={{ height: 15 }} className="space" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ed-element ed-container flex-align-items-stretch flex-justify-content-space-between wv-boxed wv-spacer preset-unequal-columns-v2-tech-startup full-width" id="ed-646418064">
        <div className="background">
          <figure className="ed-element ed-image wv-bg" id="ed-646418073">
            <div className="background-image-holder " data-background="url(&quot;/images/431/5912614/honecombshapebackgroundimage.png&quot;)" style={{ backgroundImage: 'none' }} />
          </figure>
        </div>
        <div className="inner">
          <div className="ed-element ed-container flex-align-items-start flex-justify-content-start flex-align-content-start unequal-columns-box unequal-columns-box-shrink wv-overflow_visible" id="ed-646418067">
            <div className="inner">
              <figure className="ed-element ed-image" id="ed-646418070">
                <img src="/images/342/15248642/logo2-eaRu4CpcSUUG0yx_VFAUbA.png" alt="" className="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="ed-element ed-container accordion wv-boxed wv-spacer full-width preset-accordion-v3-tech-startup" id="ed-646418145">
        <div className="inner">
          <div className="ed-element ed-headline custom-theme accordion-trigger" id="ed-646418148">
            <h4>
              <a className="wv-link-elm active" href="#!next"><strong>I.&nbsp;</strong>Требования к команде.</a>
            </h4>
          </div>
          <div className="ed-element ed-container accordion-content" id="ed-646418151" data-animation="{&quot;type&quot;:&quot;slide&quot;,&quot;initial&quot;:&quot;show&quot;,&quot;keepHeight&quot;:false,&quot;duration&quot;:&quot;0.5s&quot;,&quot;delay&quot;:&quot;0s&quot;,&quot;overlay&quot;:{&quot;width&quot;:&quot;auto&quot;},&quot;trigger&quot;:&quot;&quot;,&quot;group&quot;:{&quot;name&quot;:&quot;accordion_fd24_new&quot;,&quot;behavior&quot;:{&quot;show&quot;:&quot;hide&quot;,&quot;hide&quot;:&quot;hide&quot;}}}">
            <div className="inner">
              <div className="ed-element ed-container wv-boxed wv-spacer preset-columns-two-v2-tech-startup" id="ed-646418154">
                <div className="inner">
                  <div className="ed-element ed-container columns-box wv-overflow_visible" id="ed-646418157">
                    <div className="inner">
                      <div className="ed-element ed-headline custom-theme" id="ed-646418160">
                        <h3>
                          <span className="color-background">Требования к команде.</span>
                        </h3>
                      </div>
                      <div className="ed-element ed-spacer" id="ed-646418163">
                        <div className="space" />
                      </div>
                      <div className="ed-element ed-text custom-theme" id="ed-646418166">
                        <p>
                          • &nbsp; &nbsp;В одной команде должно быть 4 школьника.
                          Это могут быть учащиеся 8–12 классов.
                        </p>
                        <p><br /></p>
                        <p>
                          • &nbsp; &nbsp;Команда должна выбрать капитана — он
                          будет регистрировать команду, отправлять задания и
                          общаться с организаторами.
                        </p>
                        <p><br /></p>
                        <p>
                          • &nbsp; &nbsp;Все члены команды могут быть из одной
                          школы или из разных — если это заранее согласовано с
                          организаторами.
                        </p>
                        <p><br /></p>
                        <p>
                          • &nbsp; &nbsp;Во время олимпиады запрещено списывать,
                          пользоваться телефонами, справочниками и другими
                          электронными устройствами (если они не разрешены
                          организаторами).
                        </p>
                        <p><br /></p>
                        <p>
                          • &nbsp; &nbsp;Если кто-то из команды нарушит правила,
                          вся команда может быть дисквалифицирована.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ed-element ed-container columns-box wv-overflow_visible" id="ed-646418169">
                    <div className="inner">
                      <figure className="ed-element ed-image" id="ed-646418172">
                        <img src="/images/1000/15297363/9592975-G3k6XWBTf7QPMeklY8OI4A.png" alt="" className="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ed-element ed-headline custom-theme accordion-trigger" id="ed-646418175">
            <h3>
              <a className="wv-link-elm active" href="#!next">II. Первый этап.</a>
            </h3>
          </div>
          <div className="ed-element ed-container accordion-content animation-initial" id="ed-646418178" data-animation="{&quot;type&quot;:&quot;slide&quot;,&quot;initial&quot;:&quot;hide&quot;,&quot;keepHeight&quot;:false,&quot;duration&quot;:&quot;0.5s&quot;,&quot;delay&quot;:&quot;0s&quot;,&quot;overlay&quot;:{&quot;width&quot;:&quot;auto&quot;},&quot;trigger&quot;:&quot;&quot;,&quot;group&quot;:{&quot;name&quot;:&quot;accordion_fd24_new&quot;,&quot;behavior&quot;:{&quot;show&quot;:&quot;hide&quot;,&quot;hide&quot;:&quot;hide&quot;}}}">
            <div className="inner">
              <div className="ed-element ed-container wv-boxed wv-spacer preset-columns-two-v2-tech-startup" id="ed-646418181">
                <div className="inner">
                  <div className="ed-element ed-container columns-box wv-overflow_visible" id="ed-646418184">
                    <div className="inner">
                      <div className="ed-element ed-headline custom-theme" id="ed-646418187">
                        <h3>
                          <span className="color-background">Первый этап.</span>
                        </h3>
                      </div>
                      <div className="ed-element ed-spacer" id="ed-646418190">
                        <div className="space" />
                      </div>
                      <div className="ed-element ed-text custom-theme" id="ed-646418193">
                        <ul style={{ paddingLeft: '20px' }}>
                          <li style={{ marginBottom: '10px' }}>Онлайн-формат, 2 тура.</li>
                          <li style={{ marginBottom: '10px' }}><b>Тур 1</b> — 6–7 задач по математике, физике, химии, биологии. 3 часа, решения отправляет капитан.</li>
                          <li style={{ marginBottom: '10px' }}><b>Тур 2</b> — кейс-исследование. Получаете за 2 дня до начала, сдаёте PDF/DOCX.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="ed-element ed-container columns-box wv-overflow_visible" id="ed-646418196">
                    <div className="inner">
                      <figure className="ed-element ed-image" id="ed-646418199">
                        <img src="/images/1000/15297447/1-_vjNJI1WVvPoDrab_bhD6w.png" alt="" className="" srcSet="/images/576/15297447/1-_vjNJI1WVvPoDrab_bhD6w.png 576w, /images/976/15297447/1-_vjNJI1WVvPoDrab_bhD6w.png 976w, /images/1000/15297447/1-_vjNJI1WVvPoDrab_bhD6w.png 1000w" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ed-element ed-headline custom-theme accordion-trigger" id="ed-646418202">
            <h3>
              <a className="wv-link-elm active" href="#!next">III. Второй этап.</a>
            </h3>
          </div>
          <div className="ed-element ed-container accordion-content animation-initial" id="ed-646418205" data-animation="{&quot;type&quot;:&quot;slide&quot;,&quot;initial&quot;:&quot;hide&quot;,&quot;keepHeight&quot;:false,&quot;duration&quot;:&quot;0.5s&quot;,&quot;delay&quot;:&quot;0s&quot;,&quot;overlay&quot;:{&quot;width&quot;:&quot;auto&quot;},&quot;trigger&quot;:&quot;&quot;,&quot;group&quot;:{&quot;name&quot;:&quot;accordion_fd24_new&quot;,&quot;behavior&quot;:{&quot;show&quot;:&quot;hide&quot;,&quot;hide&quot;:&quot;hide&quot;}}}">
            <div className="inner">
              <div className="ed-element ed-container wv-boxed wv-spacer preset-columns-two-v2-tech-startup" id="ed-646418208">
                <div className="inner">
                  <div className="ed-element ed-container columns-box wv-overflow_visible" id="ed-646418211">
                    <div className="inner">
                      <div className="ed-element ed-headline custom-theme" id="ed-646418214">
                        <h3>
                          <span className="color-background">Второй этап.</span>
                        </h3>
                      </div>
                      <div className="ed-element ed-text custom-theme" id="ed-646418220">
                        <ul style={{ paddingLeft: '20px' }}>
                          <li style={{ marginBottom: '10px' }}>Финал очно в КБТУ, Алматы. 2 тура.</li>
                          <li style={{ marginBottom: '10px' }}><b>Тур 1</b> — 8 межпредметных задач. 4–5 часов.</li>
                          <li style={{ marginBottom: '10px' }}><b>Тур 2</b> — кейс стади. Апелляция в течение 5 часов после результатов.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="ed-element ed-container columns-box wv-overflow_visible" id="ed-646418223">
                    <div className="inner">
                      <figure className="ed-element ed-image" id="ed-646418226">
                        <img src="/images/1000/15297450/2-oLEbyxkAUaN0poSg-5Tapw.png" alt="" className="" srcSet="/images/576/15297450/2-oLEbyxkAUaN0poSg-5Tapw.png 576w, /images/976/15297450/2-oLEbyxkAUaN0poSg-5Tapw.png 976w, /images/1000/15297450/2-oLEbyxkAUaN0poSg-5Tapw.png 1000w" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ed-element ed-headline custom-theme accordion-trigger" id="ed-646418229">
            <h3>
              <a className="wv-link-elm active" href="#!next">IV. Кейс стади.</a>
            </h3>
          </div>
          <div className="ed-element ed-container accordion-content animation-initial" id="ed-646418232" data-animation="{&quot;type&quot;:&quot;slide&quot;,&quot;initial&quot;:&quot;hide&quot;,&quot;keepHeight&quot;:false,&quot;duration&quot;:&quot;0.5s&quot;,&quot;delay&quot;:&quot;0s&quot;,&quot;overlay&quot;:{&quot;width&quot;:&quot;auto&quot;},&quot;trigger&quot;:&quot;&quot;,&quot;group&quot;:{&quot;name&quot;:&quot;accordion_fd24_new&quot;,&quot;behavior&quot;:{&quot;show&quot;:&quot;hide&quot;,&quot;hide&quot;:&quot;hide&quot;}}}">
            <div className="inner">
              <div className="ed-element ed-container wv-boxed wv-spacer preset-columns-two-v2-tech-startup" id="ed-646418235">
                <div className="inner">
                  <div className="ed-element ed-container columns-box wv-overflow_visible" id="ed-646418238">
                    <div className="inner">
                      <div className="ed-element ed-headline custom-theme" id="ed-646418241">
                        <h3><span className="color-background">Кейс стади.</span></h3>
                      </div>
                      <div className="ed-element ed-spacer" id="ed-646418244">
                        <div className="space" />
                      </div>
                      <div className="ed-element ed-text custom-theme" id="ed-646418247">
                        <ul style={{ paddingLeft: '20px' }}>
                          <li style={{ marginBottom: '10px' }}>Два кейса: научный и инженерный.</li>
                          <li style={{ marginBottom: '10px' }}>Письменная работа до 40 страниц (APA 7).</li>
                          <li style={{ marginBottom: '10px' }}>Оригинальность ≥ 70%, ИИ-контент ≤ 20%. Плюс презентация перед жюри.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="ed-element ed-container columns-box wv-overflow_visible" id="ed-646418250">
                    <div className="inner">
                      <figure className="ed-element ed-image" id="ed-646418253">
                        <img src="/images/1000/15297290/0bqU8Stdenrz8JT63Q_Dqg.png" alt="" className="" srcSet="/images/576/15297290/0bqU8Stdenrz8JT63Q_Dqg.png 576w, /images/976/15297290/0bqU8Stdenrz8JT63Q_Dqg.png 976w, /images/1000/15297290/0bqU8Stdenrz8JT63Q_Dqg.png 1000w" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ed-element ed-headline custom-theme accordion-trigger" id="ed-646418256">
            <h3>
              <a className="wv-link-elm active" href="#!next">V. Главные даты.</a>
            </h3>
          </div>
          <div className="ed-element ed-container accordion-content animation-initial" id="ed-646418259" data-animation="{&quot;type&quot;:&quot;slide&quot;,&quot;initial&quot;:&quot;hide&quot;,&quot;keepHeight&quot;:false,&quot;duration&quot;:&quot;0.5s&quot;,&quot;delay&quot;:&quot;0s&quot;,&quot;overlay&quot;:{&quot;width&quot;:&quot;auto&quot;},&quot;trigger&quot;:&quot;&quot;,&quot;group&quot;:{&quot;name&quot;:&quot;accordion_fd24_new&quot;,&quot;behavior&quot;:{&quot;show&quot;:&quot;hide&quot;,&quot;hide&quot;:&quot;hide&quot;}}}">
            <div className="inner">
              <div className="ed-element ed-container wv-boxed wv-spacer preset-columns-two-v2-tech-startup">
                <div className="inner">
                  <div className="ed-element ed-container columns-box wv-overflow_visible">
                    <div className="inner">
                      <div className="ed-element ed-text custom-theme">
                        <p><b>Регистрация команд:</b> даты будут объявлены скоро.</p>
                        <p><br /></p>
                        <p><b>Онлайн-отборочный этап:</b> даты будут объявлены скоро.</p>
                        <p><br /></p>
                        <p><b>Финальный этап:</b> даты будут объявлены скоро.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nd-divider-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>

      {/* ND TEAM */}
      <section id="nd-team" className="nd-team-section">
        <div className="nd-team-inner">
          <div className="nd-team-header"><h2 className="nd-team-title">Команда</h2></div>
          <div className="nd-team-grid">

            <div className="nd-team-card">
              <img src="/images/1024/15290798/5-AbI4cfUUwQ0HSKdi9I6g.png" alt="Жүкеш Ғалымжан" className="nd-team-ava" />
              <div className="nd-team-name">Жүкеш Ғалымжан</div>
              <div className="nd-team-role">Организатор</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15290894/_EEPlzAC2-5zOSLaE-cd-Q.png" alt="Бақытбекова Еңлік" className="nd-team-ava" />
              <div className="nd-team-name">Бақытбекова Еңлік</div>
              <div className="nd-team-role">Организатор</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15290888/zTMGQAWwUA2cTZcruHkbPg.png" alt="Габдуллин Дариан" className="nd-team-ava" />
              <div className="nd-team-name">Габдуллин Дариан</div>
              <div className="nd-team-role">Организатор</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15290882/4_thsP1xTZMEKYtiknnzNg.png" alt="Некрюков Кирилл" className="nd-team-ava" />
              <div className="nd-team-name">Некрюков Кирилл</div>
              <div className="nd-team-role">Организатор</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15522230/xZZGvbySkYT5Tmwfnj2VRg.png" alt="Мукашева Саадат" className="nd-team-ava" />
              <div className="nd-team-name">Мукашева Саадат</div>
              <div className="nd-team-role">Главный Дизайнер</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291928/Y-G0NZxUrJ4t9hVDara1wg.png" alt="Амирбеков Мирас" className="nd-team-ava" />
              <div className="nd-team-name">Амирбеков Мирас</div>
              <div className="nd-team-role">Составитель / Жюри</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291195/4-C5hSlOJHyya3S9AHc61Q.png" alt="Елубай Бекасыл" className="nd-team-ava" />
              <div className="nd-team-name">Елубай Бекасыл</div>
              <div className="nd-team-role">Составитель / Академ. ком. / Жюри</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291293/H4ITPro6A_c-nEi8SPlP1A.png" alt="Рахимбаева Тамила" className="nd-team-ava" />
              <div className="nd-team-name">Рахимбаева Тамила</div>
              <div className="nd-team-role">Составитель</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291323/qEwseoAh29suEso69g2F1A.png" alt="Илюсизов Ринат" className="nd-team-ava" />
              <div className="nd-team-name">Илюсизов Ринат</div>
              <div className="nd-team-role">Составитель</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291344/3ny_7Ng99k7uT3dAaNJ5MQ.png" alt="Молдагул Адильжан" className="nd-team-ava" />
              <div className="nd-team-name">Молдагул Адильжан</div>
              <div className="nd-team-role">Составитель</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291194/Zl-j6YEfFxM5ltVvk8gUBw.png" alt="Ержанұлы Батыр" className="nd-team-ava" />
              <div className="nd-team-name">Ержанұлы Батыр</div>
              <div className="nd-team-role">Составитель / Академ. ком. / Жюри</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291421/AJTnTjFn4tGg-GOc2RYjvQ.png" alt="Алтай Аян" className="nd-team-ava" />
              <div className="nd-team-name">Алтай Аян</div>
              <div className="nd-team-role">Составитель</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291432/ivbqImGdBo_xVEIY7PUYhg.png" alt="Ануарбек Рамазан" className="nd-team-ava" />
              <div className="nd-team-name">Ануарбек Рамазан</div>
              <div className="nd-team-role">Составитель</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291419/zvIHSQKMEi5NnblLG619xA.png" alt="Тұралы Алиби" className="nd-team-ava" />
              <div className="nd-team-name">Тұралы Алиби</div>
              <div className="nd-team-role">Составитель</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291479/_kH_XyqQgPkWI1R5dauZaw.png" alt="Каракулов Дархан" className="nd-team-ava" />
              <div className="nd-team-name">Каракулов Дархан</div>
              <div className="nd-team-role">Составитель</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291192/UYrT-bh2I5vT9gC8GgVtPA.png" alt="Мұғалім Әліби" className="nd-team-ava" />
              <div className="nd-team-name">Мұғалім Әліби</div>
              <div className="nd-team-role">Академ. ком. / Жюри</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291494/fNDHghLiZ_X9tfavexb4Bw.png" alt="Нұрлыбек Тамерлан" className="nd-team-ava" />
              <div className="nd-team-name">Нұрлыбек Тамерлан</div>
              <div className="nd-team-role">Жюри</div>
            </div>
          </div>
        </div>
      </section>

      {/* ND PARTNERS */}
      <section id="nd-partners" className="nd-partners-section">
        <div className="nd-partners-title">Партнёры</div>
        <div className="nd-partners-row">
          <a href="https://kbtu.edu.kz/ru/" target="_blank" rel="noopener"><img src="/images/0/15097983/kbtu_logo.png" alt="КБТУ" /></a>
          <a href="https://www.nis.edu.kz/ru" target="_blank" rel="noopener"><img src="/images/0/15293250/2-5CN5MFUn8ajfCd_ZTxEV4w.png" alt="НИШ" /></a>
          <div style={{ display: 'flex', alignItems: 'center' }}><img src="/images/0/15424887/photo_2025-04-09_22-11-33-jM7ilPuI-C_pKN86H__SmQ.jpg" alt="Партнёр" style={{ height: 80, maxWidth: "100%", objectFit: "contain", flexShrink: 1, filter: 'grayscale(1) opacity(0.6)' }} /></div>
          <a href="https://bc-pf.org/" target="_blank" rel="noopener"><img src="/images/0/15424918/4043904ae112ef9216a2c54b494e802bcfc89697-Qty87Ii53mhzmYnb9SjiXQ.png" alt="BC-PF" /></a>
        </div>
      </section>

      {/* ND FOOTER */}
      <footer id="nd-contacts" className="nd-footer">
        <div className="nd-footer-inner">
          <div>
            <div className="nd-footer-brand-copy" style={{ opacity: 0.6, fontSize: '14px', fontWeight: '500' }}>© 2026 NEScO — National Engineering & Science Olympiad</div>
          </div>
          <div>
            <div className="nd-footer-col-h">Навигация</div>
            <ul className="nd-footer-links">
              <li><a href="#ed-646418145">Правила</a></li><li><a href="#nd-team">Команда</a></li><li><a href="#nd-partners">Партнёры</a></li><li><a href="/ru/register">Регистрация</a></li>
            </ul>
          </div>
          <div>
            <div className="nd-footer-col-h">Контакты</div>
            <ul className="nd-footer-links">
              <li><a href="mailto:info@nesco.kz" target="_blank" rel="noopener">info@nesco.kz</a></li><li><a href="https://t.me/nescokz" target="_blank" rel="noopener">Telegram</a></li><li><a href="https://www.instagram.com/nesco.kz" target="_blank" rel="noopener">Instagram</a></li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="ed-element ed-container wv-boxed wv-spacer preset-partners-v3-tech-startup full-width bg-user-2" id="ed-647175036">
        <div className="inner">
          <figure className="ed-element ed-image" id="ed-647175042">
            <a href="https://kbtu.edu.kz/ru/" target="_blank"><img src="/images/0/15097983/kbtu_logo.png" alt="" className="" /></a>
          </figure>
          <figure className="ed-element ed-image" id="ed-647175045">
            <a href="https://www.nis.edu.kz/ru" target="_blank"><img src="/images/0/15293250/2-5CN5MFUn8ajfCd_ZTxEV4w.png" alt="" className="" /></a>
          </figure>
          <figure className="ed-element ed-image" id="ed-655246876">
            <img src="/images/0/15424887/photo_2025-04-09_22-11-33-jM7ilPuI-C_pKN86H__SmQ.jpg" alt="" className="" />
          </figure>
          <figure className="ed-element ed-image" id="ed-655246879">
            <a href="https://bc-pf.org/" target="_blank"><img src="/images/0/15424918/4043904ae112ef9216a2c54b494e802bcfc89697-Qty87Ii53mhzmYnb9SjiXQ.png" alt="" className="" /></a>
          </figure>
        </div>
      </div>
      <div className="ed-element ed-reference ed-reference-container footer flex-justify-content-center wv-boxed wv-spacer wv-overflow_visible preset-footer-thrud-v3-tech-startup" id="ed-657921622" data-reference={653501087}>
        <div className="inner">
          <div className="ed-element ed-container footer-thrud-content flex-align-items-start flex-justify-content-center flex-align-content-start wv-overflow_visible" id="ed-653501090">
            <div className="inner">
              <div className="ed-element ed-container flex-justify-content-start footer-thrud-box" id="ed-653501093">
                <div className="inner">
                  <figure className="ed-element ed-image logo" id="ed-653501096">
                    <a href="/ru"><img src="/images/149/15248642/logo2-eaRu4CpcSUUG0yx_VFAUbA.png" alt="" className="" srcSet="/images/298/15248642/logo2-eaRu4CpcSUUG0yx_VFAUbA.png 2x" /></a>
                  </figure>
                  <div className="ed-element ed-spacer" id="ed-653501099">
                    <div className="space" />
                  </div>
                </div>
              </div>
              <div className="ed-element ed-container footer-thrud-box" id="ed-653501102">
                <div className="inner">
                  <div className="ed-element ed-spacer" id="ed-653501105">
                    <div style={{ height: 16 }} className="space" />
                  </div>
                  <div className="ed-element ed-spacer" id="ed-653501108">
                    <div className="space" />
                  </div>
                  <div className="ed-element ed-text custom-theme" id="ed-653501111">
                    <p style={{ textAlign: 'right' }}>
                      <a data-fr-linked="true" href="mailto:info@nesco.kz" id="isPasted">info@nesco.kz</a>
                    </p>
                    <p style={{ textAlign: 'right' }}>
                      <a data-fr-linked="true" href="http://t.me/nescokz" id="isPasted" target="_blank">Telegram</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <figure className="ed-element ed-icon" id="ed-653501114">
            <a href="https://www.instagram.com/nesco.kz?igsh=MW1ya3pzb2tkZjh2Yw==" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-icon="fa-brands-instagram" preserveAspectRatio="xMaxYMid" style={{ overflow: 'hidden' }}>
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" style={{ fill: 'rgb(255, 255, 255)' }} /></svg></a>
          </figure>
        </div>
      </div>
    </div>
  );
}