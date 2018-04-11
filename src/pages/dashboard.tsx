import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";

import Logger from "../utils/logger";
import Dashboard from "../components/dashboard";
import NavBar from "../components/navbar";
import { IAppState } from "../stores/store";
import { ModalTypes } from "../reducers/reducer";

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
    "loggedIn": state.auth !== ""
  };
};

const Component = (props: IStateProps) => {
  logger.info("LANDING RENDER");
  return (
    <div>
      <NavBar
        {...props}
      />
      <Dashboard/>
    </div>
  );
};

export default connect(mapStateToProps)(Component);
