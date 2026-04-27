// CTA.jsx — i18n
function CTA({ onCtaClick }) {
  const [lang] = window.i18n.useLang();
  const t = window.i18n.t;
  return (
    <section id="contact" className="tvl-cta" style={{
      background: '#FF4931', color: '#fff',
      padding: '120px 48px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        backgroundPosition: '-1px -1px',
        pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse at 80% 50%, rgba(0,0,0,0.9), rgba(0,0,0,0) 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 80% 50%, rgba(0,0,0,0.9), rgba(0,0,0,0) 70%)',
      }}></div>

      <div aria-hidden="true" className="tvl-cta-decor" style={{ position: 'absolute', top: '15%', right: '8%', width: 24, height: 24, background: '#000', pointerEvents: 'none' }}></div>
      <div aria-hidden="true" className="tvl-cta-decor" style={{ position: 'absolute', top: '38%', right: '22%', width: 12, height: 12, background: '#000', pointerEvents: 'none' }}></div>
      <div aria-hidden="true" className="tvl-cta-decor" style={{ position: 'absolute', bottom: '20%', right: '14%', width: 36, height: 36, background: '#000', pointerEvents: 'none' }}></div>
      <div aria-hidden="true" className="tvl-cta-decor" style={{ position: 'absolute', bottom: '35%', right: '5%', width: 8, height: 8, background: '#000', pointerEvents: 'none' }}></div>

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div style={{
          fontFamily: 'Open Sans, sans-serif', fontSize: 12, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.24em',
          color: 'rgba(255,255,255,0.85)', marginBottom: 24,
        }}>{t('cta.kicker')}</div>
        <h2 style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 'clamp(64px, 10vw, 160px)',
          lineHeight: 0.92, textTransform: 'uppercase',
          margin: 0, maxWidth: 1100, textWrap: 'balance',
        }}>
          {t('cta.title.a')}<br/>{t('cta.title.b')}
        </h2>
        <p style={{
          fontFamily: 'Open Sans, sans-serif', fontSize: 22, lineHeight: 1.5,
          color: 'rgba(255,255,255,0.9)', marginTop: 32, maxWidth: 700,
        }}>
          {t('cta.subtitle')}
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 48, flexWrap: 'wrap' }}>
          <button onClick={onCtaClick} style={{
            background: '#000', color: '#fff', border: 'none',
            borderRadius: 4,
            padding: '20px 36px',
            fontFamily: 'Open Sans, sans-serif', fontWeight: 700, fontSize: 13,
            textTransform: 'uppercase', letterSpacing: '0.16em',
            cursor: 'pointer',
          }}>{t('cta.btn')}</button>
          <a href="mailto:contact@tvl.technology" style={{
            color: '#fff', borderBottom: '1px solid #fff',
            fontFamily: 'Open Sans, sans-serif', fontWeight: 700, fontSize: 13,
            textTransform: 'uppercase', letterSpacing: '0.16em',
            padding: '20px 0', textDecoration: 'none',
          }}>contact@tvl.technology</a>
        </div>
      </div>
    </section>
  );
}

window.CTA = CTA;
