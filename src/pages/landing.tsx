import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import { IAppState } from "../stores/store";
import NavBar from "../components/navbar";
import Modal from "../components/modal";
import Login from "../components/login";
import { Component as Signup } from "../components/signup";
import Logger from "../utils/logger";

const logger = Logger(path.basename(__filename));

interface IState {
  loginModal: boolean;
  signupModal: boolean;
}

class Component extends React.Component<{}, IState> {

  public constructor (props: any) {
    super(props);
    this.state = {
      "loginModal": false,
      "signupModal": false
    };
  }
  private signupClick = () => {
    logger.info({"obj": this.state},"signupClicked");
    this.setState({
      ...this.state,
      ...{"signupModal": !this.state.signupModal}
    });
  }

  private loginClick = () => {
    logger.info({"obj": this.state},"loginClicked");
    this.setState({
      ...this.state,
      ...{"loginModal": !this.state.loginModal}
    });
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
          loginClick={this.loginClick.bind(this)}/>
      </Grid>
    );
  }
}

export default Component;
