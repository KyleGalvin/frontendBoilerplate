import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";

import { IAppState, Store } from "../stores/store";
import { ISignupFormData } from "../reducers/reducer";

import SignupField from "../components/signupField";
import * as AuthService from "../services/auth";
import * as FormService from "../services/forms";

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

const mapStateToProps = (state: IAppState, props: ISignupFormData): ISignupFormData =>
  state.forms.signup;

const usernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  Store.dispatch(FormService.signupEditUsername(event.target.value));

const firstNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  Store.dispatch(FormService.signupEditFirstName(event.target.value));

const lastNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  Store.dispatch(FormService.signupEditLastName(event.target.value));

const emailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  Store.dispatch(FormService.signupEditEmail(event.target.value));

const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  Store.dispatch(FormService.signupEditPassword(event.target.value));

const altPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  Store.dispatch(FormService.signupEditAltPassword(event.target.value));

const submit = (formData: ISignupFormData) => {
  if (formData.validUsername
    && formData.validEmail
    && formData.validPassword
    && formData.passwordMatch) {
    Store.dispatch(AuthService.signup(formData));
  } else {

  }
};

const Component = (props: ISignupFormData) => {
  const submitWrapper = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={() => submit}>
      <Grid fluid>
        <SignupField
          label={"username"}
          name={"username"}
          type={"text"}
          status={props.validUsername}
          onChange={usernameChange}/>
        <SignupField
          label={"first name"}
          name={"firstname"}
          type={"text"}
          status={true}
          onChange={firstNameChange}/>
        <SignupField
          label={"last name"}
          name={"lastname"}
          type={"text"}
          status={true}
          onChange={lastNameChange}/>
        <SignupField
          label={"email"}
          name={"email"}
          type={"text"}
          status={props.validEmail}
          onChange={emailChange}/>
        <SignupField
          label={"password"}
          name={"password"}
          type={"password"}
          status={props.passwordMatch}
          onChange={passwordChange}/>
        <SignupField
          label={"repeat password"}
          name={"altpassword"}
          type={"password"}
          status={props.passwordMatch}
          onChange={altPasswordChange}/>
        <Row center="xs" start="md">
          <input type="submit" value="Submit"/>
        </Row>
      </Grid>
    </form>
  );
};

export default connect(mapStateToProps)(Component);
