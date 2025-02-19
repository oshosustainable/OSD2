import React, { useState } from 'react';
import './lightbox.css';

import galary1 from './images/galary1.jpg';
import galary2 from './images/galary2.jpg';
import galary3 from './images/galary3.jpg';
import galary4 from './images/galary4.jpg';
import galary5 from './images/galary5.jpg';


const Lightbox = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  function openModal() {
    document.getElementById('myModal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    const slides = document.getElementsByClassName('mySlides');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[n].style.display = 'block';
  }
  
  return (
    <>
      <div className='lightmain'>
        <h2 style={{ textAlign: 'center', marginTop: '10px',marginBottom: '40px', fontSize: '50px' }}>GALLERY</h2>
        <div className="rowlight">
          <div className="column">
            <img
              src={galary1}
              style={{ width: '100%' }}
              onClick={() => {
                openModal();
                currentSlide(0);
              }}
              className="hover-shadow cursor"
              alt="Image 1"
            />
          </div>
          <div className="column">
            <img
              src={galary2}
              style={{ width: '100%' }}
              onClick={() => {
                openModal();
                currentSlide(1);
              }}
              className="hover-shadow cursor"
              alt="Image 2"
            />
          </div>
          <div className="column">
            <img
              src={galary3}
              style={{ width: '100%' }}
              onClick={() => {
                openModal();
                currentSlide(2);
              }}
              className="hover-shadow cursor"
              alt="Image 3"
            />
          </div>
          <div className="column">
            <img
              src={galary4}
              style={{ width: '100%' }}
              onClick={() => {
                openModal();
                currentSlide(3);
              }}
              className="hover-shadow cursor"
              alt="Image 4"
            />
          </div>
          <div className="column">
            <img
              src={galary5}
              style={{ width: '100%' }}
              onClick={() => {
                openModal();
                currentSlide(4);
              }}
              className="hover-shadow cursor"
              alt="Image 5"
            />
          </div>
        </div>


        <div id="myModal" className="modal">
          <span className="close cursor" onClick={closeModal}>
            X
          </span>
          
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className={`mySlides ${slideIndex === i ? 'show' : ''}`}
            >
              <div className="numbertext">
                Photo Gallery - OS2D
              </div>
              <img 
                src={galary1}
                style={{ width: '100%' }}
                alt={`Image ${i + 1}`}
              />
              <img 
                src={galary2}
                style={{ width: '100%' }}
                alt={`Image ${i + 2}`}
              />
              <img 
                src={galary3}
                style={{ width: '100%' }}
                alt={`Image ${i + 3}`}
              />
              <img 
                src={galary4}
                style={{ width: '100%' }}
                alt={`Image ${i + 4}`}
              />
              <img 
                src={galary5}
                style={{ width: '100%' }}
                alt={`Image ${i + 5}`}
              />
            </div>
          ))}
          
          
        </div>
        <div style={{color:"white"}}>
      <h4 style={{textAlign:"center",padding:"20px"}}>"OSHO sustainable Designers and Developers Pvt Ltd.. Photo Gallery"</h4>
    </div>
      </div>
      
    </>
  );
};

export default Lightbox;