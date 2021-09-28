import React from 'react';
import { Link } from 'react-router-dom';

import './Cart.css';
import { CartPage } from './CartStore';

function CartPageItems() {
  return (
    <div>
      <div className="cartpage">
        <CartPage />
      </div>
    </div>
  );
}

export default CartPageItems;
