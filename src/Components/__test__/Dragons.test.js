import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import DragonList from "../Dragon/DragonList";
import store from "../../redux/configureStore";
describe("dragon test", () => {
  test("snapshot for dragon", () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <DragonList />
          </Router>
        </Provider>
        ,
      </React.StrictMode>
    );
    expect(tree).toMatchSnapshot();
  });
});
