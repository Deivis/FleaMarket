import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../../../src/modules/home';
import configureStore from '../../../src/utils/configStore';

const store = configureStore();

describe('Home Tests', () => {
  test('Home Render', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Home />
          </Router>
        </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
