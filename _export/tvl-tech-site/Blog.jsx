// Blog.jsx — i18n
function Blog() {
  const [lang] = window.i18n.useLang();
  const t = window.i18n.t;
  const all = (window.TVL_ARTICLES || []).slice().sort((a,b) => b.date.localeCompare(a.date));
  const posts = all.slice(0, 3).map(a => ({
    slug: a.slug,
    cat: (a.category && a.category[lang]) || a.category,
    date: window.fmtDate ? window.fmtDate(a.date, lang) : a.date,
    readTime: a.readTime + ' ' + t('blog.read_time'),
    title: (a.title && a.title[lang]) || a.title,
    excerpt: (a.excerpt && a.excerpt[lang]) || a.excerpt,
  }));

  return (
    <section id="blog" style={{ background: '#0A0A0A', color: '#fff', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          gap: 32, flexWrap: 'wrap', marginBottom: 64,
        }}>
          <div>
            <div style={{
              fontFamily: 'Open Sans, sans-serif', fontSize: 12, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.24em',
              color: '#FF4931', marginBottom: 16,
            }}>{t('blog.kicker')}</div>
            <h2 className="tvl-section-h2" style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: 'clamp(40px, 6vw, 80px)',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              margin: 0, maxWidth: 880,
            }}>
              {t('blog.title.a')}<br/><span style={{ color: '#FF4931' }}>{t('blog.title.b')}</span>{t('blog.title.c')}
            </h2>
          </div>
          <a href="blog.html" style={{
            color: '#fff',
            fontFamily: 'Open Sans, sans-serif', fontWeight: 700, fontSize: 12,
            textTransform: 'uppercase', letterSpacing: '0.16em',
            textDecoration: 'none',
            paddingBottom: 6,
            borderBottom: '1px solid #FF4931',
          }}>{t('blog.see_all')}</a>
        </div>

        <div className="tvl-blog-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 24,
        }}>
          <BlogCard post={posts[0]} large />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <BlogCard post={posts[1]} />
            <BlogCard post={posts[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post, large }) {
  const [hover, setHover] = React.useState(false);
  const t = window.i18n.t;

  if (large) {
    return (
      <a className="tvl-blog-card-large" href={`article.html?slug=${post.slug}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          background: '#000',
          border: '1px solid ' + (hover ? '#FF4931' : 'rgba(255,255,255,0.12)'),
          padding: 0,
          display: 'flex', flexDirection: 'column',
          textDecoration: 'none', color: '#fff',
          transition: 'all 200ms cubic-bezier(.22,1,.36,1)',
          minHeight: 540,
        }}>
        {/* Cover — pattern as placeholder */}
        <div className="tvl-blog-cover" style={{
          height: 280,
          background: '#FF4931',
          backgroundImage: 'url(assets/pattern-grid.svg)',
          backgroundSize: '90px 90px',
          backgroundRepeat: 'repeat',
          backgroundBlendMode: 'multiply',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: 16, left: 16,
            background: '#000', color: '#fff',
            padding: '6px 12px',
            fontFamily: 'Open Sans, sans-serif', fontSize: 11, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.18em',
          }}>{post.cat}</div>
        </div>
        <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
          <div style={{
            fontFamily: 'Open Sans, sans-serif', fontSize: 11, fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.16em',
            color: '#777',
          }}>{post.date} · {post.readTime}</div>
          <h3 style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 30, fontWeight: 700, lineHeight: 1.2,
            margin: 0, letterSpacing: '-0.01em',
            color: hover ? '#FF4931' : '#fff',
            transition: 'color 200ms',
            textWrap: 'balance',
          }}>{post.title}</h3>
          <p style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 16, lineHeight: 1.55, color: '#C9C7C2', margin: 0,
          }}>{post.excerpt}</p>
          <div style={{
            marginTop: 'auto', paddingTop: 16,
            fontFamily: 'Open Sans, sans-serif', fontSize: 12, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.18em',
            color: '#FF4931',
          }}>{t('blog.read')}</div>
        </div>
      </a>
    );
  }

  return (
    <a href={`article.html?slug=${post.slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#000',
        border: '1px solid ' + (hover ? '#FF4931' : 'rgba(255,255,255,0.12)'),
        padding: 24,
        display: 'flex', flexDirection: 'column', gap: 12,
        textDecoration: 'none', color: '#fff',
        transition: 'all 200ms',
        flex: 1,
      }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{
          background: '#FF4931', color: '#fff',
          padding: '4px 10px',
          fontFamily: 'Open Sans, sans-serif', fontSize: 10, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.18em',
        }}>{post.cat}</span>
        <span style={{
          fontFamily: 'Open Sans, sans-serif', fontSize: 11, fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.16em', color: '#777',
        }}>{post.date} · {post.readTime}</span>
      </div>
      <h3 style={{
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 22, fontWeight: 700, lineHeight: 1.25,
        margin: 0, letterSpacing: '-0.01em',
        color: hover ? '#FF4931' : '#fff',
        transition: 'color 200ms',
        textWrap: 'balance',
      }}>{post.title}</h3>
      <p style={{
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 14, lineHeight: 1.55, color: '#C9C7C2', margin: 0,
      }}>{post.excerpt}</p>
    </a>
  );
}

window.Blog = Blog;
