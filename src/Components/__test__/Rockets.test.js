import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import render from 'react-test-renderer';
import store from '../redux/configureStore';
import Rocket from '../Rocket/Rocket';

describe('Rockets test', () => {
  test('snapshot for rockets', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Rocket />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,

    );
    expect(tree).toMatchSnapshot();
  });
});
