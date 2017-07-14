import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const Root = ({ store, history, routes }) => (
  <div>
    <Provider store={store}>
      <BrowserRouter
        basename={process.env.APP_NAME}
        history={history}
      >
        {routes(store)}
      </BrowserRouter>
    </Provider>
    <span className="root__version">Version {process.env.npm_package_version}</span>
  </div>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  routes: PropTypes.func.isRequired,
};

export default Root;
