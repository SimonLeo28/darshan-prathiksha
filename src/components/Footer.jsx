import { weddingData } from '../data/weddingData';

const Footer = () => {
  return (
    <footer className="section-shell footer-shell">
      <div className="footer-card">
        <p className="kannada-display">{weddingData.footerNote}</p>
        <h3>
          {weddingData.brideName} &amp; {weddingData.groomName}
        </h3>
        <p>16 November 2026</p>
        <small>{weddingData.sourceNote}</small>
      </div>
    </footer>
  );
};

export default Footer;
