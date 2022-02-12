import React from 'react'
import './AboutUs.css'
import img4 from '../../../assets/images/nosotros.jpg'

const AboutUs = () => {
  return (
    <div className='about-container'>
        <div className='bg-image'>
            <img src={ img4 } alt='AboutUs' />
        </div>
        <div className='bg-text'>
            <h2>Sobre Nosotros</h2>
            <p>
              Lorem ipsum dolor sit ament consctetur adisicing alit. Amini, saepe neque.
              Adepisci deleniti dlorem nam quod eum distinctio valuptas cum est delectus,
              at placeat quam consectetur eligendi culpa, cumque labore
            </p>
        </div>
    </div>
  )
}

export default AboutUs