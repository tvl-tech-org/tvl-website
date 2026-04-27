// Projects.jsx — i18n
const PROJECT_META = [
  { id: 'p1', illustration: 'assets/proj-funding.svg', stack: ['LLM', 'OCR', 'Vector DB', 'Chatbot'] },
  { id: 'p2', illustration: 'assets/proj-brainactive.svg', stack: ['Next.js', 'Node.js', 'Azure OpenAI', 'Function Calling'] },
  { id: 'p3', illustration: 'assets/proj-license-cloud.svg', stack: ['Cloud Native', 'Microservices', 'Multi-tenant'] },
  { id: 'p4', illustration: 'assets/proj-ebsi.svg', stack: ['Blockchain', 'Smart Contracts', 'Decentralized Identity', 'EU'] },
  { id: 'p5', illustration: 'assets/proj-data-lake.svg', stack: ['Gemini 2.5', 'LangChain', 'LangGraph', 'Google Cloud', 'Data Lake'] },
];

function ProjectRow({ project, index, total }) {
  const [hover, setHover] = React.useState(false);
  const t = window.i18n.t;
  return (
    <article
      className="tvl-proj-row"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '320px 1fr 1.2fr',
        gap: 48,
        padding: '56px 0',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: index === total - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
        transition: 'background 220ms',
        background: hover ? 'rgba(255,73,49,0.04)' : 'transparent',
      }}>
      {/* Illustration + index */}
      <div className="tvl-proj-illus-wrap" style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 4 }}>
        <div className="tvl-proj-illus" style={{
          width: 320, height: 228,
          border: '1px solid rgba(255,255,255,0.12)',
          overflow: 'hidden',
          transition: 'border-color 220ms, transform 320ms cubic-bezier(.2,.7,.2,1)',
          borderColor: hover ? 'rgba(255,73,49,0.6)' : 'rgba(255,255,255,0.12)',
          transform: hover ? 'translateY(-2px)' : 'translateY(0)',
          background: '#0a0a0a',
        }}>
          <img src={project.illustration} alt="" width={320} height={228} style={{ display: 'block', width: '100%', height: '100%' }} />
        </div>
        <div style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 13, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.16em',
          color: hover ? '#FF4931' : '#777',
          transition: 'color 220ms',
        }}>
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
      </div>

      {/* Title side */}
      <div>
        <div style={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: 11, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.24em',
          color: '#FF4931',
          marginBottom: 16,
        }}>{t(`pr.${project.id}.sector`)}</div>
        <h3 style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 'clamp(28px, 3vw, 40px)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
          margin: 0,
          textWrap: 'balance',
          color: '#fff',
        }}>{t(`pr.${project.id}.title`)}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24 }}>
          {project.stack.map(s => (
            <span key={s} style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: 11, fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.12em',
              color: '#C9C7C2',
              padding: '6px 12px',
              border: '1px solid rgba(255,255,255,0.18)',
            }}>{s}</span>
          ))}
        </div>
      </div>

      {/* Problem + Solution */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 10, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.32em',
            color: '#777',
            marginBottom: 10,
          }}>{t('pr.problema')}</div>
          <p style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 17, lineHeight: 1.55,
            color: '#C9C7C2',
            margin: 0,
            textWrap: 'pretty',
          }}>{t(`pr.${project.id}.problem`)}</p>
        </div>
        <div>
          <div style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 10, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.32em',
            color: '#FF4931',
            marginBottom: 10,
          }}>{t('pr.solutia')}</div>
          <p style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 17, lineHeight: 1.55,
            color: '#fff',
            margin: 0,
            textWrap: 'pretty',
          }}>{t(`pr.${project.id}.solution`)}</p>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [lang] = window.i18n.useLang();
  const t = window.i18n.t;
  return (
    <section id="proiecte" style={{
      background: '#000',
      padding: '120px 48px',
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <header className="tvl-proj-header" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'end',
          marginBottom: 64,
        }}>
          <div>
            <div style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: 12, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.32em',
              color: '#FF4931',
              marginBottom: 24,
            }}>{t('pr.kicker')}</div>
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
              {t('pr.title.a')}<br/>
              <span style={{ color: '#FF4931' }}>{t('pr.title.b')}</span>
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
            {t('pr.subtitle')}
          </p>
        </header>

        <div>
          {PROJECT_META.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <ProjectRow project={p} index={i} total={PROJECT_META.length} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Projects = Projects;
