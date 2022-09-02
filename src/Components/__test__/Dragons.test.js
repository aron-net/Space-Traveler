import React from 'react';
import renderer from 'react-test-renderer';
import Dragon from '../Dragon/Dragon';

it('renders when there is item', () => {
  const tree = renderer.create(<Dragon />).toJSON();
  expect(tree).toMatchSnapshot();
});
