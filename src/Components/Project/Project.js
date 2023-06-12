import React from 'react';
import Card1 from './Card1';
import './project.css';
import data from '../Data';
import Card2 from './Card2';
const Project = () => {
  return (
    <section id='projects'>
      <div className='project'>
        <h1 style={{fontSize:'2.5rem'}}><span style={{color:'red', fontSize:'3rem'}}>P</span>rojects</h1>
         <div className='cardData'>
          {data.map((value)=>{
            return  <Card1 data={value}/>
          })}
          <Card2/>
         </div>
      </div>
    </section>
  );
};

export default Project;
