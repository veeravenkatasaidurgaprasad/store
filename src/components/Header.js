import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderCartBtn } from './HeaderCartButton';
import { connect } from 'react-redux';

const Header = (props) => {
  const img =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const img2 =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <div className="NavBar">
      <ul>
        <li>
          <Link className="pageLogo" exact to="/">
            <img src={img} alt="logo" className="image" />

            <div className="tagLine">
              <em>
                Explore <span className="tagLinePlus">Plus</span>
                <img className="tagLineImage" src={img2} alt="taglinelogo" />
              </em>
            </div>
          </Link>
        </li>

        <li>
          <HeaderCartBtn />
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productDetails: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateQuantity: (quantity, productId) =>
      dispatch({ type: 'UPDATEQUANTTY', quantity, productId }),
  };
};

export const HeaderCart = connect(mapStateToProps, mapDispatchToProps)(Header);
