import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/basicTest.scss";
import { Grid, Row, Col } from 'react-flexbox-grid';

import { MainPanel } from "./components/mainPanel";
import { PersonalSummary } from "./components/personalSummary";

ReactDOM.render(
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
	</Grid>,
    document.getElementById("reactContainer")
);