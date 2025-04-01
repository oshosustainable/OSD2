import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./counter.css";

const Stat = ({ end, title }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="stat">
      <div ref={ref} className="stat-value">
        {inView ? <CountUp start={0} end={end} duration={4.8} /> : 0}
        <span>+</span>
      </div>
      <div className="stat-title">{title}</div>
    </div>
  );
};

const Counter = () => {
  const stats = [
    { end: 1000, title: "Designs" },
    { end: 10, title: "Constructions" },
    { end: 150, title: "Interiors" },
    { end: 10, title: "Years" },
  ];

  return (
    <div id="counter-back">
      <div id="stats">
        <h1>Overview</h1>

        <div className="stats-container">
          {stats.map((stat, index) => (
            <Stat key={index} {...stat} />
          ))}
        </div>

        <h2>"Years of Experience, Solutions with Precision."</h2>
      </div>
    </div>
  );
};

export default Counter;
