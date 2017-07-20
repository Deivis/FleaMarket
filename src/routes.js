import { Route, Switch } from 'react-router-dom';
import React from 'react';

import NotFound from './components/NotFound';
import Home from './modules/home';
import Item from './modules/item';
import Cart from './modules/cart';
import Checkout from './modules/checkout';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/item/:id" component={Item} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/checkout/:id" component={Checkout} />
    <Route component={NotFound} />
  </Switch>
);

export default routes;
