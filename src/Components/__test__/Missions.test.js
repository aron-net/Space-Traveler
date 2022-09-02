import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import MissionList from "../Missions/MissionList";
import store from "../../redux/configureStore";
describe("missions test", () => {
  test("snapshot for mission", () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <MissionList />
          </Router>
        </Provider>
        ,
      </React.StrictMode>
    );
    expect(tree).toMatchSnapshot();
  });
});
