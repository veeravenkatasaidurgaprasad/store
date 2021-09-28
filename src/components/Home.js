import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import './ProductItem.css';
import './Home.css';
import NewOffer from './New';

function homePage(props) {
  return (
    <div>
      <div className="wel">
        <div className="welcomeText ">
          <small>The Best Online Store </small>
          <p className="upscBooks">for UPSC Books </p>{' '}
        </div>
        <div className="whatsapp">
          <a href="https://wa.me/919553257157" target="_blank">
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png"
              alt="help"
              className="helpImg"
            />
          </a>{' '}
          <a className="help" href="https://wa.me/919553257157" target="_blank">
            {' '}
            <p style={{ fontSize: '12px', marginTop: '-3px' }}>Help</p>{' '}
          </a>{' '}
        </div>
        <div>
          {' '}
          <p>
            Dussehra offer 50% off on all Books
            <NewOffer />
          </p>
        </div>
      </div>
      <div className="products">
        {props.productDetails.products.map((product, key) => (
          <ProductItem
            className="products"
            productDetails={product}
            key={key}
            cart={5}
            addtoCart={(details) => props.addtoCart(details)}
            addToProductDetails={(details) =>
              props.addToProductDetails(details)
            }
          />
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
const mapDispatchToProps = (dispatch) => {
  return {
    addtoCart: (details) => dispatch({ type: 'ADDTOCART', details }),
    addToProductDetails: (details) =>
      dispatch({ type: 'ProductDetailsPage', details }),
    filterProductPrice: () => dispatch({ type: 'filterPrice' }),
    allProducts: () => dispatch({ type: 'allProducts' }),
  };
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(homePage);
