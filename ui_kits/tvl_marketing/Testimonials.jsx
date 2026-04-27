// Testimonials.jsx — i18n
const { useState: useState_T } = React;

function Testimonials() {
  const [lang] = window.i18n.useLang();
  const t = window.i18n.t;
  const META = [
    { name: 'Andrei Mocanu', company: 'Steelpoint Manufacturing' },
    { name: 'Iulia P\u0103curar', company: 'Helio Logistics' },
    { name: 'Marek Strz\u0119bicki', company: 'Vault0 Custody' },
    { name: 'Sophie Renard', company: 'Atelier Vingt' },
  ];
  const quotes = META.map((m, i) => ({
    quote: t(`tm.q${i+1}.quote`),
    role: t(`tm.q${i+1}.role`),
    name: m.name,
    company: m.company,
  }));

  const [i, setI] = useState_T(0);
  const q = quotes[i];

  return (
    <section id="proiecte" style={{ background: '#000', color: '#fff', padding: '120px 48px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', bottom: -40, left: -40,
        width: 280, height: 280,
        backgroundImage: 'url(../../assets/pattern-grid.svg)',
        backgroundSize: '100px 100px', opacity: 0.14,
      }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div style={{
          fontFamily: 'Open Sans, sans-serif', fontSize: 12, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.24em',
          color: '#FF4931', marginBottom: 16,
        }}>{t('tm.kicker')}</div>
        <h2 className="tvl-section-h2" style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 'clamp(40px, 6vw, 80px)',
          lineHeight: 0.95,
          textTransform: 'uppercase',
          margin: 0, marginBottom: 56, maxWidth: 980,
        }}>
          {t('tm.title.a')}<br/>{t('tm.title.b') ? `${t('tm.title.b')} ` : ''}<span style={{ color: '#FF4931' }}>{t('tm.title.c')}</span>
        </h2>

        <div className="tvl-tm-body" style={{
          display: 'grid', gridTemplateColumns: '1fr auto', gap: 64,
          alignItems: 'flex-end', minHeight: 360,
        }}>
          <div>
            <div style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: 120, lineHeight: 0.6, color: '#FF4931', marginBottom: 8,
            }}>"</div>
            <blockquote style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: 'clamp(22px, 2.6vw, 36px)',
              fontWeight: 400, lineHeight: 1.35,
              color: '#fff', margin: 0, maxWidth: 1000,
              textWrap: 'balance',
            }}>{q.quote}</blockquote>
            <div style={{
              marginTop: 40,
              display: 'flex', gap: 32, alignItems: 'center',
              paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.15)',
            }}>
              <div>
                <div style={{
                  fontFamily: 'Open Sans, sans-serif', fontSize: 16, fontWeight: 700, color: '#fff',
                }}>{q.name}</div>
                <div style={{
                  fontFamily: 'Open Sans, sans-serif', fontSize: 13, color: '#8A8884',
                }}>{q.role} · {q.company}</div>
              </div>
            </div>
          </div>
          <div className="tvl-tm-nav" style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
            <div style={{
              fontFamily: "'Open Sans', sans-serif", fontSize: 24, color: '#777', letterSpacing: '0.08em',
            }}>{String(i + 1).padStart(2,'0')} / {String(quotes.length).padStart(2,'0')}</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => setI((i - 1 + quotes.length) % quotes.length)} style={navBtn}>←</button>
              <button onClick={() => setI((i + 1) % quotes.length)} style={navBtn}>→</button>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 4, marginTop: 32 }}>
          {quotes.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} style={{
              flex: 1, height: 2, border: 'none', cursor: 'pointer',
              background: idx === i ? '#FF4931' : 'rgba(255,255,255,0.2)',
              transition: 'background 200ms',
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}

const navBtn = {
  width: 56, height: 56,
  background: 'transparent', color: '#fff',
  border: '1px solid rgba(255,255,255,0.3)',
  fontSize: 20, cursor: 'pointer',
  fontFamily: 'Open Sans, sans-serif',
  transition: 'all 200ms',
};

window.Testimonials = Testimonials;
