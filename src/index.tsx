import * as React from "react";
import * as ReactDOM from "react-dom";
import * as redux from "redux";
import thunk from "redux-thunk";
import { connect, Provider } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";

import MainPanel from "./components/mainPanel";
import PersonalSummary from "./components/personalSummary";
import * as Config from "./config/confManager";
import * as Store from "./reducers/reducer";
import { setData } from "./actions/actions";
import * as ServerService from "./services/server";

import "./styles/basicTest.scss";

const store: redux.Store<Store.IAppState> = redux.createStore(
  Store.reducers,
  {} as Store.IAppState,
  redux.applyMiddleware(thunk)
);

// trigger the rest call to 'the server' which retrieves our app data.
// this ends up in our store, which should bubble to the appropriate components.
// ServerService.getData();

store.dispatch(ServerService.getData());

ReactDOM.render(
  <Provider store={store}>
    <Grid fluid>
      <Row center="xs" start="md">
        <Col xs={12} md={4} className="personalSummaryContainer">
          <PersonalSummary />
        </Col>
        <Col xs={12} md={8} className="mainContentContainer">
          <MainPanel />
          <div className="box">Responsive</div>
        </Col>
      </Row>
    </Grid>
  </Provider>,
  document.getElementById("reactContainer")
);
