import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
// import "../pages/Homepage"
const Navbar = () => {


  const handleCloseNav = () => {
    document.getElementById('close-btn').checked = true; // Close the navbar by checking the close-btn radio button
  };

  return (
    <>
    <nav>
    <div className="wrapper">
        {/* Updated Logo Structure */}
        <div className="logo">
            <Link to="/home">
              <span className="logo-main">OSD2</span>
              <span className="logo-sub">Osho Sustainable Designers & Developers Pvt. Ltd.</span>
            </Link>
          </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
        <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times" /><IoClose /></label>
        <li><Link to="/home" onClick={handleCloseNav}>Home</Link></li>
        <li><Link to="/about " onClick={handleCloseNav}>About</Link></li>
        <li><Link to="/projects" onClick={handleCloseNav}>Projects</Link></li>
        <li><Link to="/career" onClick={handleCloseNav} >Career</Link></li>
        <li><Link to="/contacts" onClick={handleCloseNav}>Contacts</Link></li>
 

        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn"><i className="bi bi-list" /><FiMenu /></label>
   
        
   
    </div>
    </nav>

    </>
  )
}

export default Navbar