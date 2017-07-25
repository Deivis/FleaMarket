import React from 'react';
import renderer from 'react-test-renderer';
import InConstructionWarning from '../../../src/components/InConstructionWarning';

describe('In construction Tests', () => {
  test('In construction Render', () => {
    const tree = renderer
      .create(<InConstructionWarning />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
