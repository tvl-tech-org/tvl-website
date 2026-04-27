// Header.jsx — TVL Tech site header with i18n + RO/EN toggle + mobile menu
const { useState } = React;

function Header({ onCtaClick }) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = window.i18n.useLang();
  const t = window.i18n.t;
  const links = [
    { key: 'nav.servicii', href: '#servicii' },
    { key: 'nav.proiecte', href: '#proiecte' },
    { key: 'nav.despre', href: '#despre' },
    { key: 'nav.blog', href: 'blog.html' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const closeAndJump = (href) => {
    setOpen(false);
    // small delay so the menu animation feels intentional
    setTimeout(() => { window.location.href = href; }, 60);
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      padding: '18px 48px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div className="tvl-header-left-gap" style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="assets/logo-mark.svg" width="32" height="32" alt="TVL Tech" />
          <span style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 20, color: '#fff', letterSpacing: '0.08em',
          }}>TVL.TECH</span>
        </a>
        <nav className="tvl-desktop-nav" style={{ display: 'flex', gap: 28 }}>
          {links.map(l => (
            <a key={l.key} href={l.href} style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: 12, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.16em',
              color: '#C9C7C2', textDecoration: 'none',
              transition: 'color 200ms',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#FF4931'}
            onMouseLeave={e => e.currentTarget.style.color = '#C9C7C2'}
            >{t(l.key)}</a>
          ))}
        </nav>
      </div>
      <div className="tvl-desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <LangToggle lang={lang} setLang={setLang} />
        <button onClick={onCtaClick} style={{
          background: '#FF4931', color: '#fff', border: 'none',
          borderRadius: 4,
          padding: '12px 24px',
          fontFamily: 'Open Sans, sans-serif', fontSize: 12, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.14em',
          cursor: 'pointer',
          transition: 'background 200ms cubic-bezier(.22,1,.36,1)',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#9E2D1E'}
        onMouseLeave={e => e.currentTarget.style.background = '#FF4931'}
        >{t('nav.cta')}</button>
      </div>

      {/* Mobile burger button — hidden on desktop via CSS */}
      <button
        className="tvl-mobile-burger"
        onClick={() => setOpen(o => !o)}
        aria-label="Menu"
        style={{
          display: 'none',
          width: 44, height: 44,
          alignItems: 'center', justifyContent: 'center',
          background: 'transparent', border: '1px solid rgba(255,255,255,0.18)',
          color: '#fff', cursor: 'pointer', padding: 0,
        }}>
        <div style={{ position: 'relative', width: 18, height: 12 }}>
          <span style={{
            position: 'absolute', left: 0, right: 0, top: open ? 5 : 0, height: 2, background: '#fff',
            transform: open ? 'rotate(45deg)' : 'rotate(0)',
            transition: 'transform 220ms, top 220ms',
          }} />
          <span style={{
            position: 'absolute', left: 0, right: 0, top: 5, height: 2, background: '#fff',
            opacity: open ? 0 : 1,
            transition: 'opacity 180ms',
          }} />
          <span style={{
            position: 'absolute', left: 0, right: 0, top: open ? 5 : 10, height: 2, background: '#fff',
            transform: open ? 'rotate(-45deg)' : 'rotate(0)',
            transition: 'transform 220ms, top 220ms',
          }} />
        </div>
      </button>

      {/* Mobile fullscreen drawer */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, top: 64,
            background: '#000',
            zIndex: 49,
            display: 'flex', flexDirection: 'column',
            padding: '32px 20px 32px',
            animation: 'tvl-fade-in 220ms ease',
          }}>
          <style>{`@keyframes tvl-fade-in { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }} onClick={e => e.stopPropagation()}>
            {links.map((l, i) => (
              <a key={l.key} href={l.href}
                onClick={(e) => { e.preventDefault(); closeAndJump(l.href); }}
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: 32, fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '-0.005em',
                  color: '#fff', textDecoration: 'none',
                  padding: '20px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'baseline', gap: 16,
                }}>
                <span style={{
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.16em',
                  color: '#FF4931', minWidth: 28,
                }}>{String(i + 1).padStart(2, '0')}</span>
                <span>{t(l.key)}</span>
              </a>
            ))}
          </nav>
          <div onClick={e => e.stopPropagation()} style={{
            marginTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          }}>
            <LangToggle lang={lang} setLang={setLang} />
            <button onClick={() => { setOpen(false); onCtaClick && onCtaClick(); }} style={{
              background: '#FF4931', color: '#fff', border: 'none',
              borderRadius: 4,
              padding: '14px 22px',
              fontFamily: 'Open Sans, sans-serif', fontSize: 12, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.14em',
              cursor: 'pointer',
            }}>{t('nav.cta')}</button>
          </div>
        </div>
      )}
    </header>
  );
}

function LangToggle({ lang, setLang }) {
  const btn = (val, label) => (
    <button
      onClick={() => setLang(val)}
      style={{
        background: 'transparent',
        border: 'none',
        color: lang === val ? '#FF4931' : '#777',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 12, fontWeight: 700,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        padding: 0,
        transition: 'color 200ms',
      }}
    >{label}</button>
  );
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      borderRight: '1px solid rgba(255,255,255,0.18)',
      paddingRight: 24,
    }}>
      {btn('ro', 'RO')}
      <span style={{ color: '#444' }}>/</span>
      {btn('en', 'EN')}
    </div>
  );
}

window.Header = Header;
