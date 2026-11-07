import { weddingData } from '../data/weddingData';

const Footer = () => {
  return (
    <footer className="section-shell footer-shell" id="footer">
      <div className="footer-card">
        <p className="section-tag">With love and blessings</p>
        <h2>We Look Forward to Celebrating With You</h2>
        <p className="footer-card__message">
          Your presence and blessings will make our special moments even more memorable.
        </p>
        <h3>
          {weddingData.groomName} &amp; {weddingData.brideName}
        </h3>
        <p>16 November 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
