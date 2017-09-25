import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/basicTest.scss";

import { MainPanel } from "./components/mainPanel";
import { PersonalSummary } from "./components/personalSummary";

ReactDOM.render(
    <div>
      <PersonalSummary />
      <MainPanel />
    </div>,
    document.getElementById("reactContainer")
);