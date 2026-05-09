import { useEffect } from "react";
export default function PageEnRegister() {
  useEffect(() => {
    const form = document.getElementById('regForm') as HTMLFormElement;
    const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
    const msgSuccess = document.getElementById('msgSuccess') as HTMLElement;
    const msgError = document.getElementById('msgError') as HTMLElement;

    if (!form) return;

    const handleSubmit = async (e: Event) => {
      e.preventDefault();
      
      const consent = document.getElementById('consent') as HTMLInputElement;
      if (!consent?.checked) return;

      submitBtn.disabled = true;
      const originalText = submitBtn.innerText;
      submitBtn.innerText = 'Sending...';
      msgSuccess.style.display = 'none';
      msgError.style.display = 'none';

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        const res = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (res.ok) {
          msgSuccess.style.display = 'block';
          form.reset();
        } else {
          msgError.style.display = 'block';
        }
      } catch (err) {
        msgError.style.display = 'block';
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = originalText;
      }
    };

    form.addEventListener('submit', handleSubmit);
    return () => form.removeEventListener('submit', handleSubmit);
  }, []);

    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: `*, *::before, *::after { box-sizing: border-box; }
      figure { margin: 0; }
      body { margin: 0; background: #fff; }

      .rn-nav-wrap {
        background: #fff;
        position: sticky;
        top: 0;
        z-index: 100;
        box-shadow: 0 1px 0 rgba(0,0,0,0.08);
      }
      .rn-nav {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
      }
      .rn-nav__logo img { width: 110px; display: block; }
      .rn-nav__menu {
        display: flex;
        align-items: center;
        gap: 2rem;
        list-style: none;
        margin: 0; padding: 0;
      }
      .rn-nav__menu a {
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        color: #0b0d17;
        text-decoration: none;
        letter-spacing: 1px;
        transition: color .2s;
        white-space: nowrap;
      }
      .rn-nav__menu a:hover { color: #7a3afe; }
      .rn-nav__menu a.highlight {
        color: #7a3afe;
        font-weight: 700;
      }
      .rn-nav__langs {
        display: flex;
        gap: .8rem;
        flex-shrink: 0;
      }
      .rn-nav__langs a {
        font-family: 'Roboto', sans-serif;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1px;
        color: #0b0d17;
        text-decoration: none;
        transition: all .2s;
        opacity: 0.5;
        position: relative;
      }
      .rn-nav__langs a:hover,
      .rn-nav__langs a.active {
        opacity: 1;
        color: #7a3afe;
      }
      .rn-nav__langs a.active::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #7a3afe;
      }
      .rn-nav__burger {
        display: none;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
        background: none;
        border: none;
        padding: 4px;
      }
      .rn-nav__burger span {
        display: block;
        width: 26px; height: 2px;
        background: #0b0d17;
        border-radius: 2px;
        transition: all .3s;
      }
      @media (max-width: 900px) {
        .rn-nav__menu {
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: fixed;
          inset: 0;
          background: #150040;
          z-index: 200;
          gap: 2.5rem;
        }
        .rn-nav__menu.open { display: flex; }
        .rn-nav__menu a { color: #fff; font-size: 22px; }
        .rn-nav__menu a.highlight { color: #7a3afe; }
        .rn-nav__burger { display: flex; z-index: 201; }
      }

      .rn-hero {
        background: #150040;
        background-image: url(/images/0/5913601/Vector.png);
        background-repeat: no-repeat;
        background-size: 500px auto;
        background-position: right -50px bottom;
        padding: 5rem 2rem 5rem;
      }
      .rn-hero__inner {
        max-width: 1000px;
        margin: 0 auto;
        text-align: center;
      }
      .rn-hero__tag {
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: #7a3afe;
        margin-bottom: 1.25rem;
      }
      .rn-hero__title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(36px, 5vw, 56px);
        font-weight: 700;
        color: #fff;
        text-align: center;
        margin: 0 0 1.25rem;
        line-height: 1.15;
      }
      .rn-hero__sub {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 1.7;
        color: rgba(255,255,255,0.65);
        margin: 0 auto;
        max-width: 540px;
      }

      .rn-body {
        background: #fff;
        padding: 4rem 2rem 6rem;
      }
      .rn-body__inner {
        max-width: 760px;
        margin: 0 auto;
      }

      .rn-section {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 2.5rem 0 1.5rem;
      }
      .rn-section:first-child { margin-top: 0; }
      .rn-section__num {
        width: 32px; height: 32px;
        border-radius: 50%;
        background: #7a3afe;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .rn-section__title {
        font-family: 'Playfair Display', serif;
        font-size: 22px;
        font-weight: 700;
        color: #0b0d17;
        text-align: left;
        margin: 0;
      }

      .rn-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: .875rem 1.5rem;
      }
      @media (max-width: 560px) { .rn-grid { grid-template-columns: 1fr; } }
      .rn-full { grid-column: 1 / -1; }

      .rn-field { display: flex; flex-direction: column; gap: .4rem; }
      .rn-field label {
        font-family: 'Roboto', sans-serif;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: #848199;
      }
      .rn-field input,
      .rn-field select {
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        color: #0b0d17;
        background: #fff;
        border: 1.5px solid #eeeaf7;
        padding: .7rem 1rem;
        outline: none;
        transition: border-color .2s, box-shadow .2s;
        width: 100%;
        appearance: none;
        -webkit-appearance: none;
        border-radius: 8px;
      }
      .rn-field input::placeholder { color: #c0bad8; }
      .rn-field input:focus,
      .rn-field select:focus {
        border-color: #7a3afe;
        box-shadow: 0 0 0 3px rgba(122,58,254,0.12);
      }
      .rn-field--error input,
      .rn-field--error select {
        border-color: #e53e3e;
      }

      .rn-divider {
        border: none;
        border-top: 1.5px solid #eeeaf7;
        margin: 2rem 0;
      }

      .rn-consent {
        display: flex;
        align-items: flex-start;
        gap: .75rem;
        margin-top: 1.75rem;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        color: #848199;
        line-height: 1.6;
      }
      .rn-consent input[type="checkbox"] {
        width: 18px; height: 18px;
        flex-shrink: 0;
        margin-top: 2px;
        accent-color: #7a3afe;
        cursor: pointer;
        border: 1.5px solid #eeeaf7;
      }

      .rn-submit-row {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        flex-wrap: wrap;
      }
      .rn-submit {
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 1px;
        padding: .875rem 2.5rem;
        background: #7a3afe;
        color: #fff;
        border: none;
        cursor: pointer;
        transition: background .25s, transform .15s;
        white-space: nowrap;
        flex-shrink: 0;
        border-radius: 8px;
      }
      .rn-submit:hover { background: #3a3c3b; }
      .rn-submit:active { transform: scale(.98); }
      .rn-submit:disabled { background: #c0bad8; cursor: not-allowed; }

      .rn-msg {
        display: none;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        line-height: 1.5;
        padding: .875rem 1.25rem;
      }
      .rn-msg.success {
        background: #f8f5ff;
        border-left: 3px solid #7a3afe;
        color: #0b0d17;
      }
      .rn-msg.error {
        background: #fff5f5;
        border-left: 3px solid #e53e3e;
        color: #c53030;
      }
      .rn-msg.show { display: block; }

      .rn-footer {
        background: #150040;
        padding: 2.5rem 2rem;
      }
      .rn-footer__inner {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        flex-wrap: wrap;
      }
      .rn-footer__logo img { width: 90px; display: block; }
      .rn-footer__contact {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        color: rgba(255,255,255,0.5);
        line-height: 1.8;
        text-align: right;
      }
      .rn-footer__contact a {
        color: rgba(255,255,255,0.8);
        text-decoration: none;
        transition: color .2s;
      }
      .rn-footer__contact a:hover { color: #fff; }` }} />
        {/* NAV */}
        <div className="rn-nav-wrap">
          <nav className="rn-nav">
            <a href="/en" className="rn-nav__logo">
              <img src="/images/149/15248642/logo2-eaRu4CpcSUUG0yx_VFAUbA.png" alt="NEScO" />
            </a>
            <ul className="rn-nav__menu" id="navMenu">
              <li><a href="/en/team">Team</a></li>
              <li><a href="/en#ed-612773933">Partners</a></li>
              <li><a href="/en#ed-612774353">Contacts</a></li>
              <li><a href="/en/register" className="highlight">Register</a></li>
            </ul>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <div className="rn-nav__langs">
                <a href="/kk/register">KZ</a>
                <a href="/en/register" className="active">EN</a>
                <a href="/ru/register">RU</a>
              </div>
              <button className="rn-nav__burger" id="burgerBtn" aria-label="Menu">
                <span /><span /><span />
              </button>
            </div>
          </nav>
        </div>
        {/* HERO */}
        <section className="rn-hero">
          <div className="rn-hero__inner">
            <p className="rn-hero__tag">NEScO 2026 — Registration</p>
            <h1 className="rn-hero__title">Register your team</h1>
            <p className="rn-hero__sub">
              The Olympiad is open to teams of 4 students in grades 8–12.
              Please fill out the form below to register your full team — the team name must be unique.
            </p>
          </div>
        </section>
        {/* FORM */}
        <div className="rn-body">
          <div className="rn-body__inner">
            <form id="regForm" noValidate>
              <div className="rn-section">
                <div className="rn-section__num">1</div>
                <h2 className="rn-section__title">Team Information</h2>
              </div>
              <div className="rn-grid">
                <div className="rn-field rn-full">
                  <label htmlFor="teamName">Team Name *</label>
                  <input type="text" id="teamName" name="team_name" placeholder="Enter unique team name" required />
                </div>
              </div>
              
              {/* Participant 1 */}
              <div className="rn-section">
                <div className="rn-section__num">2</div>
                <h2 className="rn-section__title">Participant 1 (Captain)</h2>
              </div>
              <div className="rn-grid">
                <div className="rn-field">
                  <label htmlFor="p1Name">Full Name *</label>
                  <input type="text" id="p1Name" name="p1_name" placeholder="First Last Name" required />
                </div>
                <div className="rn-field">
                  <label htmlFor="p1Grade">Grade *</label>
                  <select id="p1Grade" name="p1_grade" required>
                    <option value="">— select —</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                  </select>
                </div>
                <div className="rn-field">
                  <label htmlFor="p1Email">Email *</label>
                  <input type="email" id="p1Email" name="p1_email" placeholder="example@mail.com" required />
                </div>
                <div className="rn-field">
                  <label htmlFor="p1Phone">Phone *</label>
                  <input type="tel" id="p1Phone" name="p1_phone" placeholder="+0 000 000 00 00" required />
                </div>
                <div className="rn-field rn-full">
                  <label htmlFor="p1School">School *</label>
                  <input type="text" id="p1School" name="p1_school" placeholder="School name and city" required />
                </div>
              </div>

              <hr className="rn-divider" />

              {/* Participant 2 */}
              <div className="rn-section">
                <div className="rn-section__num">3</div>
                <h2 className="rn-section__title">Participant 2</h2>
              </div>
              <div className="rn-grid">
                <div className="rn-field">
                  <label htmlFor="p2Name">Full Name *</label>
                  <input type="text" id="p2Name" name="p2_name" required />
                </div>
                <div className="rn-field">
                  <label htmlFor="p2Grade">Grade *</label>
                  <select id="p2Grade" name="p2_grade" required>
                    <option value="">— select —</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                  </select>
                </div>
                <div className="rn-field">
                  <label htmlFor="p2Email">Email *</label>
                  <input type="email" id="p2Email" name="p2_email" required />
                </div>
                <div className="rn-field">
                  <label htmlFor="p2Phone">Phone *</label>
                  <input type="tel" id="p2Phone" name="p2_phone" required />
                </div>
                <div className="rn-field rn-full">
                  <label htmlFor="p2School">School *</label>
                  <input type="text" id="p2School" name="p2_school" required />
                </div>
              </div>

              <hr className="rn-divider" />

              {/* Participant 3 */}
              <div className="rn-section">
                <div className="rn-section__num">4</div>
                <h2 className="rn-section__title">Participant 3</h2>
              </div>
              <div className="rn-grid">
                <div className="rn-field">
                  <label htmlFor="p3Name">Full Name *</label>
                  <input type="text" id="p3Name" name="p3_name" required />
                </div>
                <div className="rn-field">
                  <label htmlFor="p3Grade">Grade *</label>
                  <select id="p3Grade" name="p3_grade" required>
                    <option value="">— select —</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                  </select>
                </div>
                <div className="rn-field">
                  <label htmlFor="p3Email">Email *</label>
                  <input type="email" id="p3Email" name="p3_email" required />
                </div>
                <div className="rn-field">
                  <label htmlFor="p3Phone">Phone *</label>
                  <input type="tel" id="p3Phone" name="p3_phone" required />
                </div>
                <div className="rn-field rn-full">
                  <label htmlFor="p3School">School *</label>
                  <input type="text" id="p3School" name="p3_school" required />
                </div>
              </div>

              <hr className="rn-divider" />

              {/* Participant 4 */}
              <div className="rn-section">
                <div className="rn-section__num">5</div>
                <h2 className="rn-section__title">Participant 4</h2>
              </div>
              <div className="rn-grid">
                <div className="rn-field">
                  <label htmlFor="p4Name">Full Name *</label>
                  <input type="text" id="p4Name" name="p4_name" required />
                </div>
                <div className="rn-field">
                  <label htmlFor="p4Grade">Grade *</label>
                  <select id="p4Grade" name="p4_grade" required>
                    <option value="">— select —</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                  </select>
                </div>
                <div className="rn-field">
                  <label htmlFor="p4Email">Email *</label>
                  <input type="email" id="p4Email" name="p4_email" required />
                </div>
                <div className="rn-field">
                  <label htmlFor="p4Phone">Phone *</label>
                  <input type="tel" id="p4Phone" name="p4_phone" required />
                </div>
                <div className="rn-field rn-full">
                  <label htmlFor="p4School">School *</label>
                  <input type="text" id="p4School" name="p4_school" required />
                </div>
              </div>

              <label className="rn-consent">
                <input type="checkbox" id="consent" required />
                <span>I consent to the processing of personal data and confirm team participation in NEScO 2026.</span>
              </label>
              <div className="rn-submit-row">
                <button type="submit" className="rn-submit" id="submitBtn">Register Team</button>
                <div className="rn-msg success" id="msgSuccess">
                  ✓ Team successfully registered!
                </div>
                <div className="rn-msg error" id="msgError">An error occurred.</div>
              </div>
            </form>
          </div>
        </div>
        {/* FOOTER */}
        <footer className="rn-footer">
          <div className="rn-footer__inner">
            <div className="rn-footer-brand-copy" style={{ opacity: 0.6, fontSize: '14px', fontWeight: '500', color: '#fff' }}>© 2026 NEScO — National Engineering & Science Olympiad</div>
            <div className="rn-footer__contact">
              <a href="mailto:info@nesco.kz">info@nesco.kz</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }