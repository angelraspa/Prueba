import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import './CartWidget.css'

const CartWidget = () => {
    const {totalCuantityCart} = useContext(CartContext)
  return (
    <div className='cartWidget'>
      <img src="https://i.ibb.co/8mkwxV1/Carrito.png" height="50" width="50" /> 
       <span className='counter'>{totalCuantityCart}</span>
    </div>
  )
}

export default CartWidget