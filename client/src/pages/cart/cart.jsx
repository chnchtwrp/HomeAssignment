import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../product'
import { CartItem } from './cartItem';
import { useNavigate } from 'react-router-dom';
import "./cart.css";


const Cart = () => {
  const { cartItems,getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()


  return (
      <div className='cart'>
          <div className='cartItems'>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !==0 ) {
              return <CartItem data={product}/>
            }
          })}
        </div>
        {totalAmount >0 ? 
        <div className='checkout'>
          <b><h3> Subtotal: ฿{totalAmount /100} </h3></b>
          <button onClick={() => navigate('/')}> Continue Shopping </button>
          <button onClick={() => navigate('/cart/checkout')}> Checkout </button>
        </div> 
      : <div className='emptyCart'>
          <h1>Your Cart is Empty</h1>
        </div>
      }
      
      </div>
  )
}

export default Cart
