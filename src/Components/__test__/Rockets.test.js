import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Rocket from '../Rocket/Rocket';
import store from '../../redux/configureStore';

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
