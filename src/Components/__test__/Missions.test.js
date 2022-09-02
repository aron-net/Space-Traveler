import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import render from 'react-test-renderer';
import store from '../../redux/configureStore';
import Mission from '../Missions/Missions';

describe('Missions test', () => {
  test('snapshot for missions', () => {
    const tree = render.create(
      
      <Provider store={store}>
        <Router>
          <Mission />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
