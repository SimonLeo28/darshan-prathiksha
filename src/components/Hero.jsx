import { Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

const Hero = () => {
  return (
    <header className="hero section-shell" id="welcome">
      <div className="hero__ornaments hero__ornaments--left" aria-hidden="true" />
      <div className="hero__ornaments hero__ornaments--right" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__header">
          <span className="hero__blessing">{weddingData.blessing}</span>
        </div>

        <div className="hero__title-wrap">
          <p className="eyebrow hero__eyebrow">A GRAND CELEBRATION</p>
          <h1 className="hero__title">
            {weddingData.groomName} <span>&</span> {weddingData.brideName}
          </h1>
          <p className="hero__date">16 November 2026</p>
        </div>

        <a className="cta-button" href="#invitation" aria-label="Scroll to wedding invitation">
          <Sparkles size={18} />
          Open Wedding Invitation
        </a>
      </div>
    </header>
  );
};

export default Hero;
