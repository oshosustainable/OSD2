import React from "react";
import { motion } from "framer-motion";
import "./whyus.css";

const WhyUs = () => {
  const features = [
    {
      icon: "🔒",
      title: "Sustainable Solutions",
      description: "We prioritize eco-friendly designs and sustainable development practices."
    },
    {
      icon: "🎧",
      title: "Reliable Support",
      description: "Dedicated customer support to guide you at every stage of your project."
    },
    {
      icon: "🌍",
      title: "Eco-Conscious",
      description: "We integrate sustainable practices that minimize environmental impact and promote a healthier planet."
    },
    {
      icon: "⚡",
      title: "Efficient & Fast",
      description: "Our processes ensure quick turnaround times while maintaining high-quality standards."
    },
  ];

  return (
    <section className="why-us">
      <div className="why-container">
        <h2 className="why-us-title">Why Choose OSD2?</h2>
        <div className="features">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`feature ${index % 2 !== 0 ? "reverse" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="icon">{feature.icon}</div>
              <div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
