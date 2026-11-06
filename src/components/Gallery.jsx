import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { weddingData } from '../data/weddingData';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const images = weddingData.galleryImages;

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const showPrevious = () =>
    setSelectedIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  const showNext = () =>
    setSelectedIndex((current) => (current === images.length - 1 ? 0 : current + 1));

  return (
    <section className="section-shell gallery-section">
      <div className="section-heading center">
        <span className="section-tag">Invitation Gallery</span>
        <h2>Original invites</h2>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <button
            type="button"
            className="gallery-item"
            key={image.src}
            onClick={() => openLightbox(index)}
            aria-label={`Open ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
            <span>{image.label}</span>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className="lightbox__content" onClick={(event) => event.stopPropagation()}>
            <button className="lightbox__close" onClick={closeLightbox} aria-label="Close gallery">
              <X size={18} />
            </button>
            <button className="lightbox__nav lightbox__nav--prev" onClick={showPrevious} aria-label="Previous image">
              <ChevronLeft size={24} />
            </button>
            <img src={images[selectedIndex].src} alt={images[selectedIndex].alt} />
            <button className="lightbox__nav lightbox__nav--next" onClick={showNext} aria-label="Next image">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
