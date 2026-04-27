// Process.jsx — i18n
function Process() {
  const [lang] = window.i18n.useLang();
  const t = window.i18n.t;
  const steps = [
    { n: '01', title: t('proc.s1.title'), body: t('proc.s1.body') },
    { n: '02', title: t('proc.s2.title'), body: t('proc.s2.body') },
    { n: '03', title: t('proc.s3.title'), body: t('proc.s3.body') },
  ];

  return (
    <section style={{ background: '#F4F2EE', color: '#0A0A0A', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'Open Sans, sans-serif', fontSize: 12, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.24em',
          color: '#FF4931', marginBottom: 16,
        }}>{t('proc.kicker')}</div>
        <h2 className="tvl-section-h2" style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 'clamp(40px, 6vw, 80px)',
          lineHeight: 0.95,
          textTransform: 'uppercase',
          margin: 0, marginBottom: 64, maxWidth: 880,
        }}>
          {t('proc.title.a')} <span style={{ color: '#FF4931' }}>{t('proc.title.b')}</span>{t('proc.title.c')}
        </h2>

        <div className="tvl-process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: '#0A0A0A' }}>
          {steps.map(s => (
            <div key={s.n} style={{
              background: '#F4F2EE', padding: '40px 32px',
              display: 'flex', flexDirection: 'column', gap: 16,
              minHeight: 280,
            }}>
              <div style={{
                fontFamily: "'Open Sans', sans-serif", fontSize: 56,
                color: '#FF4931', lineHeight: 1,
              }}>{s.n}</div>
              <div style={{
                fontFamily: "'Open Sans', sans-serif", fontSize: 36,
                textTransform: 'uppercase', lineHeight: 1,
              }}>{s.title}</div>
              <div style={{
                fontFamily: 'Open Sans, sans-serif', fontSize: 16, lineHeight: 1.6,
                color: '#4A4A4A',
              }}>{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Process = Process;
