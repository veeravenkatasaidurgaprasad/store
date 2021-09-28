import React from 'react';
import { connect } from 'react-redux';
import ProductDetails from './ProductDetails';

function ProductDetailsPage(props) {
  console.log(props);
  return (
    <div>
      <h2 className="welcomeText">Welcome to UPSC Book Store</h2>

      <div className="products">
        {props.productDetails.products.map((product, key) => (
          <ProductDetails className="products" />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productDetails: state,
  };
};

export const ProductDetails = connect(mapStateToProps)(ProductDetailsPage);
