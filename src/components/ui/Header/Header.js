import React from 'react'
import MenuItems from './MenuItems'
import './Header.css'
import Hero from './Hero'
import img from '../../../assets/images/principal.jpg'

const Header = () => {
    const menus = ['Inicio','Nosotros', 'Tienda', 'Blog','Galeria', 'Contactos' ]
    
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <h1>Tienda <span>Muebles</span></h1>
      </div>
        <hr/>
      <nav className='navbar-container'>
        <MenuItems items={ menus } />
      </nav>
        <Hero img={ img } type='image' alt='banner'/>
    </div>
  )
}

export default Header