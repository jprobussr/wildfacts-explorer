const App = () => {
  return (
    <div className="app">
      <header className="hero">
        <h1 className="hero-title">Wildfacts Explorer</h1>
        <p className="hero-text">Click an animal to learn a fun fact.</p>
      </header>

      <main className="main-content">
        <section className="gallery-section">
          <h2 className="section-title">Animal Gallery</h2>
        </section>

        <section className="fact-section">
          <h2 className="section-title">Fun Fact</h2>
          <p className="fact-placeholder">Select an animal to see a fact here.</p>
        </section>
      </main>
    </div>
  );
};

export default App;
