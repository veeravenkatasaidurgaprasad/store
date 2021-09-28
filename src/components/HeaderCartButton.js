import { Link } from 'react-router-dom';
import './HeaderCartButton.css';
import React from 'react';
import { connect } from 'react-redux';
import { CartBubble } from './CartLengthBubble';

const HeaderCartButton = (props) => {
  return (
    <span className="cart">
      <Link exact className="nav" to="/cart">
        <i className="fas fa-shopping-cart"></i>
        <span className="textChange">Cart</span>
        <CartBubble />
      </Link>
    </span>
  );
};
const mapStateToProps = (state) => {
  return {
    productDetails: state,
  };
};
export const HeaderCartBtn = connect(mapStateToProps)(HeaderCartButton);
