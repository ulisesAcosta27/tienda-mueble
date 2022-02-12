import React from 'react'
import CardFooter from './CardFooter'
import './Footer.css'

const Footer = () => {
  const categorys = ['Concina', 'Oficina', 'Jardin', 'Cochera', 'Dormitorio']
  const aboutUs = ['Nuestra Historia', 'Mision, Vision y Valores', 'Carreras', 'Politicas de Privacidad', 'Terminos del Servicio']
  const suport = ['Preguntas Frecuentes', 'Ayuda en linea', 'Confianza y Seguridad']

  return (
    <div className='footer-container'>
      <CardFooter title='Categorias' items={categorys} />
      <CardFooter title='Sobre Nosotros' items={aboutUs} />
      <CardFooter title='Soporte' items={suport}/>
    </div>
  )
}

export default Footer