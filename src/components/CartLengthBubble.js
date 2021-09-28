import React from 'react';
import { connect } from 'react-redux';
import './CartLengthBubble.css';

export function Bubble(props) {
  return (
    <>
      {props.productDetails.cartItems.length > 0 ? (
        <div className="bubble">
          {props.productDetails.cartItems.length > 3 ? (
            <small>3+</small>
          ) : (
            <div>{props.productDetails.cartItems.length}</div>
          )}
        </div>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    productDetails: state,
  };
};

export const CartBubble = connect(mapStateToProps)(Bubble);
