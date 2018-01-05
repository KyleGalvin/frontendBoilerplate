import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import { IAppState, Store } from "../stores/store";
import NavBar from "../components/navbar";
import Modal from "../components/modal";
import { Component as Login } from "../components/login";
import Landing from "../components/landing";
import { Component as Signup } from "../components/signup";
import Logger from "../utils/logger";
import * as AuthService from "../services/auth";

const logger = Logger(path.basename(__filename));

interface IState {
  loginModal: boolean;
  signupModal: boolean;
}

class Component extends React.Component<{}, IState> {

  public constructor(props: any) {
    super(props);
    this.state = {
      "loginModal": false,
      "signupModal": false
    };
  }
  private signupClick = () => {
    logger.info({"obj": this.state}, "signupClicked");
    this.setState({
      ...this.state,
      ...{"signupModal": !this.state.signupModal}
    });
  }

  private loginClick = () => {
    logger.info({"obj": this.state}, "loginClicked");
    this.setState({
      ...this.state,
      ...{"loginModal": !this.state.loginModal}
    });
  }

  private logoutClick = () => {
    logger.info({"obj": this.state}, "loginClicked");
    Store.dispatch(AuthService.logout());
  }

  public render() {
    return (
      <Grid fluid>
        <Modal isOpen={this.state.loginModal} onClick={this.loginClick.bind(this)}>
          <Login/>
        </Modal>
        <Modal isOpen={this.state.signupModal} onClick={this.signupClick.bind(this)}>
          <Signup/>
        </Modal>
        <NavBar
          loginModal={this.state.loginModal}
          signupModal={this.state.signupModal}
          signupClick={this.signupClick.bind(this)}
          loginClick={this.loginClick.bind(this)}
          logoutClick={this.logoutClick.bind(this)}
          loggedIn={Store.getState().auth !== ""}/>
        <Landing/>
      </Grid>
    );
  }
}

export default Component;
