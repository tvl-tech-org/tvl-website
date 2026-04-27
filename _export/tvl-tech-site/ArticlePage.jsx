// ArticlePage.jsx — single article reader with TOC, body, related
const { useState: useAP, useMemo: useAPMemo, useEffect: useAPEffect } = React;

function getSlugFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('slug') || window.TVL_ARTICLES[0].slug;
}

function slugify(s) {
  return s.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').slice(0, 60);
}

function ArticleHero({ article }) {
  return (
    <section style={{
      position: 'relative',
      background: '#000',
      padding: '160px 48px 64px',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 80, right: 48,
        width: 320, height: 320,
        backgroundImage: 'url(assets/pattern-grid.svg)',
        backgroundSize: '80px 80px',
        opacity: 0.10,
        pointerEvents: 'none',
      }} />
      <div style={{
        maxWidth: 1200, margin: '0 auto 48px auto',
        position: 'relative', zIndex: 2,
        display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap',
      }}>
        <a href="blog.html" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: 'Open Sans, sans-serif',
          fontSize: 12, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.16em',
          color: '#777',
          textDecoration: 'none',
          transition: 'color 200ms',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#FF4931'}
        onMouseLeave={e => e.currentTarget.style.color = '#777'}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
          </svg>
          Înapoi la blog
        </a>
        <div style={{
          background: '#FF4931',
          color: '#fff',
          padding: '6px 12px',
          fontFamily: 'Open Sans, sans-serif',
          fontSize: 11, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.16em',
        }}>{article.category}</div>
      </div>
      <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <h1 style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 'clamp(40px, 6vw, 72px)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.015em',
          margin: 0, marginBottom: 32,
          textWrap: 'balance',
        }}>{article.title}</h1>
        <p style={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: 22, fontWeight: 400,
          lineHeight: 1.55, color: '#C9C7C2',
          margin: 0,
          textWrap: 'pretty',
        }}>{article.excerpt}</p>
        <div style={{
          marginTop: 48,
          display: 'flex', alignItems: 'center', gap: 24,
          flexWrap: 'wrap',
          paddingTop: 32,
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
          <div style={{
            width: 48, height: 48,
            background: '#FF4931', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Open Sans, sans-serif', fontSize: 16, fontWeight: 700,
          }}>{article.author.split(' ').map(n => n[0]).join('')}</div>
          <div style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{article.author}</div>
            <div style={{ fontSize: 12, color: '#777', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 2 }}>{article.role} · TVL Tech</div>
          </div>
          <div style={{
            marginLeft: 'auto',
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 12, fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.16em',
            color: '#777',
            display: 'flex', gap: 16,
          }}>
            <span>{fmtDate(article.date)}</span>
            <span>·</span>
            <span>{article.readTime} min citire</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TableOfContents({ headings }) {
  const [active, setActive] = useAP(headings[0]?.id);
  useAPEffect(() => {
    const onScroll = () => {
      let cur = headings[0]?.id;
      for (const h of headings) {
        const el = document.getElementById(h.id);
        if (el && el.getBoundingClientRect().top < 120) cur = h.id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [headings]);
  if (headings.length === 0) return null;
  return (
    <nav style={{
      position: 'sticky', top: 96,
      paddingLeft: 24,
      borderLeft: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div style={{
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 11, fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.32em',
        color: '#777',
        marginBottom: 20,
      }}>Cuprins</div>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {headings.map((h, i) => (
          <li key={h.id}>
            <a href={'#' + h.id} style={{
              display: 'block',
              fontFamily: 'Open Sans, sans-serif',
              fontSize: 14, lineHeight: 1.4,
              color: active === h.id ? '#FF4931' : '#C9C7C2',
              fontWeight: active === h.id ? 700 : 400,
              textDecoration: 'none',
              transition: 'color 200ms',
            }}>
              <span style={{ color: '#777', marginRight: 8 }}>{String(i+1).padStart(2,'0')}</span>
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function Block({ block }) {
  if (block.type === 'p') return <p style={{
    fontFamily: 'Open Sans, sans-serif', fontSize: 18, lineHeight: 1.7,
    color: '#E2E0DC', margin: '0 0 24px 0', textWrap: 'pretty',
  }}>{block.text}</p>;
  if (block.type === 'h2') {
    const id = block.id || slugify(block.text);
    return <h2 id={id} style={{
      fontFamily: "'Open Sans', sans-serif",
      fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700,
      lineHeight: 1.15, letterSpacing: '-0.01em',
      margin: '64px 0 24px 0', color: '#fff', textWrap: 'balance',
      scrollMarginTop: 96,
    }}>{block.text}</h2>;
  }
  if (block.type === 'h3') return <h3 style={{
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 22, fontWeight: 700, lineHeight: 1.2,
    margin: '40px 0 16px 0', color: '#fff',
  }}>{block.text}</h3>;
  if (block.type === 'list') return <ul style={{
    margin: '0 0 24px 0', paddingLeft: 0, listStyle: 'none',
  }}>{block.items.map((it,i) => (
    <li key={i} style={{
      fontFamily: 'Open Sans, sans-serif', fontSize: 18, lineHeight: 1.6,
      color: '#E2E0DC', paddingLeft: 28, marginBottom: 12,
      position: 'relative', textWrap: 'pretty',
    }}>
      <span style={{
        position: 'absolute', left: 0, top: 10,
        width: 12, height: 2, background: '#FF4931',
      }}></span>
      {it}
    </li>
  ))}</ul>;
  if (block.type === 'quote') return <blockquote style={{
    margin: '40px 0',
    paddingLeft: 32,
    borderLeft: '3px solid #FF4931',
  }}>
    <p style={{
      fontFamily: "'Open Sans', sans-serif",
      fontSize: 26, fontWeight: 400, fontStyle: 'italic',
      lineHeight: 1.4, color: '#fff', margin: 0,
      textWrap: 'balance',
    }}>"{block.text}"</p>
    {block.author && <footer style={{
      marginTop: 16,
      fontFamily: 'Open Sans, sans-serif', fontSize: 13, fontWeight: 600,
      textTransform: 'uppercase', letterSpacing: '0.16em',
      color: '#777',
    }}>— {block.author}</footer>}
  </blockquote>;
  if (block.type === 'code') return <pre style={{
    background: '#0A0A0A',
    border: '1px solid rgba(255,255,255,0.08)',
    borderLeft: '3px solid #FF4931',
    padding: '24px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 13, lineHeight: 1.6,
    color: '#C9C7C2',
    overflow: 'auto',
    margin: '24px 0',
  }}><code>{block.text}</code></pre>;
  if (block.type === 'callout') return <aside style={{
    background: 'rgba(255,73,49,0.08)',
    border: '1px solid rgba(255,73,49,0.3)',
    padding: '24px 28px',
    margin: '32px 0',
  }}>
    <p style={{
      fontFamily: 'Open Sans, sans-serif', fontSize: 16, fontWeight: 500,
      lineHeight: 1.55, color: '#fff', margin: 0, textWrap: 'pretty',
    }}>{block.text}</p>
  </aside>;
  return null;
}

function ArticleBody({ body }) {
  // assign ids to h2 blocks
  const enriched = body.map(b => b.type === 'h2' ? { ...b, id: slugify(b.text) } : b);
  return <div>{enriched.map((b,i) => <Block key={i} block={b} />)}</div>;
}

function RelatedArticles({ current }) {
  const related = window.TVL_ARTICLES
    .filter(a => a.slug !== current.slug)
    .filter(a => a.category === current.category || a.tags.some(t => current.tags.includes(t)))
    .slice(0, 3);
  const fillers = window.TVL_ARTICLES.filter(a => a.slug !== current.slug && !related.includes(a));
  while (related.length < 3 && fillers.length) related.push(fillers.shift());
  return (
    <section style={{
      background: '#000',
      padding: '96px 48px',
      borderTop: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: 12, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.32em',
          color: '#FF4931',
          marginBottom: 20,
        }}>Citește și</div>
        <h2 style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 700,
          lineHeight: 1, letterSpacing: '-0.015em',
          textTransform: 'uppercase',
          margin: 0, marginBottom: 48,
          textWrap: 'balance',
        }}>Articole conexe</h2>
        <div style={{
          display: 'grid', gap: 24,
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        }}>
          {related.map(a => (
            <a key={a.slug} href={`article.html?slug=${a.slug}`} style={{
              display: 'block', textDecoration: 'none',
              background: '#0A0A0A',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: 28,
              transition: 'border 220ms',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#FF4931'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
              <div style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: 10, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.24em',
                color: '#FF4931',
                marginBottom: 16,
              }}>{a.category}</div>
              <h3 style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 20, fontWeight: 700,
                lineHeight: 1.2, letterSpacing: '-0.005em',
                color: '#fff',
                margin: 0, marginBottom: 16,
                textWrap: 'balance',
              }}>{a.title}</h3>
              <div style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: 12, fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '0.12em',
                color: '#777',
              }}>{a.readTime} min · {fmtDate(a.date)}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleApp() {
  const [contactOpen, setContactOpen] = useAP(false);
  const slug = getSlugFromUrl();
  const article = window.TVL_ARTICLES.find(a => a.slug === slug) || window.TVL_ARTICLES[0];
  const body = window.getArticleBody(article);
  useAPEffect(() => { document.title = article.title + ' — TVL Tech'; }, [article]);
  const headings = body.filter(b => b.type === 'h2').map(b => ({ id: slugify(b.text), text: b.text }));

  return (
    <div data-screen-label="TVL Tech · Article">
      <Header onCtaClick={() => setContactOpen(true)} />
      <ArticleHero article={article} />
      <div style={{ background: '#000', padding: '64px 48px 96px' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 240px',
          gap: 64,
          alignItems: 'start',
        }}>
          <article style={{ maxWidth: 720 }}>
            <ArticleBody body={body} />
            <div style={{
              marginTop: 64, paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', flexWrap: 'wrap', gap: 8,
            }}>
              {article.tags.map(t => (
                <span key={t} style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: 11, fontWeight: 600,
                  textTransform: 'uppercase', letterSpacing: '0.12em',
                  color: '#C9C7C2',
                  padding: '6px 12px',
                  border: '1px solid rgba(255,255,255,0.18)',
                }}>{t}</span>
              ))}
            </div>
          </article>
          <aside>
            <TableOfContents headings={headings} />
          </aside>
        </div>
      </div>
      <RelatedArticles current={article} />
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ArticleApp />);
