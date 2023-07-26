import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart,Bag } from "phosphor-react";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="navbar1">
      <div className="links">
        <Link to="/">
          {/* <Bag size={32}/> */}
          Shop
        </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
    
  )
}

export default navbar
