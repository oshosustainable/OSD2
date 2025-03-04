import React from 'react'
import './about.css'
import logo from './images/logo.jpg';
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <section className="about-us">
  <div className="about">
    <img src={logo} className="pic" />
    <div className="text">
      <h2>About Us</h2>
      <h4>OSHO Sustainable <span>Designers and Developers</span></h4>
      <p>Crafting visionary designs, our design and development firm blends creativity and precision to shape extraordinary spaces. With a passion for innovation, we transform concepts into functional and awe-inspiring environments. We are committed to creating a sustainable, beautiful, and harmonious world through architecture and design.</p>
      <div className="data">
        <Link to="/about" className="hire">Learn more</Link>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default About