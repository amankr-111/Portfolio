import React from 'react';
import './card1.css';
import { FaGithub } from 'react-icons/fa';

const Card1 = ({data}) => {
  return (
    <>
      <div className='card11'>
        <img
          className='img'
          src={data.img}
        />
        <h3>{data.cardHead}</h3>
        <p>{data.dec}</p>
        <a href={data.gitLink} target="_blank" className='logo' >
          <FaGithub size={40} />
        </a>
      </div>
    </>
  );
};

export default Card1;
