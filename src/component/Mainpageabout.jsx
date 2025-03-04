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
          Crafting visionary designs, our design and development firm blends creativity and precision to shape extraordinary spaces. 
          With a passion for innovation, we transform concepts into functional and awe-inspiring environments. 
          We are committed to creating a sustainable, beautiful, and harmonious world through architecture and design.
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

    </>
  )
} 

export default Mainpageabout