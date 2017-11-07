import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";
import * as path from "path";

import { IAppState, Store } from "../stores/store";
import Config from "../config/confManager";
import Logger from "../utils/logger";
import * as http from "../utils/http";
import * as AuthService from "../services/auth";
const logger = Logger(path.basename(__filename));

// interface IProps {}

export interface IState {
	username: string,
	email: string,
	password: string,
	altPassword: string,
	validUsername: boolean,
	validEmail: boolean,
	validPassword: boolean,
	passwordMatch: boolean
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
		validUsername: false,
		validEmail: false,
		validPassword: false,
		passwordMatch: false
	}
  }

  private usernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  	logger.info({obj: [event.target.value, event.target.name]}, "Event");
  	const newState = {...this.state, ...{username: event.target.value}};
  	this.setState(newState);
  }

  private emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  	logger.info({obj: this.state}, "Event");
  	var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
    // const action = { 
    //   type: AuthActions.AuthActionTypes.SIGN_UP,
    //   user: this.state
    // }
    Store.dispatch(AuthService.signup(this.state));
    //http.post(Config.serverURI);
  	event.preventDefault();
  }

  public render() {
    return (
      <form onSubmit={this.submit}>
        <label>
          <p>username</p>
          <input type="text" name="username" onChange={this.usernameChange}/>
        </label>
        <label>
          <p>email</p>
          <div className={this.state.validEmail?"fa-check-circle-o":"fa-times-circle-o"}></div>
          <input type="text" name="email" onChange={this.emailChange}/>
        </label>
        <label>
          <p>password</p>
          <input type="password" name="password" onChange={this.passwordChange}/>
        </label>
        <label>
          <p>repeat password</p>
          <input type="password" name="altpassword" onChange={this.altPasswordChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
