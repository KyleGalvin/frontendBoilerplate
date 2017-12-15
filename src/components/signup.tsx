import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import { IAppState, Store } from "../stores/store";
import Logger from "../utils/logger";
import * as http from "../utils/http";
import * as AuthService from "../services/auth";
const logger = Logger(path.basename(__filename));

// interface IProps {}

export interface IState {
  "username": string;
  "email": string;
  "firstName": string;
  "lastName": string;
  "password": string;
  "altPassword": string;
  "validUsername": boolean;
  "validEmail": boolean;
  "validPassword": boolean;
  "passwordMatch": boolean;
}

// interface IConnectedState {}

// interface IConnectedDispatch {}

const mapStateToProps = (state: IAppState, mainPanelProps: {}): {} => ({
  // counter: state.counter,
});

const mapDispatchToProps = (dispatch: redux.Dispatch<IAppState>): {} => ({
  // gotData: (state: Store.IAppState) => {
  //   dispatch(setData(state))
  // },
});

class Component extends React.Component<{}, IState> {

  public constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      altPassword: "",
      firstName: "",
      lastName: "",
      validUsername: false,
      validEmail: false,
      validPassword: false,
      passwordMatch: false
    };
  }

  private usernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    logger.info({obj: [event.target.value, event.target.name]}, "Event");
    const newState = {...this.state, ...{username: event.target.value}};
    this.setState(newState);
  }

  private firstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    logger.info({obj: [event.target.value, event.target.name]}, "Event");
    const newState = {...this.state, ...{firstName: event.target.value}};
    this.setState(newState);
  }

  private lastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    logger.info({obj: [event.target.value, event.target.name]}, "Event");
    const newState = {...this.state, ...{lastName: event.target.value}};
    this.setState(newState);
  }

  private emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    logger.info({obj: this.state}, "Event");
    const emailRegex = /\S+@\S+/;
    if (emailRegex.test(event.target.value)) {
      const newState = {...this.state, ...{email: event.target.value, validEmail: true}};
      this.setState(newState);
    } else {
      const newState = {...this.state, ...{validEmail: false}};
      this.setState(newState);
    }

  }

  private passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    logger.info({obj: [event.target.value, event.target.name]}, "Event");
    const newState = {...this.state, ...{password: event.target.value}};
    this.setState(newState);
  }

  private altPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    logger.info({obj: [event.target.value, event.target.name]}, "Event");
    const newState = {...this.state, ...{altPassword: event.target.value}};
    this.setState(newState);
  }

  private submit = (event: React.FormEvent<HTMLFormElement>) => {
    logger.info("submit");
    Store.dispatch(AuthService.signup(this.state));
    event.preventDefault();
  }

  public render() {
    return (
      <form onSubmit={this.submit}>
        <Grid fluid>
          <Row center="xs" start="md">
            <label>
              <p>username</p>
              <input type="text" name="username" onChange={this.usernameChange}/>
            </label>
          </Row>
          <Row center="xs" start="md">
            <label>
              <p>first name</p>
              <input type="text" name="firstname" onChange={this.firstNameChange}/>
            </label>
          </Row>
          <Row center="xs" start="md">
            <label>
              <p>last name</p>
              <input type="text" name="lastname" onChange={this.lastNameChange}/>
            </label>
          </Row>
          <Row center="xs" start="md">

              <Col xs={12} md={4}>
                <label>email</label>
              </Col>
              <Col xs={12} md={4}>
                <div className={this.state.validEmail ? "fa-check-circle-o" : "fa-times-circle-o"}></div>
              </Col>
              <Col xs={12} md={4}>
                <input type="text" name="email" onChange={this.emailChange}/>
              </Col>

          </Row>
          <Row center="xs" start="md">
            <label>
              <p>password</p>
              <input type="password" name="password" onChange={this.passwordChange}/>
            </label>
          </Row>
          <Row center="xs" start="md">
            <label>
              <p>repeat password</p>
              <input type="password" name="altpassword" onChange={this.altPasswordChange}/>
            </label>
          </Row>
          <Row center="xs" start="md">
            <input type="submit" value="Submit"/>
          </Row>

        </Grid>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
