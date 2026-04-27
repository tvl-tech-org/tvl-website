// Reveal.jsx — fade + slide-up + stagger on scroll
function Reveal({ children, delay = 0, y = 24, duration = 600, as: As = 'div', style, ...rest }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    if (typeof IntersectionObserver === 'undefined') { setShown(true); return; }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <As
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity ${duration}ms cubic-bezier(.22,1,.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(.22,1,.36,1) ${delay}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </As>
  );
}

// Stagger: wraps a list of children, each gets its own Reveal with incremental delay
function RevealStagger({ children, baseDelay = 0, step = 60, y = 24, duration = 600, style }) {
  const arr = React.Children.toArray(children);
  return (
    <React.Fragment>
      {arr.map((child, i) => (
        <Reveal key={i} delay={baseDelay + i * step} y={y} duration={duration} style={style}>
          {child}
        </Reveal>
      ))}
    </React.Fragment>
  );
}

window.Reveal = Reveal;
window.RevealStagger = RevealStagger;
