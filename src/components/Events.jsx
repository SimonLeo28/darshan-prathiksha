import { weddingData } from '../data/weddingData';

const Events = () => {
  return (
    <section className="section-shell events-section">
      <div className="section-heading">
        <span className="section-tag">Ceremony Schedule</span>
        <h2>Wedding celebrations</h2>
      </div>

      <div className="events-timeline">
        {weddingData.eventList.map((event, index) => (
          <article className="event-card" key={event.name + index}>
            <div className="event-card__badge">{index + 1}</div>
            <div className="event-card__content">
              <h3>{event.name}</h3>
              <p className="event-card__date">{event.date}</p>
              <p className="event-card__day">{event.day}</p>
              <p className="event-card__time">{event.time}</p>
              <p className="event-card__venue">{event.venue}</p>
              <small>{event.note}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Events;
