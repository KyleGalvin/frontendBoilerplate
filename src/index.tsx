import * as path from "path";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as redux from "redux";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import { connect, Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";

import MainPage from "./pages/mainPage";
import Login from "./pages/login";
import Signup from "./pages/signup";
import * as Store from "./reducers/reducer";
import * as ServerService from "./services/server";
import "./styles/basicTest.scss";
import Logger from "./utils/logger";

const history = createHistory();

const logger = Logger(path.basename(__filename));

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
const store: redux.Store<Store.IAppState> = redux.createStore(
  Store.reducers,
  Store.initialState,
  composeEnhancers(redux.applyMiddleware(thunk))
);

// trigger the rest call to 'the server' which retrieves our app data.
// this ends up in our store, which should bubble to the appropriate components.
// ServerService.getData();
store.dispatch(ServerService.getUserData());

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <div>
      <Route exact path="/" component={MainPage}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Signup" component={Signup}/>
    </div>
    </Router>
  </Provider>,
  document.getElementById("reactContainer")
);
