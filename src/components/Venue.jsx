import { MapPin, CalendarClock } from 'lucide-react';
import { weddingData } from '../data/weddingData';

const Venue = () => {
  return (
    <section className="section-shell venue-section">
      <div className="venue-card">
        <div className="venue-card__text">
          <span className="section-tag">Venue</span>
          <h2>{weddingData.venueName}</h2>
          <p>{weddingData.venueAddress}</p>

          <div className="venue-meta">
            <div>
              <CalendarClock size={18} />
              <span>16 November 2026</span>
            </div>
            <div>
              <MapPin size={18} />
              <span>9:00 AM – 10:00 AM</span>
            </div>
          </div>

          <a className="map-button" href={weddingData.venueMapsUrl} target="_blank" rel="noreferrer">
            Open in Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Venue;
