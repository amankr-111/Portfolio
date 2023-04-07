import React from 'react'
import human from './human.png'

import"./component.css"

const Home = () => {
  return (
    <div className='home' id='home'>
          <h1>
            Hi there <br></br>
            I am, Aman Kumar
        </h1>
        <div className='rightcompo'> 
      <img src={human} alt="Logo" />
    </div>
    </div>
  )
}

export default Home