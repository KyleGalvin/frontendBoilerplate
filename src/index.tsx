import * as path from "path";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import {store, history} from "./stores/store";
import LandingPage from "./pages/landing";
import AboutPage from "./pages/about";
import PrivateRoute from "./components/privateRoute";
import Dashboard from "./pages/dashboard";
import "./styles/basicTest.scss";
import Logger from "./utils/logger";

const logger = Logger(path.basename(__filename));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/About" component={AboutPage}/>
        <PrivateRoute exact path="/Dashboard" component={Dashboard} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("reactContainer")
);
