import React from 'react'
import CardsCategory from './CardsCategory'
import './ProductCategory.css'
import img1 from '../../../assets/images/categoria1.jpg'
import img2 from '../../../assets/images/categoria2.jpg'
import img3 from '../../../assets/images/categoria3.jpg'

const ProductCategory = () => {
  return (
    <div className='products-container'>
      <h2>Categorias de Productos</h2>
      <div className='products-card-container'>
          <CardsCategory img={ img1 } title='Oficina' alt='Oficina' />
          <CardsCategory img={ img2 } title='Hogar' alt='Hogar' />
          <CardsCategory img={ img3 } title='Cocina' alt='Cocina' />
      </div>
    </div>
  )
}

export default ProductCategory