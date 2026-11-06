import { weddingData } from '../data/weddingData';

const Invitation = () => {
  return (
    <section id="invitation" className="section-shell invitation-section">
      <div className="section-heading">
        <span className="section-tag">Wedding Invitation</span>
        <h2>With heartfelt gratitude</h2>
      </div>

      <div className="invitation-card">
        <div className="invitation-card__inner">
          <p className="kannada-display">{weddingData.blessing}</p>
          <h3 className="invitation-card__names">
            {weddingData.brideName} & {weddingData.groomName}
          </h3>
          <p className="invitation-card__date">Date: 16th November 2026</p>
          <p className="invitation-card__time">Muhurtham: 9:00 AM to 10:00 AM</p>

          <div className="invitation-divider" aria-hidden="true" />

          <div className="invitation-card__message">
            <p className="kannada-display">{weddingData.invitationHeadline}</p>
            {weddingData.invitationText.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="invitation-card__families">
            <p>{weddingData.brideFamily}</p>
            <span>with</span>
            <p>{weddingData.groomFamily}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
