import * as React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";
import * as path from "path";

import Logger from "../utils/logger";
import Dashboard from "../components/dashboard";
import NavBar from "../components/navbar";
import { IAppState } from "../stores/store";
import { ModalTypes } from "../reducers/reducer";

const logger = Logger(path.basename(__filename));

interface IOwnProps {
}

interface IStateProps {
  "loginModal": boolean;
  "signupModal": boolean;
  "loggedIn": boolean;
}

const mapStateToProps = (state: IAppState, props: IOwnProps): IStateProps => {
  return {
    "loginModal": state.modal === ModalTypes.LOGIN,
    "signupModal": state.modal === ModalTypes.SIGNUP,
    "loggedIn": state.auth !== ""
  };
};

const Component = (props: IStateProps) => {
  logger.info("LANDING RENDER");
  return (
    <Grid fluid>
      <NavBar
        {...props}
      />
      <Dashboard/>
    </Grid>
  );
};

export default connect(mapStateToProps)(Component);
