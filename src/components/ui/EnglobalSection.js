import React from 'react'
import ProductCategory from './ProductCategory/ProductCategory'
import AboutUs from './AboutUs/AboutUs'
import OurProducts from './OurProducts/OurProducts'
import './EnglobalSection.css'

const EnglobalSection = () => {
  return (
    <div className='englobal-section'>
        <ProductCategory />
        <AboutUs />
        <OurProducts />
    </div>
  )
}

export default EnglobalSection