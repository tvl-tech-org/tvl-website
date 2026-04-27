// AntiPromises.jsx — i18n
function AntiPromises() {
  const [lang] = window.i18n.useLang();
  const t = window.i18n.t;
  const items = Array.from({ length: 5 }, (_, i) => ({
    headline: t(`ap.r${i+1}.headline`),
    detail: t(`ap.r${i+1}.detail`),
  }));

  return (
    <section id="cum-lucram" style={{
      background: '#000',
      padding: '120px 48px',
      color: '#fff',
      borderTop: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <header className="tvl-ap-header" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'end',
          marginBottom: 80,
        }}>
          <div>
            <div style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: 12, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.32em',
              color: '#FF4931',
              marginBottom: 24,
            }}>{t('ap.kicker')}</div>
            <h2 className="tvl-section-h2" style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: 'clamp(48px, 7vw, 96px)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.015em',
              textTransform: 'uppercase',
              margin: 0,
              textWrap: 'balance',
            }}>
              {t('ap.title.a')} <span style={{ color: '#FF4931' }}>{t('ap.title.b')}</span> {t('ap.title.c')}
            </h2>
          </div>
          <p style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 18, lineHeight: 1.6,
            color: '#C9C7C2',
            margin: 0,
            paddingBottom: 8,
            textWrap: 'pretty',
          }}>
            {t('ap.subtitle')}
          </p>
        </header>

        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
          {items.map((it, i) => (
            <AntiPromiseRow key={i} index={i} {...it} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function AntiPromiseRow({ headline, detail, index }) {
  const [hover, setHover] = React.useState(false);
  const num = String(index + 1).padStart(2, '0');
  return (
    <li
      className="tvl-ap-row"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '120px 56px 1fr 1.1fr',
        gap: 40,
        padding: '48px 0',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        alignItems: 'flex-start',
        transition: 'background 220ms',
        background: hover ? 'rgba(255,73,49,0.04)' : 'transparent',
      }}
    >
      <div className="tvl-ap-num" style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 'clamp(56px, 6vw, 96px)',
        fontWeight: 700,
        lineHeight: 0.9,
        letterSpacing: '-0.02em',
        color: hover ? '#FF4931' : 'rgba(255,255,255,0.12)',
        userSelect: 'none',
        transition: 'color 220ms',
        fontVariantNumeric: 'tabular-nums',
      }}>{num}</div>

      <div className="tvl-ap-x" style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 48,
        fontWeight: 300,
        lineHeight: 1,
        color: '#FF4931',
        userSelect: 'none',
        transform: hover ? 'rotate(90deg)' : 'rotate(0deg)',
        transition: 'transform 320ms cubic-bezier(.2,.7,.2,1)',
        paddingTop: 8,
      }}>×</div>

      <h3 style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 'clamp(24px, 2.4vw, 34px)',
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: '-0.01em',
        margin: 0,
        color: '#fff',
        textWrap: 'balance',
        paddingTop: 8,
      }}>{headline}</h3>

      <p style={{
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 16,
        lineHeight: 1.6,
        color: '#C9C7C2',
        margin: 0,
        textWrap: 'pretty',
        paddingTop: 14,
      }}>{detail}</p>
    </li>
  );
}

window.AntiPromises = AntiPromises;
