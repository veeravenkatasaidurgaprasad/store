import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import './ProductItem.css';
import './Home.css';
import NewOffer from './New';

function homePage(props) {
  return (
    <React.StrictMode>
      <div onClick={() => props.like()}>
        <div className="wel">
          <div className="welcomeText ">
            <small>The Best Online Store </small>
            <p className="upscBooks">for UPSC Books </p>{' '}
          </div>
          <a
            className="whatsapp"
            href="https://wa.me/919553257157"
            target="_blank"
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png"
              alt="help"
              className="helpImg"
            />
            <div className="help">Help</div>
          </a>{' '}
          <div>
            <i class="fas fa-heart likeBlue"></i>
            <div className="likeText"></div>
          </div>
          <div>
            {' '}
            <p>
              50% off on all Books
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
    </React.StrictMode>
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
    like: () => dispatch({ type: 'like' }),
    hover: () => dispatch({ type: 'hover' }),
  };
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(homePage);
