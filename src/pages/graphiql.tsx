import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";

import Logger from "../utils/logger";
import LeftPanel from "../components/leftPanel";
import { IAppState } from "../stores/store";
import { ModalTypes } from "../reducers/reducer";
import * as API from "../services/swagger";

const GraphiQL = require("graphiql");
const logger = Logger(path.basename(__filename));

interface IStateProps {
  "loginModal": boolean;
  "signupModal": boolean;
  "loggedIn": boolean;
}

const mapStateToProps = (state: IAppState, props: {}): IStateProps => {
  return {
    "loginModal": state.modal === ModalTypes.LOGIN,
    "signupModal": state.modal === ModalTypes.SIGNUP,
    "loggedIn": state.userData.auth !== ""
  };
};

const Component = (props: IStateProps) => {
  logger.info("Graphiql render " + typeof(GraphiQL));
  return (
    <div>
      <LeftPanel />
      <div className={"mainPanel"}>
        <div className={"placeholderText"}>
          <GraphiQL fetcher={API.getGraphQL}/>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Component);
