import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import { IAppState, Store } from "../stores/store";
import Logger from "../utils/logger";
import * as http from "../utils/http";
import SignupField from "../components/signupField";
import * as AuthService from "../services/auth";
const logger = Logger(path.basename(__filename));

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

export class Component extends React.Component<{}, IState> {

  public constructor() {
    super({});
    this.state = {
      "username": "",
      "email": "",
      "password": "",
      "altPassword": "",
      "firstName": "",
      "lastName": "",
      "validUsername": false,
      "validEmail": false,
      "validPassword": false,
      "passwordMatch": false
    };
  }

  private usernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    logger.info({"obj": [event.target.value, event.target.name]}, "Event");
    const newState = {
      ...this.state,
      ...{
        "username": event.target.value,
        "validUsername": event.target.value !== null
      }
    };
    this.setState(newState);
  }

  private firstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    logger.info({"obj": [event.target.value, event.target.name]}, "Event");
    const newState = {...this.state, ...{"firstName": event.target.value}};
    this.setState(newState);
  }

  private lastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    logger.info({"obj": [event.target.value, event.target.name]}, "Event");
    const newState = {...this.state, ...{"lastName": event.target.value}};
    this.setState(newState);
  }

  private emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    logger.info({"obj": [this.state, event, event.target.value]}, "Email Event");
    const emailRegex = /\S+@\S+/;
    if (emailRegex.test(event.target.value)) {
      const newState = {...this.state, ...{"email": event.target.value, "validEmail": true}};
      this.setState(newState);
    } else {
      const newState = {...this.state, ...{"validEmail": false}};
      this.setState(newState);
    }

  }

  private passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    logger.info({"obj": [event.target.value, event.target.name]}, "Event");
    const validPassword = event.target.value !== null;
    const passwordMatch = event.target.value === this.state.altPassword;
    const newState = {
      ...this.state,
      ...{
        "password": event.target.value,
        "passwordMatch": passwordMatch,
        "validPassword": validPassword
      }
    };
    this.setState(newState);
  }

  private altPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    logger.info({"obj": [event.target.value, event.target.name]}, "Event");
    const validPassword = event.target.value !== null && event.target.value === this.state.password;
    const newState = {
      ...this.state,
      ...{
        "altPassword": event.target.value,
        "passwordMatch": validPassword
      }
    };
    this.setState(newState);
  }

  private submit = (event: React.FormEvent<HTMLFormElement>) => {
    logger.info("submit");
    if (this.state.validUsername
      && this.state.validEmail
      && this.state.validPassword
      && this.state.passwordMatch) {
      Store.dispatch(AuthService.signup(this.state));
    } else {
      logger.info("Invalid form");
    }

    event.preventDefault();
  }

  public render() {
    return (
      <form onSubmit={this.submit}>
        <Grid fluid>
          <SignupField
            label={"username"}
            name={"username"}
            type={"text"}
            status={this.state.validUsername}
            onChange={this.usernameChange.bind(this)}/>
          <SignupField
            label={"first name"}
            name={"firstname"}
            type={"text"}
            status={true}
            onChange={this.firstNameChange.bind(this)}/>
          <SignupField
            label={"last name"}
            name={"lastname"}
            type={"text"}
            status={true}
            onChange={this.lastNameChange.bind(this)}/>
          <SignupField
            label={"email"}
            name={"email"}
            type={"text"}
            status={this.state.validEmail}
            onChange={this.emailChange.bind(this)}/>
          <SignupField
            label={"password"}
            name={"password"}
            type={"password"}
            status={this.state.passwordMatch}
            onChange={this.passwordChange.bind(this)}/>
          <SignupField
            label={"repeat password"}
            name={"altpassword"}
            type={"password"}
            status={this.state.passwordMatch}
            onChange={this.altPasswordChange.bind(this)}/>
          <Row center="xs" start="md">
            <input type="submit" value="Submit"/>
          </Row>

        </Grid>
      </form>
    );
  }
}
