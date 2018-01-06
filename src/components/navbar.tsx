import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import Button from "../components/button";
import Logger from "../utils/logger";
import * as AuthService from "../services/auth";
import { IAppState, Store } from "../stores/store";
import Modal from "../components/modal";
import { Component as Login } from "../components/login";
import { Component as Signup } from "../components/signup";

const logger = Logger(path.basename(__filename));

interface IState {
  "loginModal": boolean;
  "signupModal": boolean;
  "loggedIn": boolean;
}

class Component extends React.Component<{}, IState> {

  public constructor(props: {}) {
    super(props);

    this.state = {
      "loginModal": false,
      "signupModal": false,
      "loggedIn": Store.getState().auth !== ""
    };
  }
  private signupClick = () => {
    logger.info({"obj": this.state}, "signupClicked");
    this.setState({
      ...this.state,
      ...{"signupModal": !this.state.signupModal}
    });
  }

  private logoutClick = () => {
    Store.dispatch(AuthService.logout());
  }

  private loginClick = () => {
    logger.info({"obj": this.state}, "loginClicked");
    this.setState({
      ...this.state,
      ...{"loginModal": !this.state.loginModal}
    });
  }

  public render() {
    const loggedOut = (
      <Row center="xs">
        <Col xs={6}>
          <Button text="Login" onClick={this.loginClick}/>
        </Col>
        <Col xs={6}>
          <Button text="Signup" onClick={this.signupClick}/>
        </Col>
      </Row>
    );

    const loggedIn = (
      <Row center="xs">
        <Col xs={6}>
          <Button text="Logout" onClick={this.logoutClick}/>
        </Col>
      </Row>
    );

    return (
      <div>
        <Modal isOpen={this.state.loginModal} onExitClick={this.loginClick.bind(this)}>
          <Login loggedIn={this.state.loggedIn}/>
        </Modal>
        <Modal isOpen={this.state.signupModal} onExitClick={this.signupClick.bind(this)}>
          <Signup/>
        </Modal>
        <Row end="xs">
          <Col xs={8} sm={4} md={2} lg={1}>
            {this.state.loggedIn ? loggedIn : loggedOut }
          </Col>
        </Row>
      </div>
    );
  }
}

export default Component;
