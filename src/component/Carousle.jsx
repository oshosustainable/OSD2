import React, { useEffect } from "react";
import "./carousle.css";

import main1 from "./images/main1.jpg";
import main2 from "./images/main2.jpg";
import main3 from "./images/main3.jpg";
import main4 from "./images/main4.jpg";
import main5 from "./images/main5.jpg";
import main6 from "./images/main6.jpg";
import main7 from "./images/main7.jpg";

const Carousle = () => {
  useEffect(() => {
    const carousel = document.querySelector("#carouselExampleAutoplaying");

    if (carousel) {
      // Initialize Bootstrap carousel with a fixed interval
      const bsCarousel = new window.bootstrap.Carousel(carousel, {
        interval: 3800, // Ensure the interval is always 3800ms
        ride: "carousel",
        pause: false, // Prevent pausing on hover
      });

      // Reapply cycle on hover to ensure consistency
      carousel.addEventListener("mouseenter", () => {
        bsCarousel.cycle();
      });
    }
  }, []);

  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-pause="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={main1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block opacity-75">
              <span className="bg-light-subtle p-2 rounded-3">
                Chitwan District Court
              </span>
            </div>
          </div>
          <div className="carousel-item">
            <img src={main3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block opacity-75">
              <span className="bg-light-subtle p-2 rounded-3">
                Itahari Road Project
              </span>
            </div>
          </div>
          <div className="carousel-item">
            <img src={main2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block opacity-75">
              <span className="bg-light-subtle p-2 rounded-3">
                Nandani Dairy and Restaurant
              </span>
            </div>
          </div>
          <div className="carousel-item">
            <img src={main4} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block opacity-75">
              <span className="bg-light-subtle p-2 rounded-3">
                Education Development Directorate
              </span>
            </div>
          </div>
          <div className="carousel-item">
            <img src={main5} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block opacity-75">
              <span className="bg-light-subtle p-2 rounded-3">
                Naxal Appartment
              </span>
            </div>
          </div>
          <div className="carousel-item">
            <img src={main6} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block opacity-75">
              <span className="bg-light-subtle p-2 rounded-3">
                Dipayal High Court
              </span>
            </div>
          </div>
          <div className="carousel-item">
            <img src={main7} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block opacity-75">
              <span className="bg-light-subtle p-2 rounded-3">
                Department of Road Butwal
              </span>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousle;
