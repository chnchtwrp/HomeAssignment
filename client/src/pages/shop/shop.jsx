import React from 'react'
import {PRODUCTS} from '../../product'
import { Products } from './products';
import "./shop.css"

const shop = () => {
    // console.log(PRODUCTS);
  return (
    <div className='container'>
      <div className='shop'>
        <div className='shopTitle'>
          <h1> Shop </h1>
        </div>

        <div className='products'>
          {PRODUCTS.map((prd,k) => (
            <Products data={prd}/>
          ))}
        </div>
        <br/>
      </div>
    </div>
  )
}

export default shop
