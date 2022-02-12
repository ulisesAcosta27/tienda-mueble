import React from 'react'
import './Hero.css'

const Hero = ({ img, type, alt }) => {
  return (
    <div className='imagen-container'>
        {
            <img src={ img } type={ type } alt={ alt } />
        }
    </div>
  )
}

export default Hero