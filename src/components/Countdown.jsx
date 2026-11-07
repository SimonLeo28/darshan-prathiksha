import { useEffect, useState } from 'react';
import { weddingData } from '../data/weddingData';

const calculateTimeLeft = (targetDate) => {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isComplete: false,
  };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(weddingData.weddingDate));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft(weddingData.weddingDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  if (timeLeft.isComplete) {
    return (
      <section className="section-shell countdown-section">
        <div className="countdown-card countdown-card--complete">
          <p className="section-tag">Our joy is complete</p>
          <h2>With love and blessings, we begin this beautiful new chapter.</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="section-shell countdown-section" id="countdown">
      <div className="section-heading center">
        <span className="section-tag">Countdown</span>
        <h2>Counting Down to Forever</h2>
      </div>

      <div className="countdown-grid" aria-live="polite">
        <div className="countdown-item">
          <span>{String(timeLeft.days).padStart(2, '0')}</span>
          <label>Days</label>
        </div>
        <div className="countdown-item">
          <span>{String(timeLeft.hours).padStart(2, '0')}</span>
          <label>Hours</label>
        </div>
        <div className="countdown-item">
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <label>Minutes</label>
        </div>
        <div className="countdown-item">
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          <label>Seconds</label>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
