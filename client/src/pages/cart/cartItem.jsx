import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const {id,name,price,productImage,category} = props.data;
    const { cartItems,addToCart,removeFromCart,updateCartItemAmount } = useContext(ShopContext);

  return (
    <div className='cartItem'>
        <img src={productImage}/>
        
        <div className='detail'>
            <p>
                <b> {name} </b>
            </p>
            <p>Price : <b>{price /100} ฿</b></p>
            <p>Category: <b>{category} </b></p>
            <div className='countHandler'>
            <button onClick={() => removeFromCart(id)}> - </button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemAmount(Number(e.target.value),id,category)} />
            <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  );
};
