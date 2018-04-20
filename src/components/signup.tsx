import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";
import * as jwt from "jsonwebtoken";

import { IAppState, store } from "../stores/store";
import { ISignupFormData } from "../reducers/reducer";
import SignupField from "../components/signupField";
import * as UserService from "../services/user";
import * as ModalService from "../services/modal";
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
  "contacts": IState[];
}

const mapStateToProps = (state: IAppState, props: ISignupFormData): ISignupFormData =>
  state.forms.signup;

const usernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  store.dispatch(FormService.signupEditUsername(event.target.value));

const firstNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  store.dispatch(FormService.signupEditFirstName(event.target.value));

const lastNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  store.dispatch(FormService.signupEditLastName(event.target.value));

const emailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  store.dispatch(FormService.signupEditEmail(event.target.value));

const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  store.dispatch(FormService.signupEditPassword(event.target.value));

const altPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  store.dispatch(FormService.signupEditAltPassword(event.target.value));

const submit = async (formData: ISignupFormData) => {
  if (formData.validUsername
    && formData.validEmail
    && formData.validPassword
    && formData.passwordMatch) {
    await store.dispatch(UserService.signup({...formData, ...{"contacts": []}}));
    const state = store.getState();
    const jwtData = (jwt.decode(state.auth)as any);
    const userId = jwtData.id;
    store.dispatch(UserService.getUser(userId as string));
  }
};

const Component = (props: ISignupFormData) => {
  const submitWrapper = (event: React.ChangeEvent<HTMLInputElement>) => {

    submit(props);
    event.preventDefault();
  };

  return (
    <form>
      <div>
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
        <div>
          <input type="button" value="Submit" onClick={() => submit(props)}/>
        </div>
      </div>
    </form>
  );
};

export default connect(mapStateToProps)(Component);
