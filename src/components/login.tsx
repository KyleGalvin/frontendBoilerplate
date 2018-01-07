import * as React from "react";
import { connect } from "react-redux";

import { IAppState, Store, ILoginFormData } from "../stores/store";
import * as AuthService from "../services/auth";
import * as FormService from "../services/forms";

const mapStateToProps = (state: IAppState, props: ILoginFormData): ILoginFormData =>
  state.forms.login;

const usernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  Store.dispatch(FormService.loginEditUsername(event.target.value));

const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  Store.dispatch(FormService.loginEditPassword(event.target.value));

const login = (formData: ILoginFormData) =>
  Store.dispatch(AuthService.login(formData));

const Component = (props: ILoginFormData) => (
  <div>
    <p>username</p><input type="text" onChange={usernameChange}/>
    <p>password</p><input type="password" onChange={passwordChange}/>
    <input type="button" onClick={() => login(props)}/>
  </div>
);

export default connect(mapStateToProps)(Component);
