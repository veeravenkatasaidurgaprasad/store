import React from 'react';
import './ProductItem.css';
import { Link } from 'react-router-dom';

export default function ProductItem({
  productDetails,
  addtoCart,
  addToProductDetails,
}) {
  const Api =
    'https://veeravenkatasaidurgaprasad.com/wp-content/uploads/2021/09/';

  let imgSrc = `${Api}${productDetails.id}.jpeg`;
  return (
    <div className="Product">
      <div>
        {/* <a
          href="https://imjo.in/3zuF9b"
          target="_blank"
          style={{ color: 'white' }}
        >
          <div
            style={{
              backgroundColor: '#495057',
              color: 'white',
              fontWeight: '500',
            }}
            className="homePriceContainer Product-price"
          >
            Buy Now
          </div>
        </a> */}
        <div className="homeImageContainer">
          <Link
            onClick={() => addToProductDetails(productDetails)}
            to="/productdatails"
          >
            {' '}
            <img
              className="Product-image"
              src={imgSrc}
              alt="productimage"
            />{' '}
          </Link>
        </div>
        <h2 className="Product-title">{productDetails.title}</h2>
        <div className="Product-catagory">{productDetails.catagory} </div>
        <div className="homePriceContainer">
          <div className="Product-price">
            <div className="fas fa-tags" />
            Offer Price :<i className="fas fa-rupee-sign Product-price"></i>
            {productDetails.price}{' '}
          </div>
          <div className="Product-price offer">
            <i className="fas fa-rupee-sign Product-price "></i>
            {productDetails.price * 2}
          </div>
        </div>

        <div className="addToCartContainer">
          <button
            className="addToCart"
            onClick={() => addtoCart(productDetails)}
          >
            <i className="fas fa-shopping-cart"></i>Add to Cart
          </button>
          <Link
            onClick={() => addToProductDetails(productDetails)}
            to="/productdatails"
          >
            <button className="bookDetails">
              <i class="fas fa-info-circle"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
