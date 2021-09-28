import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Cart.css';

export function Cart(props) {
  const item = [...props.productDetails.cartItems];
  const price = item.reduce((acc, obj) => acc + obj.price * obj.quantity, 0);

  return (
    <>
      <div className="cartContainer">
        <div>
          <div className="myCart">My Cart</div>
          <div className="priceContainer">
            {props.productDetails.cartItems.length > 0 ? (
              <div>
                {' '}
                <div className="payNowContainer">
                  <div className="price cartPrice inline">
                    Total Price: {price}
                  </div>{' '}
                  <button className="payNow cartPrice inline">
                    <a href="https://imjo.in/3zuF9b" target="_blank">
                      Pay Now
                    </a>
                  </button>
                </div>
                <div>
                  <Link to="/">
                    <button className="goHome cartPrice inline">
                      Shop More
                    </button>
                  </Link>
                </div>
                <div>
                  <button
                    className="cartPrice inline"
                    onClick={() => props.removeProduct()}
                  >
                    Remove Products
                  </button>
                </div>
              </div>
            ) : null}
            {props.productDetails.cartItems.length === 0 ? (
              <div className="emptyCartContainer">
                <img
                  className="cartProductImage"
                  src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                />
                <Link to="/" className="routerLink">
                  <button className="emptyCart">
                    Your <i class="fas fa-shopping-cart"></i>cart is empty!
                  </button>{' '}
                </Link>
                <small className="cartTagline">Add items to it now</small>
                <Link to="/" className="routerLink">
                  <button className="shopNow">Shop Now</button>{' '}
                </Link>
              </div>
            ) : null}
          </div>
        </div>

        <div>
          <div className="cartpage">
            {props.productDetails.cartItems.map((productDetails, key) => (
              <div className="cartContainer" key={key}>
                <div>
                  <div className="homeImageContainer">
                    <Link
                      onClick={() => addToProductDetails(productDetails)}
                      to="/productdatails"
                    >
                      {' '}
                      <img
                        className="Product-image"
                        src={productDetails.image}
                        alt="productimage"
                      />{' '}
                    </Link>
                  </div>
                  <h2 className="Product-title">{productDetails.title}</h2>
                  <div className="Product-catagory">
                    {productDetails.catagory}{' '}
                  </div>
                  <div className="homePriceContainer">
                    <div className="Product-price">
                      <i className="fas fa-rupee-sign Product-price"></i>
                      {productDetails.price}{' '}
                    </div>
                    <div className="Product-price offer">
                      <i className=" Product-price fas fa-rupee-sign"></i>
                      {productDetails.price * 2}
                    </div>
                  </div>
                  Product Quantity:
                  <select
                    onChange={(e) => props.updateQuantity(e.target.value)}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    productDetails: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateQuantity: (quantity, id) =>
      dispatch({ type: 'UPDATEQUANTTY', quantity, id }),
    removeProduct: () => dispatch({ type: 'remove' }),
    alert: () => dispatch({ type: 'alert' }),
  };
};
export const CartPage = connect(mapStateToProps, mapDispatchToProps)(Cart);
