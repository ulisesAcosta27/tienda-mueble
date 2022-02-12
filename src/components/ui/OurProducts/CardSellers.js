import React from 'react'
import './CardSellers.css'
const CardSellers = ({ itemsSeller, img, itemStyle }) => {
  return (
    <div className={ itemStyle }>
      <div className='seller-img'>
        <img src={img} alt={itemsSeller.name} />
      </div>
      <div className='seller-text'>
        <h3>{itemsSeller.name}</h3>
        <p>{itemsSeller.paragraph}</p>
        <p><span>{itemsSeller.cash}</span></p>
        <button>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default CardSellers