import React from 'react'
import './CardsCategory.css'
const CardsCategory = ({ img, title, alt }) => {
  return (
    <div>
      <div className='img-container'>
        {
          <img src={ img } alt={ alt } />
        }
      </div>
      <div className='title-container'>
        <p>{ title }</p>
      </div>
    </div>
  )
}

export default CardsCategory