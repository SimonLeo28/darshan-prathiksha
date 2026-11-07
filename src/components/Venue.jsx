import { MapPin, CalendarClock } from 'lucide-react';
import { weddingData } from '../data/weddingData';

const Venue = () => {
  const addressLines = weddingData.venueAddress.split('\n');

  return (
    <section className="section-shell venue-section" id="venue">
      <div className="venue-card">
        <div className="venue-card__text">
          <span className="section-tag venue-section__tag">Venue</span>
          <h2>{weddingData.venueName}</h2>
          <p>
            {addressLines.map((line, index) => (
              <span key={line + index}>
                {line}
                {index < addressLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>

          <div className="venue-meta">
            <div>
              <CalendarClock size={18} />
              <span>14 November 2026</span>
            </div>
            <div>
              <MapPin size={18} />
              <span>Mehendi &amp; Sangeet Celebrations</span>
            </div>
          </div>

          <a className="map-button" href={weddingData.venueMapsUrl} target="_blank" rel="noreferrer">
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Venue;
