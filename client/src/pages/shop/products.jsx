import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { Divider, Space, Tag } from 'antd';


export const Products = (props) => {
  const {id,name,price,productImage,category} = props.data;
  const { addToCart,cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div>
    <div className='product'>
      <img src={productImage} />
    </div>
      <div className='detail'>
        <p>
          <h2>{name}</h2>
        </p>
        <h5>฿{price /100}</h5>
        <p>{category}</p>
      </div>
      <button className='addToCartBtn' onClick={() => addToCart(id)}>
         Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
         </button>
    </div>
  )
}

// export default Products;
