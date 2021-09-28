import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import './Cart.css';
import './ProductDetails.css';

export function ProductDetails(props) {
  return (
    <>
      <div className="productPage">
        {props.productDetails.productPage.map((productDetails, key) => (
          <div className="ProductContainer" key={key}>
            <div>
              <div>
                <img
                  className="Product-details-image"
                  src={productDetails.image}
                  alt="productimage"
                />
              </div>
              <div className="descriptionContainer">
                <h2 className="Product-details-title">
                  {productDetails.title}
                </h2>
                <div className="Product-details-price">
                  ₹ {productDetails.price}{' '}
                </div>
                <div className="Product-details-description">
                  {productDetails.description}{' '}
                </div>
                <Link to="/">
                  <button className="productDetailsBack">back</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
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
    addtoCart: (details) => dispatch({ type: 'ADDTOCART', details }),
  };
};
export const ProductDetailsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
