// ProblemSolution.jsx — i18n
function ProblemSolution() {
  const [lang] = window.i18n.useLang();
  const t = window.i18n.t;
  const rows = Array.from({ length: 8 }, (_, i) => ({
    n: String(i + 1).padStart(2, '0'),
    problem: t(`ps.r${i+1}.problem`),
    solution: t(`ps.r${i+1}.solution`),
    detail: t(`ps.r${i+1}.detail`),
  }));

  return (
    <section id="servicii" style={{ background: '#000', color: '#fff', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal>
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            gap: 32, marginBottom: 64, flexWrap: 'wrap',
          }}>
            <div>
              <div style={{
                fontFamily: 'Open Sans, sans-serif', fontSize: 12, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.24em',
                color: '#FF4931', marginBottom: 16,
              }}>{t('ps.kicker')}</div>
              <h2 className="tvl-section-h2" style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 'clamp(48px, 7vw, 96px)',
                lineHeight: 0.95,
                textTransform: 'uppercase',
                margin: 0, maxWidth: 880,
              }}>
                {t('ps.title.a')}<br/>{t('ps.title.b')} <span style={{ color: '#FF4931' }}>{t('ps.title.c')}</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
          {rows.map((r, i) => (
            <Reveal key={i} delay={i * 50}>
              <Row {...r} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ n, problem, solution, detail }) {
  const [hover, setHover] = React.useState(false);
  const t = window.i18n.t;
  return (
    <div
      className="tvl-ps-row"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr 1fr 80px',
        gap: 32,
        padding: '40px 0',
        borderBottom: '1px solid rgba(255,255,255,0.15)',
        alignItems: 'flex-start',
        background: hover ? 'rgba(255,73,49,0.04)' : 'transparent',
        transition: 'background 200ms',
        cursor: 'pointer',
      }}
    >
      <div className="tvl-ps-num" style={{
        fontFamily: "'Open Sans', sans-serif", fontSize: 36,
        color: hover ? '#FF4931' : '#777', transition: 'color 200ms',
      }}>{n}</div>
      <div>
        <div style={{
          fontFamily: 'Open Sans, sans-serif', fontSize: 12, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.18em',
          color: '#777', marginBottom: 8,
        }}>{t('ps.problema')}</div>
        <div className="tvl-ps-problem-text" style={{
          fontFamily: 'Open Sans, sans-serif', fontSize: 26, fontWeight: 400,
          color: '#fff', lineHeight: 1.25,
          textWrap: 'balance',
        }}>{problem}</div>
      </div>
      <div>
        <div style={{
          fontFamily: 'Open Sans, sans-serif', fontSize: 12, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.18em',
          color: '#FF4931', marginBottom: 8,
        }}>{t('ps.solutia')}</div>
        <div className="tvl-ps-solution-text" style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 30, lineHeight: 1, textTransform: 'uppercase',
          color: '#fff', marginBottom: 12,
        }}>{solution}</div>
        <div style={{
          fontFamily: 'Open Sans, sans-serif', fontSize: 15, lineHeight: 1.55,
          color: '#C9C7C2', maxWidth: 460,
        }}>{detail}</div>
      </div>
      <div className="tvl-ps-arrow" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
        fontSize: 22, color: hover ? '#FF4931' : '#777',
        transform: hover ? 'translateX(8px)' : 'translateX(0)',
        transition: 'all 200ms',
      }}>→</div>
    </div>
  );
}

window.ProblemSolution = ProblemSolution;
