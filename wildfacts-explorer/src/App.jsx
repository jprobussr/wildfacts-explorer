import { animals } from './data.js';
import { useState } from 'react';

const App = () => {
  const [selectedFact, setSelectedFact] = useState(
    'Select an animal to see a fact here.',
  );
  const animalEntries = Object.entries(animals);

  const handleShowFact = (animalName) => {
    const facts = animals[animalName].facts;
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];

    setSelectedFact(randomFact);
  };

  return (
    <div className="app">
      <header className="hero">
        <h1 className="hero-title">Wildfacts Explorer</h1>
        <p className="hero-text">Click an animal to learn a fun fact.</p>
      </header>

      <main className="main-content">
        <section className="gallery-section">
          <h2 className="section-title">Animal Gallery</h2>

          <div className="animal-grid">
            {animalEntries.map(([name, animal]) => {
              return (
                <article
                  className="animal-card"
                  key={name}
                  onClick={() => handleShowFact(name)}
                >
                  <img src={animal.image} alt={name} className="animal-image" />
                  <h3 className="animal-name">{name}</h3>
                </article>
              );
            })}
          </div>
        </section>

        <section className="fact-section">
          <h2 className="section-title">Fun Fact</h2>
          <p className="fact-placeholder">
            {selectedFact}
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
