import { useState } from 'react';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import Couple from './components/Couple';
import Events from './components/Events';
import Venue from './components/Venue';
import Countdown from './components/Countdown';
import Footer from './components/Footer';

const pages = [
  { key: 'hero', label: 'Welcome' },
  { key: 'invitation', label: 'Invitation' },
  { key: 'couple', label: 'Couple' },
  { key: 'events', label: 'Events' },
  { key: 'venue', label: 'Venue' },
  { key: 'countdown', label: 'Countdown' },
  { key: 'footer', label: 'Blessings' },
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const goNext = () => setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
  const goPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  const goToPage = (index) => setCurrentPage(index);

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <Hero onOpenInvitation={goNext} />;
      case 1:
        return <Invitation />;
      case 2:
        return <Couple />;
      case 3:
        return <Events />;
      case 4:
        return <Venue />;
      case 5:
        return <Countdown />;
      case 6:
        return <Footer />;
      default:
        return <Hero onOpenInvitation={goNext} />;
    }
  };

  return (
    <div className="page-shell page-shell--stacked">
      <div className="page-indicator" aria-label="Page navigation">
        {pages.map((page, index) => (
          <button
            key={page.key}
            type="button"
            className={`page-indicator__dot ${currentPage === index ? 'active' : ''}`}
            onClick={() => goToPage(index)}
            aria-label={`Go to ${page.label}`}
            title={page.label}
          />
        ))}
      </div>

      <div className="page-stage">
        {renderPage()}
      </div>

      <div className="page-nav">
        <button type="button" className="page-nav__button" onClick={goPrev} disabled={currentPage === 0}>
          ← Back
        </button>
        <div className="page-nav__label">{pages[currentPage].label}</div>
        <button
          type="button"
          className="page-nav__button page-nav__button--primary"
          onClick={goNext}
          disabled={currentPage === pages.length - 1}
        >
          {currentPage === pages.length - 1 ? 'End' : 'Next →'}
        </button>
      </div>
    </div>
  );
}

export default App;
