import React from 'react'
import human from '../Images/human.png'
import { FaBars, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


import"./component.css"

const Home = () => {
  return (
    <div className='home' id='home'>
          <h1>
          <span style={{color:"Red"}}>Hi </span>There <br></br>
          I am,<span style={{color:"Red"}}> Aman</span> Kumar
          <br/>
          <br/>
            <div className='web'>
              <h1><span style={{color:"Red"}}>S</span>oftware Developer</h1>
            </div>
        </h1>
        <div className='rightcompo'> 
      <img className='humanlo' src={human} alt="Logo" />
    </div>
    <div className="social-icons">      
      <a href="https://www.linkedin.com/in/-aman-kumar/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/amankr-111" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.instagram.com/amankr____007/?igshid=NGExMmI2YTkyZg%3D%3D" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
      </div>
    </div>
  )
}

export default Home