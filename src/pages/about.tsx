import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";

import Logger from "../utils/logger";
import { IAppState } from "../stores/store";
import { ModalTypes } from "../reducers/reducer";
import NavBar from "../components/navbar";
import About from "../components/about";
import * as AuthService from "../services/auth";

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
      <About/>
    </div>
  );
};

export default connect(mapStateToProps)(Component);
