// Footer.jsx — i18n
function Footer() {
  const [lang] = window.i18n.useLang();
  const t = window.i18n.t;
  const cols = [
    { h: t('ft.studio'), items: [[t('ft.l.servicii'), '#servicii'], [t('ft.l.proiecte'), '#proiecte'], [t('ft.l.proces'), '#cum-lucram'], [t('ft.l.cariere'), '#']] },
    { h: t('ft.cap'), items: [[t('ft.l.ai'), '#'], [t('ft.l.agentic'), '#'], [t('ft.l.blockchain'), '#'], [t('ft.l.custom'), '#']] },
  ];
  return (
    <footer style={{ background: '#000', color: '#fff', padding: '64px 48px 32px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="tvl-footer-grid" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.2fr', gap: 48 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <img src="../../assets/logo-mark.svg" width="32" height="32" alt="" />
            <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 22, letterSpacing: '0.08em' }}>TVL.TECH</span>
          </div>
          <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 14, color: '#8A8884', lineHeight: 1.6, maxWidth: 380 }}>
            {t('ft.about')}
          </div>
        </div>
        {cols.map(col => (
          <div key={col.h}>
            <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#FF4931', marginBottom: 16 }}>{col.h}</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.items.map(([label, href]) => (
                <li key={label}><a href={href} style={{ color: '#C9C7C2', textDecoration: 'none', fontFamily: 'Open Sans, sans-serif', fontSize: 14 }}>{label}</a></li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#FF4931', marginBottom: 16 }}>{t('ft.contact')}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 11, color: '#777', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 4 }}>{t('ft.email')}</div>
              <a href="mailto:contact@tvl.technology" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 14, color: '#C9C7C2', textDecoration: 'none' }}>contact@tvl.technology</a>
            </div>
            <div>
              <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 11, color: '#777', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 4 }}>{t('ft.phone')}</div>
              <a href="tel:+352621477866" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 14, color: '#C9C7C2', textDecoration: 'none', display: 'block' }}>+352 621 477 866</a>
              <a href="tel:+40744397900" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 14, color: '#C9C7C2', textDecoration: 'none', display: 'block' }}>+40 744 397 900</a>
            </div>
            <div>
              <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 11, color: '#777', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 4 }}>{t('ft.office')}</div>
              <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 14, color: '#C9C7C2', lineHeight: 1.5 }}>{t('ft.address_line1')}<br/>{t('ft.address_line2')}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="tvl-footer-bottom" style={{ maxWidth: 1280, margin: '48px auto 0', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 12, color: '#777' }}>{t('ft.copyright')}</div>
        <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, letterSpacing: '0.32em', color: '#777' }}>S E E   T H E   U N S E E N</div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
