import * as path from "path";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { connect, Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { Store } from "./stores/store";
import LandingPage from "./pages/landing";
import PrivateRoute from "./components/privateRoute";
import Dashboard from "./components/dashboard";
import "./styles/basicTest.scss";
import Logger from "./utils/logger";

const logger = Logger(path.basename(__filename));

ReactDOM.render(
  <Provider store={Store}>
    <Router>
    <div>
      <Route exact path="/" component={LandingPage}/>
      <PrivateRoute exact path="/Dashboard" component={Dashboard}/>
    </div>
    </Router>
  </Provider>,
  document.getElementById("reactContainer")
);
