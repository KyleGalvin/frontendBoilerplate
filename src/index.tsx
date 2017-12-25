import * as path from "path";
import * as React from "react";
import * as ReactDOM from "react-dom";

import createHistory from "history/createBrowserHistory";
import { connect, Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { Store } from "./stores/store";

import LandingPage from "./pages/landing";
import Login from "./pages/login";
import Signup from "./pages/signup";

import "./styles/basicTest.scss";
import Logger from "./utils/logger";

const history = createHistory();

const logger = Logger(path.basename(__filename));

ReactDOM.render(
  <Provider store={Store}>
    <Router>
    <div>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Signup" component={Signup}/>
    </div>
    </Router>
  </Provider>,
  document.getElementById("reactContainer")
);
