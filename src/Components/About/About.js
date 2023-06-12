import React, { useState } from 'react';
import './about.css'
import img2 from '../../Images/aboutimg.png'
const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section   id='about'>
        <h1 style={{marginLeft:'40%', fontSize:'2.5rem'}}><span style={{color:'red', fontSize:'3rem'}}>A</span>bout Me</h1>
        <div className='about1-main'>
            <div >
        <button
          className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => handleTabChange('about')}
        >
          About
        </button>
        <button
          className={`tab-button ${activeTab === 'qualification' ? 'active' : ''}`}
          onClick={() => handleTabChange('qualification')}
        >
          Qualification
        </button>
      </div>

      {activeTab === 'about' ? (
        <div className='aboute'>
          <div className='helopara'>
          <h3 style={{color:'red'}}>Hello 👋🏻</h3>
          <p >
          As a fresher with a strong foundation in the MERN (MongoDB, Express, React, Node.js) stack, I am enthusiastic about pursuing a career in web development.
          <br/> 
          <br/> 
          I have gained hands-on experience in building web applications using modern technologies and best practices. My skills include frontend development with React, creating RESTful APIs with Express and Node.js, and working with NoSQL databases like MongoDB.
          <br/>
          <br/>
           I am dedicated, eager to learn, and passionate about delivering high-quality code. I am excited about contributing my skills and knowledge to create innovative and impactful web solutions.
      </p>
          </div>
          <img className='aboutImg' src={img2} height={400}/>
        </div>
      ) : (
        <div className='datails'>
  <div >
  <h3><span style={{color:"Red"}}>Qualification</span></h3>
  <ul>
    <li>
      BCA <br />
      Techno India
      <span className="year"> - 2022</span>
    </li>
    <li>
      12th <br />
      Crescent Public School
      <span className="year"> - 2019</span>
    </li>
    <li>
      10th <br />
      Kendriya Vidyalaya
      <span className="year"> - 2016</span>
    </li>
  </ul>
    </div>
  
 <div>
 <h3><span style={{color:"Red"}}>Skills</span></h3>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>React Js</li>
    <li>Redox</li>
    <li>Node Js</li>
    <li>MongoDB</li>
    <li>GitHub</li>
  </ul>
  </div>
</div>
      )}
      </div>
    </section>
  );
};

export default About;
