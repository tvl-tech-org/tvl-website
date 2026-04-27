// Hero.jsx — i18n
const HERO_TAGLINE_IDS = [
  'cear-functiona', 'cear-existat', 'cear-simplu', 'cear-automat',
  'cear-vorbit', 'cear-incepe', 'cear-altfel',
];

function renderTaglineLine(line, key) {
  // Parse [orange]...[/orange] markers
  const parts = [];
  const re = /\[orange\]([\s\S]*?)\[\/orange\]/g;
  let last = 0, m, i = 0;
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) parts.push(<span key={i++}>{line.slice(last, m.index)}</span>);
    parts.push(<span key={i++} style={{ color: '#FF4931' }}>{m[1]}</span>);
    last = m.index + m[0].length;
  }
  if (last < line.length) parts.push(<span key={i++}>{line.slice(last)}</span>);
  return <React.Fragment key={key}>{parts}{<br/>}</React.Fragment>;
}

function Hero({ onCtaClick, taglineId = 'cear-vorbit', squares = {} }) {
  const [lang] = window.i18n.useLang();
  const t = window.i18n.t;
  const id = HERO_TAGLINE_IDS.includes(taglineId) ? taglineId : HERO_TAGLINE_IDS[0];
  const taglineLines = [t(`tag.${id}.l1`), t(`tag.${id}.l2`), t(`tag.${id}.l3`)];
  const sq = {
    enabled: true,
    density: 28,
    speed: 1,
    intensity: 0.35,
    orangeRatio: 0.18,
    ...squares,
  };
  return (
    <section className="tvl-hero" style={{
      position: 'relative',
      background: '#000', color: '#fff',
      minHeight: '88vh',
      padding: '96px 48px 64px',
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      <div className="tvl-hero-network" style={{
        position: 'absolute', top: 0, right: 0,
        width: 480, height: 360,
        backgroundImage: 'url(assets/hero-network.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'top right',
        opacity: 0.55,
        pointerEvents: 'none',
        zIndex: 0,
        maskImage: 'linear-gradient(to left, #000 60%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to left, #000 60%, transparent 100%)',
      }} />
      {window.FloatingSquares && sq.enabled && (
        <FloatingSquares
          enabled={sq.enabled}
          density={sq.density}
          speed={sq.speed}
          intensity={sq.intensity}
          orangeRatio={sq.orangeRatio}
        />
      )}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: 12, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.32em',
          color: '#FF4931',
        }}>{t('hero.kicker')}</div>
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100 }}>
        <h1 style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 'clamp(72px, 11vw, 168px)',
          lineHeight: 0.92,
          textTransform: 'uppercase',
          letterSpacing: '-0.005em',
          margin: 0,
          textWrap: 'balance',
        }}>
          {taglineLines.map((ln, i) => renderTaglineLine(ln, i))}
        </h1>
        <p style={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: 22, fontWeight: 400,
          lineHeight: 1.5, color: '#C9C7C2',
          marginTop: 32, maxWidth: 640,
          textWrap: 'pretty',
        }}>
          {t('hero.subtitle')}
        </p>
        <div className="tvl-hero-buttons" style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
          <button onClick={onCtaClick} style={{
            background: '#FF4931', color: '#fff', border: 'none',
            borderRadius: 4,
            padding: '18px 32px',
            fontFamily: 'Open Sans, sans-serif', fontWeight: 700, fontSize: 13,
            textTransform: 'uppercase', letterSpacing: '0.16em',
            cursor: 'pointer',
            transition: 'background 200ms',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#9E2D1E'}
          onMouseLeave={e => e.currentTarget.style.background = '#FF4931'}
          >{t('hero.cta_primary')}</button>
          <button style={{
            background: 'transparent', color: '#fff',
            border: '1px solid rgba(255,255,255,0.4)',
            borderRadius: 4,
            padding: '18px 32px',
            fontFamily: 'Open Sans, sans-serif', fontWeight: 700, fontSize: 13,
            textTransform: 'uppercase', letterSpacing: '0.16em',
            cursor: 'pointer',
            transition: 'all 200ms',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF4931'; e.currentTarget.style.color = '#FF4931'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = '#fff'; }}
          >{t('hero.cta_secondary')}</button>
        </div>
      </div>

      <div className="tvl-hero-bottom" style={{
        position: 'relative', zIndex: 2,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        gap: 32, marginTop: 80,
        paddingTop: 32,
        borderTop: '1px solid rgba(255,255,255,0.12)',
      }}>
        <div style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 22, letterSpacing: '0.32em',
          textTransform: 'uppercase', color: '#fff',
        }}>{t('hero.tagline_motto')}</div>
        <div style={{
          fontFamily: 'Open Sans, sans-serif', fontSize: 12,
          textTransform: 'uppercase', letterSpacing: '0.18em',
          color: '#777',
        }}>{t('hero.est')}</div>
      </div>
    </section>
  );
}

window.Hero = Hero;
window.HERO_TAGLINE_IDS = HERO_TAGLINE_IDS;
