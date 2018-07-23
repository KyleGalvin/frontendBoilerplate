import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { push } from "react-router-redux";

import Logger from "../utils/logger";
import { IAppState, store, ILoginFormData } from "../stores/store";
import * as UserService from "../services/user";
import * as FormService from "../services/forms";
import * as ModalService from "../services/modal";

const logger = Logger(path.basename(__filename));

const mapStateToProps = (state: IAppState, props: ILoginFormData): ILoginFormData =>
  state.forms.login;

const usernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  FormService.loginEditUsername(event.target.value);

const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  FormService.loginEditPassword(event.target.value);

const submit = async (formData: ILoginFormData) => {
  await UserService.login(formData);
  const state = store.getState();
  if (state.userData.auth !== "") {
    await ModalService.closeModal();
    await store.dispatch(push("/Api"));
  } else {
    logger.info("Login failed!");
  }
};

const Component = (props: ILoginFormData) => {
  const submitWrapper = (event: React.ChangeEvent<HTMLInputElement>) => {

    submit(props);
    event.preventDefault();
  };

  return (
    <form>
      <p>username</p><input type="text" onChange={usernameChange}/>
      <p>password</p><input type="password" onChange={passwordChange}/>
      <input type="button" value="Submit" onClick={() => submit(props)}/>
    </form>
  );
};

export default connect(mapStateToProps)(Component);
