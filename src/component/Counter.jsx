import React, { useEffect } from 'react';
import './counter.css';
import ReactDOM from 'react-dom';
import CountUp from 'react-countup';

const Counter = () => {
  useEffect(() => {
    const statValues = document.querySelectorAll('.stat-value');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statValueElement = entry.target;
          const endValue = statValueElement.getAttribute('data-end');

          // Create a dynamic React component
          const countupComponent = (
            <>
            <CountUp start={0} end={parseInt(endValue, 10)} duration={4.8} />
            <span>+</span>
            </>
          );

          // Render the React component inside the stat-value element
          ReactDOM.render(countupComponent, statValueElement);
        }
      });
    });

    statValues.forEach(statValue => {
      observer.observe(statValue);
    });

    // Clean up the IntersectionObserver when the component is unmounted
    return () => {
      statValues.forEach(statValue => {
        observer.unobserve(statValue);
      });
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div id="counter-back">
      <div id="stats">
        <h1>Overview</h1>

        <div className="stats-container">
          <div className="stat">
            <div className="stat-value" data-end="100"></div>
            <div className="stat-title">Designs</div>
          </div>

          <div className="stat">
            <div className="stat-value" data-end="10"></div>
            <div className="stat-title">Constructions</div>
          </div>

          <div className="stat">
            <div className="stat-value" data-end="150"></div>
            <div className="stat-title">Interiors</div>
          </div>

          <div className="stat">
            <div className="stat-value" data-end="10"></div>
            <div className="stat-title">Years</div>
          </div>
        </div>

        <h2>"Years of Experience, Solutions with Precision."</h2>
      </div>
    </div>
  );
};

export default Counter;
