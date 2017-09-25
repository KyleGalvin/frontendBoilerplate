import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/basicTest.scss";

import { MainPanel } from "./components/mainPanel";
import { PersonalSummary } from "./components/personalSummary";

ReactDOM.render(
    <div className="row">
	    <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
	    	<PersonalSummary />
    		<MainPanel />
	        <div className="box">Responsive</div>
	    </div>
    </div>,
    document.getElementById("reactContainer")
);