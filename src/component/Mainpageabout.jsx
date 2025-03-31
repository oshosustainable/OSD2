import React from 'react'
import './mainpageabout.css'

import ceo from './images/ceo.jpg'

const Mainpageabout = () => {
  return (
    <>
      <div className="about-main">
      <h1>About Us</h1>
      <h4>OSHO Sustainable <span>Designers and Developers</span></h4>
      <p>
      Osho Sustainable Designers and Developers Pvt. Ltd. (OSD2), a premier engineering firm based in the vibrant city of Kathmandu, Nepal. At OSD2, we specialize in architectural design, construction, and interior design, offering end-to-end solutions that combine innovation, sustainability, and functionality. With a proven track record of designing over 1,000 buildings, constructing more than 100 buildings, and completing interior designs for over 100 projects, we are committed to creating spaces that inspire, endure, and make a positive impact.
      </p>
      </div>
      <hr />
      <div className="message">
          <div className="message-content">
              <h2>Message from our Director</h2>
              <h3>-Ar. Suresh Paudyal</h3>
              <blockquote>
                  At Osho Sustainable, we believe in creating a better world through thoughtful design and innovative construction practices. 
                  As a leading company in sustainable architecture and development, we are committed to transforming the way buildings are conceived, 
                  designed, and constructed.<br/><br/>
                  We're dedicated to creating a better world through innovative and sustainable design. 
                  Our team of architects, engineers, and builders focuses on eco-friendly materials, energy efficiency, 
                  and construction practices that minimize environmental impact. 
                  We work on projects of all sizes, from residential homes to commercial buildings, with a commitment to quality and customer satisfaction.
              </blockquote>
          </div>
          <img src={ceo} alt="CEO" className="ceo"/>
      </div>

      <hr />


      <section id="expertise-section">
      <div className="expertise-container">
        <h2 className="expertise-title">Our Expertise and Services</h2>
        <p className="expertise-description">
          At OSD2, we offer a comprehensive range of services tailored to meet the diverse needs of our clients:
        </p>
        <div className="expertise-grid">
          <div className="expertise-item">
            <h4>Design and Build</h4>
            <p>From concept to completion, we provide seamless design and construction services, ensuring every project is delivered on time, within budget, and to the highest standards of quality.</p>
          </div>
          <div className="expertise-item">
            <h4>Design and Supervision</h4>
            <p>We offer expert design services coupled with professional supervision to ensure your project is executed precisely as envisioned.</p>
          </div>
          <div className="expertise-item">
            <h4>Interior Design and Build</h4>
            <p>Our interior design and build services create functional, stylish, and personalized spaces that reflect your unique taste and lifestyle.</p>
          </div>
          <div className="expertise-item">
            <h4>Interior Design and Supervision</h4>
            <p>We provide end-to-end interior design solutions with meticulous supervision to bring your dream interiors to life.</p>
          </div>
          <div className="expertise-item">
            <h4>Green, Energy-Efficient, and Sustainable Design</h4>
            <p>Sustainability is at the core of our philosophy. We integrate eco-friendly materials, energy-efficient systems, and green building practices to create spaces that are kind to the planet.</p>
          </div>
          <div className="expertise-item">
            <h4>Vastu Sastra</h4>
            <p>Our designs incorporate the ancient principles of Vastu Sastra to create harmonious and balanced living and working environments.</p>
          </div>
          <div className="expertise-item">
            <h4>Property Valuation</h4>
            <p>We offer professional property valuation services to help you make informed decisions about your real estate investments.</p>
          </div>
          <div className="expertise-item">
            <h4>Topographical Survey</h4>
            <p>Our team conducts detailed topographical surveys to provide accurate data for planning and design, ensuring your project is built on a solid foundation.</p>
          </div>
        </div>
      </div>
    </section>

    </>
  )
} 

export default Mainpageabout