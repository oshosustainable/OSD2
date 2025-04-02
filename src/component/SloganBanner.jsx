import React, { useState, useEffect } from "react";
import "./sloganBanner.css";

const slogans = [
  "Your Vision, Our Expertise, A Sustainable Future.",
  "Sustainability in Every Structure, Excellence in Every Design.",
  "Transforming Dreams into Sustainable Realities."
];

const SloganBanner = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % slogans.length);
        setFade(true); // Start fade-in
      }, 1000); // Change text after fade-out completes
    }, 5000); // Total cycle time (4s display + 1s fade)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slogan-banner">
      <h4 className={`slogan-text ${fade ? "fade-in" : "fade-out"}`}>
        {slogans[index]}
      </h4>
    </div>
  );
};

export default SloganBanner;
