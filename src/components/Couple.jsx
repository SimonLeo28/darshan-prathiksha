import { weddingData } from '../data/weddingData';

const Couple = () => {
  return (
    <section className="section-shell couple-section">
      <div className="section-heading center">
        <span className="section-tag">Our Story</span>
        <h2>With love and blessings</h2>
      </div>

      <div className="couple-card">
        <div className="couple-card__box">
          <div className="couple-card__portrait portrait--left">
            <div className="portrait-placeholder">Bride</div>
          </div>
          <div className="couple-card__details">
            <p className="eyebrow">The Bride</p>
            <h3>{weddingData.brideName}</h3>
            <p>{weddingData.brideFamily}</p>
          </div>
        </div>

        <div className="couple-card__symbol" aria-hidden="true">
          &amp;
        </div>

        <div className="couple-card__box">
          <div className="couple-card__details">
            <p className="eyebrow">The Groom</p>
            <h3>{weddingData.groomName}</h3>
            <p>{weddingData.groomFamily}</p>
          </div>
          <div className="couple-card__portrait portrait--right">
            <div className="portrait-placeholder">Groom</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couple;
