import React from 'react';
import { Provider } from 'react-redux';
import { Home } from './Home';
import Cart2 from './Cart';
import { store } from './store';
import './ProductItem.css';
import { ProductDetailsPage } from './ProductDetails';
import { HeaderCart } from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function RouterComponent() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderCart />
        <Switch>
          <Route path="/productdatails">
            <ProductDetailsPage />
          </Route>
          <Route path="/cart">
            <Cart2 />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
export default RouterComponent;
