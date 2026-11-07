import { weddingData } from '../data/weddingData';

const Events = () => {
  return (
    <section className="section-shell events-section" id="events">
      <div className="section-heading center">
        <span className="section-tag">Ceremony Schedule</span>
        <h2>Wedding celebrations</h2>
      </div>

      <div className="events-timeline">
        {weddingData.eventGroups.map((group) => (
          <div className="event-date-group" key={group.label}>
            <h3>{group.label}</h3>

            <div className="event-grid">
              {group.events.map((event, index) => (
                <article className="event-card" key={`${group.label}-${event.name}`}>
                  <div className="event-card__badge">{index + 1}</div>
                  <div className="event-card__content">
                    <h4>{event.name}</h4>
                    <p className="event-card__time">{event.time}</p>
                    {event.venue ? (
                      <p className="event-card__venue">{event.venue.split('\n').map((line, lineIndex) => (
                        <span key={`${event.name}-${lineIndex}`}>
                          {line}
                          {lineIndex < event.venue.split('\n').length - 1 ? <br /> : null}
                        </span>
                      ))}</p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
