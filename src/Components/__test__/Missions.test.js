import { Provider } from 'react-redux';
import render from 'react-test-renderer';
import Rocket from '../Components/Rocket/Rocket';
import store from '../redux/configureStore';

describe('Rockets test', () => {
  test('snapshot', () => {
    const tree = render.create(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
