import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
// import "../pages/Homepage"
const Navbar = () => {


  const handleCloseNav = () => {
    document.getElementById('close-btn').checked = true; // Close the navbar by checking the close-btn radio button
  };

  return (
    <>
    <nav>
    <div className="wrapper">
        <div className="logo"><Link to="/home">OSD2</Link></div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
        <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times" />X</label>
        <li><Link to="/home" onClick={handleCloseNav}>Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/career">Career</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
 

        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn"><i className="bi bi-list" />=</label>
   
        
   
    </div>
    </nav>

    </>
  )
}

export default Navbar