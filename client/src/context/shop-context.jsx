import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < PRODUCTS.length +1; i++){

    cart[i] = 0;
    
  }
  return cart;
};


export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  // console.log(cartItems);

 
const getTotalCartAmount = () => {
  let totalAmount =0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
      totalAmount += cartItems[item] * itemInfo.price;
    }
  }
  return totalAmount;
}


  const addToCart = (itemId,itemCategory) => {
    setCartItems((prev) => ({...prev, 
      [itemId]: prev[itemId] + 1}));
  };

  // console.log(cartItems)

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
  };

  const updateCartItemAmount = (newAmount,itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount }));
  }

  const contextValue =  {cartItems, 
    addToCart, 
    removeFromCart,
    updateCartItemAmount,
    getTotalCartAmount,
    getDefaultCart,
  };

  // console.log(cartItems);
 
  return (<ShopContext.Provider value={contextValue}>
    {props.children}
    </ShopContext.Provider>)
 
};


