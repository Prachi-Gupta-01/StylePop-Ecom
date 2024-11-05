// src/pages/CartPage.js
import React from 'react';
import Cart from '../components/Cart'; 
import './CartPage.css'; 
const CartPage = ({ cart }) => {
  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <Cart cart={cart} />
    </div>
  );
};

export default CartPage;
