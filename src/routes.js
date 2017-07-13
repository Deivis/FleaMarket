import { Route, Switch } from 'react-router-dom';
import React from 'react';

import NotFound from './components/NotFound';
import Home from './modules/home';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
);

export default routes;
