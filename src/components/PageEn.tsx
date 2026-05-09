"use client";

export default function PageEn() {
  return (
    <div>

      {/* ND NAV */}
      <div className="nd-nav" id="nd-navbar">
        <div className="nd-nav-inner">
          <a href="/en" className="nd-nav-logo">
            <img src="/images/149/15248642/logo2-eaRu4CpcSUUG0yx_VFAUbA.png" alt="NEScO" />
          </a>
          <ul className="nd-nav-menu" id="nd-nav-menu">
            <li><a href="#ed-612774587">Rules</a></li>
            <li><a href="#nd-team">Team</a></li>
            <li><a href="#nd-partners">Partners</a></li>
            <li><a href="#nd-contacts">Contacts</a></li>
          </ul>
          <div className="nd-nav-right">
            <a href="/en/register" className="nd-nav-reg">Register</a>
            <div className="nd-nav-langs">
              <a href="/kk">KZ</a><a href="/en" className="active">EN</a><a href="/ru">RU</a>
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
    padding-top: 10px !important;
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
      
      @media screen and (max-width: 975px) {
        
      }
      @media screen and (max-width: 575px) {
        
      }
      
      
      @media screen and (max-width: 575px) {
        
      }
      
      
      @media screen and (max-width: 575px) {
        
      }
      
      
      @media screen and (max-width: 575px) {
        
      }
      #ed-612773888 {
        flex-basis: auto;
        flex-grow: 1;
      }
      @media screen and (max-width: 975px) {
        #ed-612773888 {
          position: absolute;
          left: -50%;
        }
      }
      #ed-612773897 {
        flex-grow: 1;
        flex-basis: auto;
      }
      #ed-612773897 > .inner {
        place-content: center flex-end;
        align-items: center;
      }
      @media screen and (max-width: 975px) {
        #ed-612773897 > .inner {
          justify-content: flex-end;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-612773897 {
          transform: translate3d(0px, 0px, 0px) scale(1) rotate(0deg)
            skew(0deg, 0deg);
        }
      }
      #ed-612773882 > .inner {
        justify-content: space-between;
        align-items: center;
      }
      @media screen and (max-width: 575px) {
        #ed-612773882 {
          transform: translate3d(0px, 0px, 0px) scale(1) rotate(0deg)
            skew(0deg, 0deg);
        }
      }
      #ed-612773915 {
        flex-basis: 489px;
      }
      #ed-612773915 h1 {
        text-align: left;
      }
      @media screen and (max-width: 975px) {
        #ed-612773915 {
          flex-basis: 500px;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-612773915 {
          flex-basis: 100%;
        }
      }
      #ed-612773918 .space {
        height: 12px;
      }
      #ed-612773921 {
        flex-basis: 500px;
      }
      @media screen and (max-width: 575px) {
        #ed-612773921 {
          flex-basis: 100%;
        }
      }
      #ed-612773924 .space {
        height: 40px;
      }
      #ed-612773927 a.button {
        width: 211px;
      }
      #ed-612773927 {
        text-align: left;
      }
      @media screen and (max-width: 575px) {
        #ed-612773912 {
          margin: 60px 0px 0px;
        }
      }
      #ed-612773906 > .inner {
        align-content: center;
      }
      #ed-612773906 {
        order: 0;
        flex-grow: 1;
        flex-basis: auto;
      }
      #ed-612773879 > .inner {
        align-content: stretch;
        flex-direction: column;
      }
      #ed-612773879 {
        min-height: 90vh;
      }
      @media screen and (max-width: 975px) {
        #ed-612773879 {
          min-height: 600px;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-612773879 {
          min-height: 90vh;
        }
      }
      #ed-612774041 .background-image-holder {
        background-position: left center;
        background-size: contain;
      }
      #ed-612774038 {
        text-align: center;
      }
      #ed-612774038 img {
        width: 342px;
      }
      #ed-612774035 {
        flex-grow: 1;
        flex-shrink: 1;
      }
      #ed-612774035 > .inner {
        place-content: flex-start;
        align-items: flex-start;
      }
      #ed-612774032 > .inner {
        justify-content: space-between;
        align-items: stretch;
      }
      #ed-612774590 {
        margin: 0px 32px 0px 8px;
      }
      @media screen and (max-width: 975px) {
        #ed-612774590 {
          margin: 0px 32px 0px 8px;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-612774590 {
          flex-basis: auto;
          margin: 0px 8px;
          order: -1;
        }
      }
      #ed-612774605 .space {
        height: 12px;
      }
      #ed-612774599 > .inner {
        align-content: center;
      }
      #ed-612774614 {
        transform: translate3d(0px, 0px, 0px) scale(0.8) rotate(0deg)
          skew(0deg, 0deg);
      }
      @media screen and (max-width: 975px) {
        #ed-612774611 {
          order: -1;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-612774611 {
          order: -1;
        }
      }
      #ed-612774617 {
        margin: 0px 32px 0px 0px;
      }
      @media screen and (max-width: 975px) {
        #ed-612774617 {
          flex-basis: auto;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-612774617 {
          border-style: solid;
          border-width: 0px 0px 2px;
          margin: 0px 8px;
          order: -1;
        }
      }
      #ed-612774632 .space {
        height: 12px;
      }
      #ed-612774626 > .inner {
        align-content: center;
      }
      #ed-612774641 {
        transform: translate3d(0px, 0px, 0px) scale(0.8) rotate(0deg)
          skew(0deg, 0deg);
      }
      @media screen and (max-width: 975px) {
        #ed-612774638 {
          order: -1;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-612774638 {
          order: -1;
        }
      }
      #ed-612774644 {
        margin: 0px 32px 0px 0px;
      }
      @media screen and (max-width: 975px) {
        #ed-612774644 {
          flex-basis: auto;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-612774644 {
          flex-basis: auto;
          border-style: solid;
          border-width: 0px 0px 2px;
          margin: 0px 8px;
          order: -1;
        }
      }
      #ed-612774659 .space {
        height: 12px;
      }
      #ed-612774653 > .inner {
        align-content: center;
      }
      #ed-612774668 {
        transform: translate3d(0px, 0px, 0px) scale(0.8) rotate(0deg)
          skew(0deg, 0deg);
      }
      @media screen and (max-width: 975px) {
        #ed-612774665 {
          order: -1;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-612774665 {
          order: -1;
        }
      }
      #ed-646054799 {
        margin: 0px 32px 0px 0px;
      }
      @media screen and (max-width: 975px) {
        #ed-646054799 {
          flex-basis: auto;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646054799 {
          flex-basis: auto;
          border-style: solid;
          border-width: 0px 0px 2px;
          margin: 0px 8px;
          order: -1;
        }
      }
      #ed-646054814 .space {
        height: 12px;
      }
      #ed-646054808 > .inner {
        align-content: center;
      }
      #ed-646054823 {
        transform: translate3d(0px, 0px, 0px) scale(0.8) rotate(0deg)
          skew(0deg, 0deg);
      }
      @media screen and (max-width: 975px) {
        #ed-646054820 {
          order: -1;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646054820 {
          order: -1;
        }
      }
      #ed-646054826 {
        margin: 0px 32px 0px 0px;
      }
      @media screen and (max-width: 975px) {
        #ed-646054826 {
          flex-basis: auto;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646054826 {
          flex-basis: auto;
          border-style: solid;
          border-width: 0px 0px 2px;
          margin: 0px 8px;
          order: -1;
        }
      }
      #ed-646054841 .space {
        height: 12px;
      }
      #ed-646054835 > .inner {
        align-content: center;
      }
      #ed-646054850 {
        transform: translate3d(0px, 0px, 0px) scale(0.8) rotate(0deg)
          skew(0deg, 0deg);
      }
      @media screen and (max-width: 975px) {
        #ed-646054847 {
          order: -1;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-646054847 {
          order: -1;
        }
      }
      #ed-612774587 > .inner {
        padding: 80px;
      }
      #ed-612774587 {
        margin: 0px 0px 100px;
      }
      @media screen and (max-width: 975px) {
        #ed-612774587 {
          margin: 0px 0px 100px;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-612774587 {
          margin: 0px 0px 80px;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-612774587 > .inner {
          padding: 24px 16px;
        }
      }
      #ed-612773939 img {
        width: 100%;
      }
      #ed-612773942 img {
        width: 100%;
      }
      #ed-612773933 > .inner {
        padding: 40px 16px;
      }
      @media screen and (max-width: 975px) {
        #ed-612773933 > .inner {
          padding: 16px;
          justify-content: center;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-612773933 > .inner {
          justify-content: center;
          padding: 25px 16px;
        }
      }
      #ed-612774362 {
        text-align: left;
      }
      #ed-612774362 img {
        width: 149px;
      }
      #ed-612774365 .space {
        height: 16px;
      }
      #ed-612774359 > .inner {
        justify-content: flex-start;
      }
      #ed-612774380 .space {
        height: 16px;
      }
      @media screen and (max-width: 575px) {
        #ed-612774380 .space {
          height: 48px;
        }
      }
      @media screen and (max-width: 575px) {
        #ed-612774386 {
          flex-basis: 100%;
        }
      }
      #ed-612774371 > .inner {
        justify-content: flex-end;
      }
      @media screen and (max-width: 575px) {
        #ed-612774371 > .inner {
          justify-content: flex-start;
        }
      }
      #ed-612774356 > .inner {
        place-content: flex-start center;
        align-items: flex-start;
      }
      #ed-647173800 {
        text-align: right;
      }
      #ed-647173800 svg {
        width: 5%;
      }
      #ed-612774353 > .inner {
        justify-content: center;
        padding: 80px 16px 32px;
      }
      #ed-648479421, #ed-648521907, #ed-648521910 {
        position: absolute;
        bottom: 28%;
        margin: 0;
        transform: none !important;
      }
      #ed-648479421 { right: 80px; }
      #ed-648521910 { right: 45px; }
      #ed-648521907 { right: 10px; }
      @media screen and (max-width: 575px) {
        #ed-648479421, #ed-648521907, #ed-648521910 { bottom: 5px; }
        #ed-648479421 { right: 75px; }
        #ed-648521910 { right: 40px; }
        #ed-648521907 { right: 5px; }
      }
    
      #ed-648550053 {
        position: absolute;
        left: 20px;
        top: 10px;
        transform: scale(0.2) !important;
        transform-origin: left top !important;
        margin: 0;
      }
      @media screen and (max-width: 975px) {
        #ed-648550053 { left: 10px; transform: scale(0.15) !important; }
      }
      @media screen and (max-width: 575px) {
        #ed-648550053 { left: 5px; transform: scale(0.12) !important; top: 5px; }
      }
    ` }} />
      <div className="ed-element ed-container banner preset-banner-v3-tech-startup preset-banner-v3-tech-startup-homepage" style={{ background: 'linear-gradient(           81deg,           rgb(255, 255, 255) 0%,           rgb(122, 58, 254) 100%         )' }} id="ed-612773879">
        <div className="inner">
          <div className="ed-element ed-container wv-spacer banner-content wv-boxed" style={{ animation: '26s ease 0s infinite normal none running               gradient-background' }} id="ed-612773906">
            <div className="background">
              <figure className="ed-element ed-video wv-bg" id="ed-648530387">
                <video width="100%" playsInline loop muted autoPlay>
                  <source type="video/mp4" src="/images/0/15296477/pexels-video-3129957-DQln1HUgrZCXMqkN80poKg.mp4" />
                </video>
              </figure>
            </div>
            <div className="inner homepage" data-parallax-amount={0}>
              <div className="ed-element ed-container wv-boxed" style={{ backgroundColor: 'rgba(58, 60, 59, 0)', backgroundSize: 'auto' }} id="ed-612773912">
                <div className="inner">
                  <div className="ed-element ed-headline logo custom-theme wv-overflow_visible" id="ed-612773915">
                    <h1>
                      <span className="color-background">National Engineering &amp; Science Olympiad</span>
                    </h1>
                  </div>
                  <div className="ed-element ed-spacer" id="ed-612773918">
                    <div className="space" />
                  </div>
                  <div className="ed-element ed-text custom-theme" id="ed-612773921">
                    <p style={{ textAlign: 'left' }}>
                      An innovative format of a scientific competition aimed at
                      developing analytical thinking, teamwork, and an
                      interdisciplinary approach. Unlike traditional Olympiads,
                      NEScO offers participants the opportunity to solve real
                      engineering challenges in conditions that closely resemble
                      actual scientific and industrial environments.
                    </p>
                  </div>
                  <div className="ed-element ed-spacer" id="ed-612773924">
                    <div className="space" />
                  </div>
                  <div className="ed-element ed-button custom-theme" id="ed-612773927">
                    <a className="wv-link-elm button center button-large" href="/en/register">Register</a>
                  </div>
                </div>
              </div>
              <div className="ed-element ed-spacer" id="ed-612773930">
                <div style={{ height: 15 }} className="space" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ed-element ed-container accordion wv-boxed wv-spacer full-width preset-accordion-v3-tech-startup" id="ed-612774587">
        <div className="inner">
          <div className="ed-element ed-headline custom-theme accordion-trigger" id="ed-612774590">
            <h4>
              <a className="wv-link-elm active" href="#!next"><strong>I. Team Requirements.</strong></a>
            </h4>
          </div>
          <div className="ed-element ed-container accordion-content" id="ed-612774593" data-animation="{&quot;type&quot;:&quot;slide&quot;,&quot;initial&quot;:&quot;show&quot;,&quot;keepHeight&quot;:false,&quot;duration&quot;:&quot;0.5s&quot;,&quot;delay&quot;:&quot;0s&quot;,&quot;overlay&quot;:{&quot;width&quot;:&quot;auto&quot;},&quot;trigger&quot;:&quot;&quot;,&quot;group&quot;:{&quot;name&quot;:&quot;accordion_fd24_new&quot;,&quot;behavior&quot;:{&quot;show&quot;:&quot;hide&quot;,&quot;hide&quot;:&quot;hide&quot;}}}">
            <div className="inner">
              <div className="ed-element ed-container wv-boxed wv-spacer preset-columns-two-v2-tech-startup" id="ed-612774596">
                <div className="inner">
                  <div className="ed-element ed-container columns-box wv-overflow_visible" id="ed-612774599">
                    <div className="inner">
                      <div className="ed-element ed-headline custom-theme" id="ed-612774602">
                        <h3>
                          <span className="color-background">Team Requirements.</span>
                        </h3>
                      </div>
                      <div className="ed-element ed-spacer" id="ed-612774605">
                        <div className="space" />
                      </div>
                      <div className="ed-element ed-text custom-theme" id="ed-612774608">
                        <p>
                          • &nbsp;
                          <span style={{ color: 'oklab(0.952331 0.000418991 -0.00125992)', fontFamily: '"gg sans", "Noto Sans",                               "Helvetica Neue", Helvetica, Arial,                               sans-serif', fontSize: 16, fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: 400, letterSpacing: 'normal', orphans: 2, textAlign: 'left', textIndent: 0, textTransform: 'none', widows: 2, wordSpacing: 0, WebkitTextStrokeWidth: 0, whiteSpace: 'break-spaces', backgroundColor: 'oklab(                               0.678888 0.00325716 -0.011175 / 0.0784314                             )', textDecorationThickness: 'initial', textDecorationStyle: 'initial', textDecorationColor: 'initial', display: 'inline !important', float: 'none' }} id="isPasted">• &nbsp; &nbsp;There should be 4 students in one team.
                            These can be students from grades 8 to 12.</span>
                        </p>
                        <p><br /></p>
                        <p>
                          • &nbsp; &nbsp;The team must select a captain, who will
                          be responsible for registering the team, submitting
                          assignments, and communicating with the
                          organizers.&nbsp;
                        </p>
                        <p><br /></p>
                        <p>
                          • &nbsp; &nbsp;All team members can be from the same
                          school or from different schools, provided this is
                          agreed upon with the organizers in advance.&nbsp;
                        </p>
                        <p><br /></p>
                        <p>
                          • &nbsp; &nbsp;During the Olympiad, it is strictly
                          prohibited to cheat or use phones, reference materials,
                          or any electronic devices unless specifically allowed by
                          the organizers.&nbsp;
                        </p>
                        <p><br /></p>
                        <p>
                          • &nbsp; If any team member violates the rules, the
                          entire team may be disqualified.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ed-element ed-container columns-box wv-overflow_visible" id="ed-612774611">
                    <div className="inner">
                      <figure className="ed-element ed-image" id="ed-612774614">
                        <img src="/images/1000/15297363/9592975-G3k6XWBTf7QPMeklY8OI4A.png" alt="" className="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ed-element ed-headline custom-theme accordion-trigger" id="ed-612774617">
            <h3>
              <a className="wv-link-elm active" href="#!next">II. First Stage.</a>
            </h3>
          </div>
          <div className="ed-element ed-container accordion-content animation-initial" id="ed-612774620" data-animation="{&quot;type&quot;:&quot;slide&quot;,&quot;initial&quot;:&quot;hide&quot;,&quot;keepHeight&quot;:false,&quot;duration&quot;:&quot;0.5s&quot;,&quot;delay&quot;:&quot;0s&quot;,&quot;overlay&quot;:{&quot;width&quot;:&quot;auto&quot;},&quot;trigger&quot;:&quot;&quot;,&quot;group&quot;:{&quot;name&quot;:&quot;accordion_fd24_new&quot;,&quot;behavior&quot;:{&quot;show&quot;:&quot;hide&quot;,&quot;hide&quot;:&quot;hide&quot;}}}">
            <div className="inner">
              <div className="ed-element ed-container wv-boxed wv-spacer preset-columns-two-v2-tech-startup" id="ed-612774623">
                <div className="inner">
                  <div className="ed-element ed-container columns-box wv-overflow_visible" id="ed-612774626">
                    <div className="inner">
                      <div className="ed-element ed-headline custom-theme" id="ed-612774629">
                        <h3>
                          <span className="color-background">First Stage.</span>
                        </h3>
                      </div>
                      <div className="ed-element ed-spacer" id="ed-612774632">
                        <div className="space" />
                      </div>
                      <div className="ed-element ed-text custom-theme" id="ed-612774635">
                        <ul style={{ paddingLeft: '20px' }}>
                          <li style={{ marginBottom: '10px' }}>Online format, 2 rounds.</li>
                          <li style={{ marginBottom: '10px' }}><b>Round 1</b> — 6–7 problems in math, physics, chemistry, biology. 3 hours, captain submits solutions.</li>
                          <li style={{ marginBottom: '10px' }}><b>Round 2</b> — case study. Received 2 days before, submitted as PDF/DOCX.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="ed-element ed-container columns-box wv-overflow_visible" id="ed-612774638">
                    <div className="inner">
                      <figure className="ed-element ed-image" id="ed-612774641">
                        <img src="/images/1000/15297447/1-_vjNJI1WVvPoDrab_bhD6w.png" alt="" className="" srcSet="/images/576/15297447/1-_vjNJI1WVvPoDrab_bhD6w.png 576w, /images/976/15297447/1-_vjNJI1WVvPoDrab_bhD6w.png 976w, /images/1000/15297447/1-_vjNJI1WVvPoDrab_bhD6w.png 1000w" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ed-element ed-headline custom-theme accordion-trigger" id="ed-612774644">
            <h3>
              <a className="wv-link-elm active" href="#!next">III. Second Stage.</a>
            </h3>
          </div>
          <div className="ed-element ed-container accordion-content animation-initial" id="ed-612774647" data-animation="{&quot;type&quot;:&quot;slide&quot;,&quot;initial&quot;:&quot;hide&quot;,&quot;keepHeight&quot;:false,&quot;duration&quot;:&quot;0.5s&quot;,&quot;delay&quot;:&quot;0s&quot;,&quot;overlay&quot;:{&quot;width&quot;:&quot;auto&quot;},&quot;trigger&quot;:&quot;&quot;,&quot;group&quot;:{&quot;name&quot;:&quot;accordion_fd24_new&quot;,&quot;behavior&quot;:{&quot;show&quot;:&quot;hide&quot;,&quot;hide&quot;:&quot;hide&quot;}}}">
            <div className="inner">
              <div className="ed-element ed-container wv-boxed wv-spacer preset-columns-two-v2-tech-startup" id="ed-612774650">
                <div className="inner">
                  <div className="ed-element ed-container columns-box wv-overflow_visible" id="ed-612774653">
                    <div className="inner">
                      <div className="ed-element ed-headline custom-theme" id="ed-612774656">
                        <h3>
                          <span className="color-background">Second Stage.</span>
                        </h3>
                      </div>
                      <div className="ed-element ed-spacer" id="ed-612774659">
                        <div className="space" />
                      </div>
                      <div className="ed-element ed-text custom-theme" id="ed-612774662">
                        <ul style={{ paddingLeft: '20px' }}>
                          <li style={{ marginBottom: '10px' }}>In-person final at KBTU, Almaty. 2 rounds.</li>
                          <li style={{ marginBottom: '10px' }}><b>Round 1</b> — 8 interdisciplinary problems. 4–5 hours.</li>
                          <li style={{ marginBottom: '10px' }}><b>Round 2</b> — case study. Appeals allowed within 5 hours of results.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="ed-element ed-container columns-box wv-overflow_visible" id="ed-612774665">
                    <div className="inner">
                      <figure className="ed-element ed-image" id="ed-612774668">
                        <img src="/images/1000/15297450/2-oLEbyxkAUaN0poSg-5Tapw.png" alt="" className="" srcSet="/images/576/15297450/2-oLEbyxkAUaN0poSg-5Tapw.png 576w, /images/976/15297450/2-oLEbyxkAUaN0poSg-5Tapw.png 976w, /images/1000/15297450/2-oLEbyxkAUaN0poSg-5Tapw.png 1000w" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ed-element ed-headline custom-theme accordion-trigger" id="ed-646054799">
            <h3>
              <a className="wv-link-elm active" href="#!next">IV. Case Study.</a>
            </h3>
          </div>
          <div className="ed-element ed-container accordion-content animation-initial" id="ed-646054802" data-animation="{&quot;type&quot;:&quot;slide&quot;,&quot;initial&quot;:&quot;hide&quot;,&quot;keepHeight&quot;:false,&quot;duration&quot;:&quot;0.5s&quot;,&quot;delay&quot;:&quot;0s&quot;,&quot;overlay&quot;:{&quot;width&quot;:&quot;auto&quot;},&quot;trigger&quot;:&quot;&quot;,&quot;group&quot;:{&quot;name&quot;:&quot;accordion_fd24_new&quot;,&quot;behavior&quot;:{&quot;show&quot;:&quot;hide&quot;,&quot;hide&quot;:&quot;hide&quot;}}}">
            <div className="inner">
              <div className="ed-element ed-container wv-boxed wv-spacer preset-columns-two-v2-tech-startup" id="ed-646054805">
                <div className="inner">
                  <div className="ed-element ed-container columns-box wv-overflow_visible" id="ed-646054808">
                    <div className="inner">
                      <div className="ed-element ed-headline custom-theme" id="ed-646054811">
                        <h3><span className="color-background">Case Study.</span></h3>
                      </div>
                      <div className="ed-element ed-spacer" id="ed-646054814">
                        <div className="space" />
                      </div>
                      <div className="ed-element ed-text custom-theme" id="ed-646054817">
                        <ul style={{ paddingLeft: '20px' }}>
                          <li style={{ marginBottom: '10px' }}>Two cases: scientific and engineering.</li>
                          <li style={{ marginBottom: '10px' }}>Written report up to 40 pages (APA 7).</li>
                          <li style={{ marginBottom: '10px' }}>Originality ≥ 70%, AI content ≤ 20%. Plus presentation to jury.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="ed-element ed-container columns-box wv-overflow_visible" id="ed-646054820">
                    <div className="inner">
                      <figure className="ed-element ed-image" id="ed-646054823">
                        <img src="/images/1000/15297290/0bqU8Stdenrz8JT63Q_Dqg.png" alt="" className="" srcSet="/images/576/15297290/0bqU8Stdenrz8JT63Q_Dqg.png 576w, /images/976/15297290/0bqU8Stdenrz8JT63Q_Dqg.png 976w, /images/1000/15297290/0bqU8Stdenrz8JT63Q_Dqg.png 1000w" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ed-element ed-headline custom-theme accordion-trigger" id="ed-612774596">
            <h3>
              <a className="wv-link-elm active" href="#!next">V. Key Dates.</a>
            </h3>
          </div>
          <div className="ed-element ed-container accordion-content animation-initial" id="ed-612774599" data-animation="{&quot;type&quot;:&quot;slide&quot;,&quot;initial&quot;:&quot;hide&quot;,&quot;keepHeight&quot;:false,&quot;duration&quot;:&quot;0.5s&quot;,&quot;delay&quot;:&quot;0s&quot;,&quot;overlay&quot;:{&quot;width&quot;:&quot;auto&quot;},&quot;trigger&quot;:&quot;&quot;,&quot;group&quot;:{&quot;name&quot;:&quot;accordion_fd24_new&quot;,&quot;behavior&quot;:{&quot;show&quot;:&quot;hide&quot;,&quot;hide&quot;:&quot;hide&quot;}}}">
            <div className="inner">
              <div className="ed-element ed-container wv-boxed wv-spacer preset-columns-two-v2-tech-startup">
                <div className="inner">
                  <div className="ed-element ed-container columns-box wv-overflow_visible">
                    <div className="inner">
                      <div className="ed-element ed-text custom-theme">
                        <p><b>Team Registration:</b> dates will be announced soon.</p>
                        <p><br /></p>
                        <p><b>Online Qualification Stage:</b> dates will be announced soon.</p>
                        <p><br /></p>
                        <p><b>Final Stage:</b> dates will be announced soon.</p>
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
          <div className="nd-team-header"><h2 className="nd-team-title">Team</h2></div>
          <div className="nd-team-grid">

            <div className="nd-team-card">
              <img src="/images/1024/15290798/5-AbI4cfUUwQ0HSKdi9I6g.png" alt="Galymzhan Zhukesh" className="nd-team-ava" />
              <div className="nd-team-name">Galymzhan Zhukesh</div>
              <div className="nd-team-role">Organizer</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15290894/_EEPlzAC2-5zOSLaE-cd-Q.png" alt="Yenlik Bakytbekova" className="nd-team-ava" />
              <div className="nd-team-name">Yenlik Bakytbekova</div>
              <div className="nd-team-role">Organizer</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15290888/zTMGQAWwUA2cTZcruHkbPg.png" alt="Darian Gabdullin" className="nd-team-ava" />
              <div className="nd-team-name">Darian Gabdullin</div>
              <div className="nd-team-role">Organizer</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15290882/4_thsP1xTZMEKYtiknnzNg.png" alt="Kirill Nekryukov" className="nd-team-ava" />
              <div className="nd-team-name">Kirill Nekryukov</div>
              <div className="nd-team-role">Organizer</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15522230/xZZGvbySkYT5Tmwfnj2VRg.png" alt="Saadat Mukasheva" className="nd-team-ava" />
              <div className="nd-team-name">Saadat Mukasheva</div>
              <div className="nd-team-role">Lead Designer</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291928/Y-G0NZxUrJ4t9hVDara1wg.png" alt="Miras Amirbekov" className="nd-team-ava" />
              <div className="nd-team-name">Miras Amirbekov</div>
              <div className="nd-team-role">Author / Jury</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291195/4-C5hSlOJHyya3S9AHc61Q.png" alt="Bekasyl Yelubay" className="nd-team-ava" />
              <div className="nd-team-name">Bekasyl Yelubay</div>
              <div className="nd-team-role">Author / Acad. Comm. / Jury</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291293/H4ITPro6A_c-nEi8SPlP1A.png" alt="Tamila Rakhimbayeva" className="nd-team-ava" />
              <div className="nd-team-name">Tamila Rakhimbayeva</div>
              <div className="nd-team-role">Author</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291323/qEwseoAh29suEso69g2F1A.png" alt="Rinat Ilyusizov" className="nd-team-ava" />
              <div className="nd-team-name">Rinat Ilyusizov</div>
              <div className="nd-team-role">Author</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291344/3ny_7Ng99k7uT3dAaNJ5MQ.png" alt="Adilzhan Moldagul" className="nd-team-ava" />
              <div className="nd-team-name">Adilzhan Moldagul</div>
              <div className="nd-team-role">Author</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291194/Zl-j6YEfFxM5ltVvk8gUBw.png" alt="Batyr Yerzhanuly" className="nd-team-ava" />
              <div className="nd-team-name">Batyr Yerzhanuly</div>
              <div className="nd-team-role">Author / Acad. Comm. / Jury</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291421/AJTnTjFn4tGg-GOc2RYjvQ.png" alt="Ayan Altay" className="nd-team-ava" />
              <div className="nd-team-name">Ayan Altay</div>
              <div className="nd-team-role">Author</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291432/ivbqImGdBo_xVEIY7PUYhg.png" alt="Ramazan Anuarbek" className="nd-team-ava" />
              <div className="nd-team-name">Ramazan Anuarbek</div>
              <div className="nd-team-role">Author</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291419/zvIHSQKMEi5NnblLG619xA.png" alt="Alibi Turaly" className="nd-team-ava" />
              <div className="nd-team-name">Alibi Turaly</div>
              <div className="nd-team-role">Author</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291479/_kH_XyqQgPkWI1R5dauZaw.png" alt="Darkhan Karakulov" className="nd-team-ava" />
              <div className="nd-team-name">Darkhan Karakulov</div>
              <div className="nd-team-role">Author</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291192/UYrT-bh2I5vT9gC8GgVtPA.png" alt="Alibi Mugalim" className="nd-team-ava" />
              <div className="nd-team-name">Alibi Mugalim</div>
              <div className="nd-team-role">Acad. Comm. / Jury</div>
            </div>
            <div className="nd-team-card">
              <img src="/images/1024/15291494/fNDHghLiZ_X9tfavexb4Bw.png" alt="Tamerlan Nurlybek" className="nd-team-ava" />
              <div className="nd-team-name">Tamerlan Nurlybek</div>
              <div className="nd-team-role">Jury</div>
            </div>
          </div>
        </div>
      </section>

      {/* ND PARTNERS */}
      <section id="nd-partners" className="nd-partners-section">
        <div className="nd-partners-title">Partners</div>
        <div className="nd-partners-row">
          <a href="https://kbtu.edu.kz/ru/" target="_blank" rel="noopener"><img src="/images/0/15097983/kbtu_logo.png" alt="KBTU" /></a>
          <a href="https://www.nis.edu.kz/ru" target="_blank" rel="noopener"><img src="/images/0/15293250/2-5CN5MFUn8ajfCd_ZTxEV4w.png" alt="NIS" /></a>
          <div style={{ display: 'flex', alignItems: 'center' }}><img src="/images/0/15424887/photo_2025-04-09_22-11-33-jM7ilPuI-C_pKN86H__SmQ.jpg" alt="Partner" style={{ height: 80, maxWidth: "100%", objectFit: "contain", flexShrink: 1, filter: 'grayscale(1) opacity(0.6)' }} /></div>
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
            <div className="nd-footer-col-h">Navigation</div>
            <ul className="nd-footer-links"><li><a href="#ed-612774587">Rules</a></li><li><a href="#nd-team">Team</a></li><li><a href="#nd-partners">Partners</a></li><li><a href="/en/register">Register</a></li></ul>
          </div>
          <div>
            <div className="nd-footer-col-h">Contacts</div>
            <ul className="nd-footer-links"><li><a href="mailto:info@nesco.kz" target="_blank" rel="noopener">info@nesco.kz</a></li><li><a href="https://t.me/nescokz" target="_blank" rel="noopener">Telegram</a></li><li><a href="https://www.instagram.com/nesco.kz" target="_blank" rel="noopener">Instagram</a></li></ul>
          </div>
        </div>
      </footer>
      <div className="ed-element ed-container wv-boxed wv-spacer preset-partners-v3-tech-startup full-width bg-user-2" id="ed-612773933">
        <div className="inner">
          <figure className="ed-element ed-image" id="ed-612773939">
            <a href="https://kbtu.edu.kz/ru/" target="_blank"><img src="/images/0/15097983/kbtu_logo.png" alt="" className="" /></a>
          </figure>
          <figure className="ed-element ed-image" id="ed-612773942">
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
      <div className="ed-element ed-container footer flex-justify-content-center wv-boxed wv-spacer wv-overflow_visible preset-footer-thrud-v3-tech-startup" id="ed-612774353">
        <div className="inner">
          <div className="ed-element ed-container footer-thrud-content flex-align-items-start flex-justify-content-center flex-align-content-start wv-overflow_visible" id="ed-612774356">
            <div className="inner">
              <div className="ed-element ed-container flex-justify-content-start footer-thrud-box" id="ed-612774359">
                <div className="inner">
                  <figure className="ed-element ed-image logo" id="ed-612774362">
                    <a href="/en"><img src="/images/149/15248642/logo2-eaRu4CpcSUUG0yx_VFAUbA.png" alt="" className="" srcSet="/images/298/15248642/logo2-eaRu4CpcSUUG0yx_VFAUbA.png 2x" /></a>
                  </figure>
                  <div className="ed-element ed-spacer" id="ed-612774365">
                    <div className="space" />
                  </div>
                </div>
              </div>
              <div className="ed-element ed-container footer-thrud-box" id="ed-612774371">
                <div className="inner">
                  <div className="ed-element ed-spacer" id="ed-612774374">
                    <div style={{ height: 16 }} className="space" />
                  </div>
                  <div className="ed-element ed-spacer" id="ed-612774380">
                    <div className="space" />
                  </div>
                  <div className="ed-element ed-text custom-theme" id="ed-612774386">
                    <p style={{ textAlign: 'right' }}>
                      <a data-fr-linked="true" href="mailto:info@nesco.kz" id="isPasted">info@nesco.kz</a>
                    </p>
                    <p style={{ textAlign: 'right' }}>
                      <a href="https://t.me/nescokz" title="" target="_blank">Telegram</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <figure className="ed-element ed-icon" id="ed-647173800">
            <a href="https://www.instagram.com/nesco.kz?igsh=MW1ya3pzb2tkZjh2Yw==" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-icon="fa-brands-instagram" preserveAspectRatio="xMaxYMid" style={{ overflow: 'hidden' }}>
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" style={{ fill: 'rgb(255, 255, 255)' }} /></svg></a>
          </figure>
        </div>
      </div>
    </div>
  );
}