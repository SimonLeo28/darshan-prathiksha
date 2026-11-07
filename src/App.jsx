import Hero from './components/Hero';
import Invitation from './components/Invitation';
import Couple from './components/Couple';
import Events from './components/Events';
import Countdown from './components/Countdown';
import Venue from './components/Venue';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-shell">
      <main className="page-sections">
        <Hero />
        <Invitation />
        <Couple />
        <Events />
        <Countdown />
        <Venue />
        <Footer />
      </main>
    </div>
  );
}

export default App;
