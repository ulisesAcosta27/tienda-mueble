import React from 'react'
import './CardFooter.css'

const CardFooter = ({ title, items }) => {
  return (
    <div className='card-container'>
        <h3>{ title }</h3>
        <div className='text-container'>
            {
                items.map(item => (
                    <p key={ item }>{ item }</p>
                ))
            }
        </div>
    </div>
  )
}

export default CardFooter