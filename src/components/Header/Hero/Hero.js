import React from 'react'
import './Hero.css'
import Polygon from './Polygon.png'
import { FaGithubSquare,FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <div className='hero'> 
      <img src={Polygon} alt="bg-polygon" className='hero-bg'  />
      <div className='hero-content'>
          <h1>HELLO I'M</h1>
          <p className='name'>LAKSHMI NARASIMHA</p>
          <p className='tagline'>SELF TAUGHT PROGRAMMER</p>
          <div className='social-icons'>
            <a href="https://www.linkedin.com/in/lakshmi-narasimha-saganaboina-a1ab56240/"><FaLinkedin/></a>
            <a href="https://github.com/S-Lakshminarasimha"><FaGithubSquare /></a>
          </div>
      </div>
    </div>
  )
}

export default Hero