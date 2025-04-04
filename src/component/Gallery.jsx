import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './gallery.css';

// Import images
import galary1 from './images/galary1.jpg';
import galary2 from './images/galary2.jpg';
import galary3 from './images/galary3.jpg';
import galary4 from './images/galary4.jpg';
import galary5 from './images/galary5.jpg';
import galary6 from './images/galary6.jpg';
import galary7 from './images/galary7.jpg';
import galary8 from './images/galary8.jpg';
import galary9 from './images/galary9.jpg';
import galary10 from './images/galary10.jpg';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Original images array
  const originalImages = [
    { src: galary1, alt: "Gallery image 1" },
    { src: galary2, alt: "Gallery image 2" },
    { src: galary3, alt: "Gallery image 3" },
    { src: galary4, alt: "Gallery image 4" },
    { src: galary5, alt: "Gallery image 5" },
    { src: galary6, alt: "Gallery image 6" },
    { src: galary7, alt: "Gallery image 7" },
    { src: galary8, alt: "Gallery image 8" },
    { src: galary9, alt: "Gallery image 9" },
    { src: galary10, alt: "Gallery image 10" },
  ];

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(prev => (prev - 1 + originalImages.length) % originalImages.length);
    setTimeout(() => setIsAnimating(false), 500); // Match transition time in CSS
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(prev => (prev + 1) % originalImages.length);
    setTimeout(() => setIsAnimating(false), 500); // Match transition time in CSS
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500); // Match transition time in CSS
  };

  // Function to get visible images
  const getVisibleImages = () => {
    const visibleImages = [];
    
    // For each visible position (-2, -1, 0, 1, 2)
    for (let i = -2; i <= 2; i++) {
      // Calculate the real index in the original array
      let realIndex = (activeIndex + i + originalImages.length) % originalImages.length;
      
      visibleImages.push({
        ...originalImages[realIndex],
        position: i,
        realIndex
      });
    }
    
    return visibleImages;
  };

  return (
    <div className="gal3d__main-container">
      <h2 style={{ textAlign: 'center', marginTop: '20px',marginBottom: '0px', fontSize: '45px', color: 'white' }}>GALLERY</h2>
      <div className="gal3d__perspective-wrapper">
        {getVisibleImages().map((image) => (
          <div
            key={`${image.realIndex}-${image.position}`}
            className={`gal3d__image-card ${image.position === 0 ? 'gal3d__image-card--active' : ''}`}
            data-gal3d-position={image.position}
            onClick={() => goToSlide(image.realIndex)}
          >
            <img src={image.src} alt={image.alt} className="gal3d__card-image" />
          </div>
        ))}
      </div>
      
      <div className="gal3d__navigation-panel">
        <button className="gal3d__arrow-prev" onClick={goToPrevious} disabled={isAnimating}>←</button>
        <div className="gal3d__dot-indicators">
          {originalImages.map((_, index) => (
            <button
              key={index}
              className={`gal3d__indicator-dot ${index === activeIndex ? 'gal3d__indicator-dot--active' : ''}`}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
            />
          ))}
        </div>
        <button className="gal3d__arrow-next" onClick={goToNext} disabled={isAnimating}>→</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <h4 style={{ textAlign: "center", padding: "20px", color: "white", }}>
            "OSHO Sustainable Designers and Developers Pvt Ltd. Photo Gallery." <br /><span style={{  fontSize:'20px', cursor: 'pointer',}}>Click to see more →</span>
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;