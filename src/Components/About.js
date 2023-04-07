import React, { useEffect, useState } from 'react';
const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about-section');
      const rect = aboutSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100; // Adjust the offset as needed

      // Delay the sliding effect by 1 second
      setTimeout(() => {
        setIsVisible(isVisible);
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about-section" className={`about-section ${isVisible ? 'slide-in' : ''}`}>
      <h2 className='aboutMe'>About Me</h2>
      <p className='aboutPara'>
    
       As a fresher with a strong foundation in the MERN (MongoDB, Express, React, Node.js) stack, I am enthusiastic about pursuing a career in web development. I have gained hands-on experience in building web applications using modern technologies and best practices. My skills include frontend development with React, creating RESTful APIs with Express and Node.js, and working with NoSQL databases like MongoDB. I am dedicated, eager to learn, and passionate about delivering high-quality code. I am excited about contributing my skills and knowledge to create innovative and impactful web solutions.   
      </p>
      <h2 className='aboutMe'>Skills</h2>
      <p className='aboutParaSkill'>
            <ul>
                <li>java Script</li>
                <li>React.Js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node.Js</li>
                <li>Express.Js</li>
                <li>MongoDB</li>
                <li>Bootstrap</li>
                <li>Git, Git Hub</li>
            </ul>
            <ul>
                <li>English</li>
                <li>Hindi</li>
            </ul>
      </p>
    </section>
  );
};

export default About;

