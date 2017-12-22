import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import Button from "../components/button";
import Modal from "../components/modal";
import Login from "../components/login";
import { Component as Signup } from "../components/signup";
import Logger from "../utils/logger";

const logger = Logger(path.basename(__filename));

interface IState {
  "loginModal": boolean;
  "signupModal": boolean;
}

class Component extends React.Component<{}, IState> {

  public constructor() {
    super({});
    this.state = {
      "loginModal": false,
      "signupModal": false
    };
  }

  private loginClick = () => {
    logger.info("login click");
    this.setState({
      ...this.state,
      ...{
        "loginModal": true
      }
    });
  }

  private signupClick = () => {
    logger.info("signup click");
    this.setState({
      ...this.state,
      ...{
        "signupModal": true
      }
    });
  }

  public render() {
    return (
      <Row end="xs">
        <Modal isOpen={this.state.loginModal}>
          <Login/>
        </Modal>
        <Modal isOpen={this.state.signupModal}>
          <Signup/>
        </Modal>
        <Col xs={8} sm={4} md={2} lg={1}>
          <Row center="xs">
            <Col xs={6}>
              <Button text="Login" onClick={this.loginClick}/>
            </Col>
            <Col xs={6}>
              <Button text="Signup" onClick={this.signupClick}/>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Component;
