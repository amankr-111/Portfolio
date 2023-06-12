import React, { useState, useEffect } from 'react';
import { FaBars, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with ID '${sectionId}' not found in DOM.`);
    }
  };

 

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo"><span style={{color:"Red"}}>P</span>ortfolio.</h1>
        
        <ul className="navbar-list">
          <li className="navbar-item" onClick={() => scrollToSection('home')}>
            Home
          </li>
          <li className="navbar-item" onClick={() => scrollToSection('about')}>
            About
          </li>
          <li className="navbar-item" onClick={() => scrollToSection('projects')}>
            Projects
          </li>
          <li className="navbar-item" onClick={() => scrollToSection('contact')}>
            Contact
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
