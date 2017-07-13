import React from 'react';
import renderer from 'react-test-renderer';
import Root from '../../../src/components/Root';

import configureStore from '../../../src/utils/configStore';
import routes from '../../../src/routes';

const store = configureStore();
const history = store.browserHistory;
const rootProps = { store, history, routes };

describe('Root Tests', () => {
  test('Root Render', () => {
    const tree = renderer
      .create(<Root {...rootProps} routes={routes} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
