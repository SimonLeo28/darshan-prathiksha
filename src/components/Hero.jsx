import { Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

const Hero = ({ onOpenInvitation }) => {
  return (
    <header className="hero section-shell">
      <div className="hero__ornaments hero__ornaments--left" aria-hidden="true" />
      <div className="hero__ornaments hero__ornaments--right" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__header">
          <span className="hero__blessing">{weddingData.blessing}</span>
        </div>

        <div className="hero__title-wrap">
          <p className="eyebrow">A grand celebration of love</p>
          <h1 className="hero__title">{weddingData.brideName} <span>&</span> {weddingData.groomName}</h1>
          <p className="hero__date">16 November 2026</p>
        </div>

        <button className="cta-button" onClick={onOpenInvitation}>
          <Sparkles size={18} />
          Open Wedding Invitation
        </button>
      </div>
    </header>
  );
};

export default Hero;
