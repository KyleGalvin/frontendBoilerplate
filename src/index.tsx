import * as React from "react";
import * as ReactDOM from "react-dom";
import * as redux from "redux";
import thunk from "redux-thunk";
import { connect, Provider } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";

import MainPanel from "./components/mainPanel";
import PersonalSummary from "./components/personalSummary";
import * as Config from "./config/confManager";
import * as state from "./reducers/reducer";
import { setData } from "./actions/actions";
import * as serverService from "./services/server";

import "./styles/basicTest.scss";

const store: redux.Store<state.IAppState> = redux.createStore(
  state.reducers,
  {} as state.IAppState,
  redux.applyMiddleware(thunk)
);

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
