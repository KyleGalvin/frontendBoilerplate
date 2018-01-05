import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";

import { IAppState, Store } from "../stores/store";
import Logger from "../utils/logger";
import * as AuthService from "../services/auth";

const logger = Logger(path.basename(__filename));

const mapStateToProps = (state: IAppState): IUser => {
  logger.info({"obj": state}, "personal summary mapStateToProps");
  return state.user;
};

export interface IState {
  username: string;
  password: string;
}

export class Component extends React.Component<{}, IState> {

  private usernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    logger.info({"obj": [event.target.value, event.target.name]}, "Event");
    this.setState({
      ...this.state,
      ...{
        "username": event.target.value
      }
    });
  }

  private passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    logger.info({"obj": [event.target.value, event.target.name]}, "Event");
    this.setState({
      ...this.state,
      ...{
        "password": event.target.value
      }
    });
  }

  private login = () => {
    Store.dispatch(AuthService.login(this.state));
  }

  public render() {
    return (
      <div>
        <p>username</p><input type="text" onChange={this.usernameChange.bind(this)}/>
        <p>password</p><input type="password" onChange={this.passwordChange.bind(this)}/>
        <input type="button" onClick={this.login}/>
      </div>
    );
  }
}
