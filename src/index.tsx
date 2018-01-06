import * as path from "path";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { connect, Provider } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { Store } from "./stores/store";
import LandingPage from "./pages/landing";
import PrivateRoute from "./components/privateRoute";
import Dashboard from "./pages/dashboard";
import "./styles/basicTest.scss";
import Logger from "./utils/logger";

const logger = Logger(path.basename(__filename));

ReactDOM.render(
  <Provider store={Store}>
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <PrivateRoute exact path="/Dashboard" loggedIn={Store.getState().auth !== ""}>
          <Dashboard />
        </PrivateRoute>
      </Switch>
    </div>
    </Router>
  </Provider>,
  document.getElementById("reactContainer")
);
