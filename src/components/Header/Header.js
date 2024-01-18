import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'

function Header() {
  return (
    <div className='Header'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Header