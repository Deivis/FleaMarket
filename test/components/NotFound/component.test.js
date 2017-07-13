import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from '../../../src/components/NotFound';

describe('Not found Tests', () => {
  test('Not found Render', () => {
    const tree = renderer
      .create(<NotFound />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
