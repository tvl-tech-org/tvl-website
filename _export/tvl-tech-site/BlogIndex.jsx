// BlogIndex.jsx — full blog listing page with filters + search
const { useState: useBI, useMemo: useBIMemo } = React;

function BlogHero({ articleCount }) {
  return (
    <section style={{
      position: 'relative',
      background: '#000',
      padding: '160px 48px 80px',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 480, height: 480,
        backgroundImage: 'url(assets/pattern-grid.svg)',
        backgroundSize: '120px 120px',
        opacity: 0.12,
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: 12, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.32em',
          color: '#FF4931',
          marginBottom: 24,
        }}>Jurnal de inginerie</div>
        <h1 style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 'clamp(56px, 9vw, 128px)',
          fontWeight: 700,
          lineHeight: 0.92,
          textTransform: 'uppercase',
          letterSpacing: '-0.015em',
          margin: 0,
          textWrap: 'balance',
        }}>
          Notițe din<br/>
          <span style={{ color: '#FF4931' }}>producție.</span>
        </h1>
        <p style={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: 20, lineHeight: 1.55,
          color: '#C9C7C2',
          marginTop: 32, maxWidth: 720,
          textWrap: 'pretty',
        }}>
          Lecții reale de pe proiecte. Despre arhitectură, AI, blockchain și migrări mari —
          scrise de oamenii care le-au construit. Fără hype, fără vânzare.
        </p>
        <div style={{
          marginTop: 40,
          fontFamily: 'Open Sans, sans-serif',
          fontSize: 13, fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.16em',
          color: '#777',
        }}>
          {articleCount} articole · actualizat săptămânal
        </div>
      </div>
    </section>
  );
}

function FilterBar({ categories, active, onChange, search, onSearchChange }) {
  return (
    <div style={{
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'rgba(0,0,0,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      padding: '20px 48px',
    }}>
      <div style={{
        maxWidth: 1400, margin: '0 auto',
        display: 'flex', alignItems: 'center', gap: 32,
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', flex: 1 }}>
          {categories.map(cat => {
            const isActive = cat === active;
            return (
              <button key={cat}
                onClick={() => onChange(cat)}
                style={{
                  background: isActive ? '#FF4931' : 'transparent',
                  color: isActive ? '#fff' : '#C9C7C2',
                  border: isActive ? '1px solid #FF4931' : '1px solid rgba(255,255,255,0.18)',
                  padding: '10px 18px',
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: 12, fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.12em',
                  cursor: 'pointer',
                  transition: 'all 200ms',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
              >{cat}</button>
            );
          })}
        </div>
        <div style={{ position: 'relative' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#777' }}>
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="search"
            placeholder="Caută articole…"
            value={search}
            onChange={e => onSearchChange(e.target.value)}
            style={{
              background: '#0F0F0F',
              border: '1px solid rgba(255,255,255,0.18)',
              color: '#fff',
              padding: '10px 16px 10px 38px',
              width: 260,
              fontFamily: 'Open Sans, sans-serif',
              fontSize: 13,
              outline: 'none',
              transition: 'border 200ms',
            }}
            onFocus={e => e.currentTarget.style.borderColor = '#FF4931'}
            onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'}
          />
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article, large = false }) {
  const [hover, setHover] = useBI(false);
  return (
    <a href={`article.html?slug=${article.slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textDecoration: 'none',
        display: 'block',
        background: '#0A0A0A',
        border: '1px solid ' + (hover ? '#FF4931' : 'rgba(255,255,255,0.08)'),
        transition: 'border 220ms',
        height: '100%',
      }}>
      {/* Visual header */}
      <div style={{
        position: 'relative',
        height: large ? 280 : 200,
        background: '#000',
        backgroundImage: 'url(assets/pattern-grid.svg)',
        backgroundSize: large ? '120px 120px' : '80px 80px',
        backgroundPosition: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: hover
            ? 'linear-gradient(135deg, rgba(255,73,49,0.25) 0%, rgba(0,0,0,0.6) 100%)'
            : 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)',
          transition: 'background 220ms',
        }} />
        <div style={{
          position: 'absolute', top: 16, left: 16,
          background: '#FF4931',
          color: '#fff',
          padding: '6px 12px',
          fontFamily: 'Open Sans, sans-serif',
          fontSize: 10, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.16em',
        }}>{article.category}</div>
      </div>
      {/* Body */}
      <div style={{ padding: large ? '32px' : '24px' }}>
        <div style={{
          display: 'flex', gap: 16,
          fontFamily: 'Open Sans, sans-serif',
          fontSize: 11, fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.12em',
          color: '#777',
          marginBottom: 16,
        }}>
          <span>{fmtDate(article.date)}</span>
          <span>·</span>
          <span>{article.readTime} min</span>
        </div>
        <h3 style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: large ? 'clamp(28px, 3vw, 36px)' : 22,
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: '-0.01em',
          color: hover ? '#FF4931' : '#fff',
          margin: 0, marginBottom: 16,
          textWrap: 'balance',
          transition: 'color 220ms',
        }}>{article.title}</h3>
        <p style={{
          fontFamily: 'Open Sans, sans-serif',
          fontSize: large ? 17 : 15,
          lineHeight: 1.55,
          color: '#C9C7C2',
          margin: 0,
          textWrap: 'pretty',
          // clamp to 3 lines
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>{article.excerpt}</p>
        <div style={{
          marginTop: 24,
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontFamily: 'Open Sans, sans-serif',
        }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{article.author}</div>
            <div style={{ fontSize: 11, color: '#777', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 2 }}>{article.role}</div>
          </div>
          <div style={{
            color: hover ? '#FF4931' : '#777',
            transition: 'color 220ms, transform 220ms',
            transform: hover ? 'translateX(4px)' : 'translateX(0)',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}

function EmptyState({ onReset }) {
  return (
    <div style={{
      padding: '120px 48px',
      textAlign: 'center',
      border: '1px dashed rgba(255,255,255,0.18)',
    }}>
      <div style={{
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 12, fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.32em',
        color: '#FF4931',
        marginBottom: 16,
      }}>Niciun rezultat</div>
      <h3 style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 32, fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '-0.01em',
        margin: 0, marginBottom: 24,
      }}>Nu am găsit nimic.</h3>
      <button onClick={onReset} style={{
        background: 'transparent',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.4)',
        padding: '14px 28px',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 12, fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.16em',
        cursor: 'pointer',
        transition: 'all 200ms',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF4931'; e.currentTarget.style.color = '#FF4931'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = '#fff'; }}
      >Resetează filtrele</button>
    </div>
  );
}

function NewsletterCTA() {
  const [email, setEmail] = useBI('');
  const [sent, setSent] = useBI(false);
  return (
    <section style={{
      background: '#FF4931',
      padding: '96px 48px',
    }}>
      <div style={{
        maxWidth: 1400, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48,
        alignItems: 'center',
      }}>
        <div>
          <div style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 12, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.32em',
            color: '#000',
            marginBottom: 24,
            opacity: 0.7,
          }}>Newsletter</div>
          <h2 style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-0.015em',
            textTransform: 'uppercase',
            margin: 0,
            color: '#000',
            textWrap: 'balance',
          }}>
            Un articol pe lună.<br/>
            Niciun spam.
          </h2>
        </div>
        <div>
          {sent ? (
            <div style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: 18, fontWeight: 600,
              color: '#000',
              padding: '24px 0',
            }}>
              Mulțumim. Ne auzim luna viitoare.
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); if (email) setSent(true); }}
              style={{ display: 'flex', gap: 0 }}>
              <input
                type="email"
                placeholder="email@compania.ta"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  background: '#000',
                  border: '1px solid #000',
                  color: '#fff',
                  padding: '20px 20px',
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: 15,
                  outline: 'none',
                }} />
              <button type="submit" style={{
                background: '#000',
                color: '#fff',
                border: '1px solid #000',
                borderLeft: '1px solid #FF4931',
                padding: '0 32px',
                fontFamily: 'Open Sans, sans-serif',
                fontSize: 12, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.16em',
                cursor: 'pointer',
              }}>Mă abonez</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function BlogIndexApp() {
  const [contactOpen, setContactOpen] = useBI(false);
  const [activeCat, setActiveCat] = useBI('Toate');
  const [search, setSearch] = useBI('');

  const filtered = useBIMemo(() => {
    let arr = [...window.TVL_ARTICLES];
    if (activeCat !== 'Toate') arr = arr.filter(a => a.category === activeCat);
    if (search.trim()) {
      const q = search.toLowerCase();
      arr = arr.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    arr.sort((a,b) => b.date.localeCompare(a.date));
    return arr;
  }, [activeCat, search]);

  const featured = filtered.find(a => a.featured);
  const rest = featured ? filtered.filter(a => a.slug !== featured.slug) : filtered;

  return (
    <div data-screen-label="TVL Tech · Blog Index">
      <Header onCtaClick={() => setContactOpen(true)} />
      <BlogHero articleCount={window.TVL_ARTICLES.length} />
      <FilterBar
        categories={window.TVL_CATEGORIES}
        active={activeCat}
        onChange={setActiveCat}
        search={search}
        onSearchChange={setSearch}
      />

      <main style={{ background: '#000', padding: '64px 48px 96px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {filtered.length === 0 ? (
            <EmptyState onReset={() => { setActiveCat('Toate'); setSearch(''); }} />
          ) : (
            <>
              {featured && activeCat === 'Toate' && !search && (
                <div style={{ marginBottom: 48 }}>
                  <div style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: 11, fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.32em',
                    color: '#FF4931',
                    marginBottom: 20,
                  }}>În prim plan</div>
                  <ArticleCard article={featured} large={true} />
                </div>
              )}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: 24,
              }}>
                {(featured && activeCat === 'Toate' && !search ? rest : filtered).map(a => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <NewsletterCTA />
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BlogIndexApp />);
