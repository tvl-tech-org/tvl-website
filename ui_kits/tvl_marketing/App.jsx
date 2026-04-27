// App.jsx — composes the full landing page
const { useState: useApp } = React;

function App() {
  const [contactOpen, setContactOpen] = useApp(false);
  const open = () => setContactOpen(true);
  const close = () => setContactOpen(false);

  return (
    <div data-screen-label="TVL Tech · Landing">
      <Header onCtaClick={open} />
      <Hero
        onCtaClick={open}
        taglineId="cear-ajuta"
        squares={{
          enabled: true,
          density: 28,
          speed: 1,
          intensity: 0.35,
          orangeRatio: 0.18,
        }}
      />
      <ProblemSolution />
      <Projects />
      <AntiPromises />
      <Process />
      <Testimonials />
      <Blog />
      <CTA onCtaClick={open} />
      <Footer />
      <ContactModal open={contactOpen} onClose={close} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
