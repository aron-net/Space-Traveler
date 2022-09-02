import { Provider } from 'react-redux';
import React from 'react';
import renderer from 'react-test-renderer';
import Mission from '../Missions/Missions';
import store from '../../redux/configureStore';

it('renders when there is item', () => {
  const tree = renderer.create(<Provider store={store}>
<Mission />
</Provider>);
  expect(tree).toMatchSnapshot();
});
