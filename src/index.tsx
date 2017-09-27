import * as React from "react";
import * as ReactDOM from "react-dom";
import * as redux from 'redux';
import thunk from 'redux-thunk';
import { connect, Provider } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';

import MainPanel from "./components/mainPanel";
import PersonalSummary from "./components/personalSummary";
import * as Config from "./config/confManager";
import * as state from './reducers/reducer';

import "./styles/basicTest.scss";

const store: redux.Store<state.IAppState> = redux.createStore(
  state.reducers,
  {} as state.IAppState,
  redux.applyMiddleware(thunk),
)

fetch(Config.default.modelServer + '/dist/data/testModel.json').then((response) => {
	return Promise.resolve(response.text());

}).then((response) => {
		console.log('response: ', response);
});

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