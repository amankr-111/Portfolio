import React from 'react'
import "./footer.css"
import logo from '../../Images/portfolio.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <div className='cont'>
        <div className='fst'>
          <img src={logo} height={75}/>
          <p>Aman Kumar</p>
          <span style={{color:'gray'}}>Software Engineer</span>
        </div>
        <div className='snd' style={{margin:"30px 10px"}}>
            <p style={{color:"gray"}}>Email: amakr0741@gmail.com
            <br/>
            © 2023 Aman Kumar. All rights reserved.
            </p>
        </div>
        <div className='trd' style={{fontSize:"2rem"}}>
 <a href='https://www.linkedin.com/in/-aman-kumar/' target='_blank'><FaLinkedin  className='link'/> </a>
 <a href='https://github.com/amankr-111' target='_blank'> <FaGithub   className='link'/> </a>
 <a href='https://www.instagram.com/amankr____007/?igshid=NGExMmI2YTkyZg%3D%3D' target='_blank'> <FaInstagram  className='link'/> </a>
</div>

      </div>
    </>
  )
}

export default Footer