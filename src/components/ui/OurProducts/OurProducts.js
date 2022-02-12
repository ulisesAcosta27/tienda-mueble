import React from 'react'
import CardSellers from './CardSellers'
import sellerImg1 from '../../../assets/images/galeria_09.jpg' 
import sellerImg2 from '../../../assets/images/categoria2.jpg' 
import sellerImg3 from '../../../assets/images/producto3.jpg' 
import sellerImg4 from '../../../assets/images/producto4.jpg' 
import sellerImg5 from '../../../assets/images/producto5.jpg' 
const itemsSeller = {
    name: 'Producto 1',
    paragraph: `Lorem ipsum dolor sit ament consctetur adisicing alit. Amini, saepe neque.
    Adepisci deleniti dlorem nam quod eum distinctio valuptas cum est delectus`,
    cash: '$10.000.000,00'
}

const OurProducts = () => {
  return (
    <div>
        <CardSellers itemsSeller={ itemsSeller } img={ sellerImg1 } />
        {/* <CardSellers itemsSeller={ itemsSeller } img={ sellerImg2 } />
        <CardSellers itemsSeller={ itemsSeller } img={ sellerImg3 } />
        <CardSellers itemsSeller={ itemsSeller } img={ sellerImg4 } />
        <CardSellers itemsSeller={ itemsSeller } img={ sellerImg5 } /> */}
    </div>
  )
}

export default OurProducts