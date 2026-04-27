// FloatingSquares.jsx — ambient animation for hero background
// Geometric squares drifting slowly, fidel to the TVL logo grid.

function FloatingSquares({
  density = 28,        // number of squares
  speed = 1,           // multiplier for drift speed
  intensity = 0.35,    // overall opacity (0..1)
  orangeRatio = 0.18,  // share of squares that are orange
  enabled = true,
}) {
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(0);
  const squaresRef = React.useRef([]);
  const sizeRef = React.useRef({ w: 0, h: 0, dpr: 1 });

  // Re-seed squares whenever density or canvas size changes
  React.useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const seed = () => {
      const { w, h } = sizeRef.current;
      if (!w || !h) return;
      const sizes = [16, 24, 32, 48, 72, 96];
      const arr = [];
      for (let i = 0; i < density; i++) {
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const isOrange = Math.random() < orangeRatio;
        arr.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size,
          // very slow drift, mostly vertical, a bit horizontal
          vx: (Math.random() - 0.5) * 0.12,
          vy: -0.08 - Math.random() * 0.18,
          rot: Math.random() * Math.PI * 2,
          vrot: (Math.random() - 0.5) * 0.0008,
          isOrange,
          // per-square base opacity (varies a lot for depth)
          baseAlpha: isOrange
            ? 0.55 + Math.random() * 0.35
            : 0.06 + Math.random() * 0.18,
          // slow pulse phase
          phase: Math.random() * Math.PI * 2,
          phaseSpeed: 0.0006 + Math.random() * 0.001,
          filled: isOrange ? Math.random() < 0.5 : Math.random() < 0.35,
        });
      }
      squaresRef.current = arr;
    };

    const onResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, rect.width);
      const h = Math.max(1, rect.height);
      sizeRef.current = { w, h, dpr };
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      const ctx = canvas.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    onResize();
    const ro = new ResizeObserver(onResize);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [density, orangeRatio, enabled]);

  React.useEffect(() => {
    if (!enabled) {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min(48, now - last); // ms, capped to avoid huge jumps
      last = now;
      const { w, h } = sizeRef.current;
      ctx.clearRect(0, 0, w, h);

      const sqs = squaresRef.current;
      // Draw back-to-front by size (smaller = further back)
      const sorted = sqs.slice().sort((a, b) => a.size - b.size);
      for (const s of sorted) {
        // update
        s.x += s.vx * speed * dt * 0.06;
        s.y += s.vy * speed * dt * 0.06;
        s.rot += s.vrot * speed * dt;
        s.phase += s.phaseSpeed * dt;

        // wrap with margin so they fade in/out at edges
        const margin = s.size + 20;
        if (s.y < -margin) { s.y = h + margin; s.x = Math.random() * w; }
        if (s.y > h + margin) { s.y = -margin; }
        if (s.x < -margin) s.x = w + margin;
        if (s.x > w + margin) s.x = -margin;

        // pulse alpha
        const pulse = 0.75 + 0.25 * Math.sin(s.phase);
        const alpha = Math.max(0, Math.min(1, s.baseAlpha * pulse * intensity));

        // draw
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rot);
        ctx.globalAlpha = alpha;
        const half = s.size / 2;
        if (s.isOrange) {
          if (s.filled) {
            ctx.fillStyle = '#FF4931';
            ctx.fillRect(-half, -half, s.size, s.size);
          } else {
            ctx.strokeStyle = '#FF4931';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(-half, -half, s.size, s.size);
          }
        } else {
          if (s.filled) {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(-half, -half, s.size, s.size);
          } else {
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1;
            ctx.strokeRect(-half, -half, s.size, s.size);
          }
        }
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, intensity, enabled]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}

window.FloatingSquares = FloatingSquares;
