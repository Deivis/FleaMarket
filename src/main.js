import React from 'react';
import { render } from 'react-dom';

import './styles/main.scss';
import configureStore from './store';
import routes from './routes';
import Root from './components/Root';
import { rootSaga } from './sagas';

const store = configureStore();
const history = store.browserHistory;
const rootProps = { store, history, routes };

const rootEl = document.getElementById('root');

const renderApp = (Comp = Root, routesProp = routes) =>
  render(
    <Comp {...rootProps} routes={routesProp} />
  , rootEl);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./routes', () => {
    const nextRoutes = routes;
    const NextRoot = Root;

    store.stopSaga();
    store.runSaga(rootSaga);
    renderApp(NextRoot, nextRoutes);
  });
}

store.runSaga(rootSaga);
renderApp();
