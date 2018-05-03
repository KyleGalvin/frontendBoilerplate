import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";

import Button from "../components/button";
import Logger from "../utils/logger";
import * as UserService from "../services/user";
import * as FormService from "../services/forms";
import * as ModalService from "../services/modal";
import { IAppState, store } from "../stores/store";
import { ModalTypes } from "../reducers/reducer";
import Modal from "../components/modal";
import Login from "../components/login";
import Signup from "../components/signup";
import Dropdown from "../components/dropdown";

const logger = Logger(path.basename(__filename));

interface INavBarProps {
  "loginModal": boolean;
  "signupModal": boolean;
  "loggedIn": boolean;
}

const mapStateToProps = (state: IAppState, props: INavBarProps): INavBarProps =>
({
  "loginModal": state.modal === ModalTypes.LOGIN,
  "signupModal": state.modal === ModalTypes.SIGNUP,
  "loggedIn": state.userData.auth !== ""
});

const signupClick = () => {
  store.dispatch(ModalService.openSignupModal());
};

const logoutClick = () => {
  store.dispatch(UserService.logout());
};

const loginClick = () => {
  store.dispatch(ModalService.openLoginModal());
};

const exitClick = () => {
  store.dispatch(ModalService.closeModal());
};

const openAccountDropdown = () => {
  logger.info("Open Account Dropdown");
};

const Component = (props: INavBarProps) => {
  const loggedOut = (
    <div>
      <div className={"width50 floatLeft"}>
        <Button text="Login" onClick={loginClick}/>
      </div>
      <div className={"width50 floatRight"}>
        <Button text="Signup" onClick={signupClick}/>
      </div>
    </div>
  );

  const loggedIn = (
    <div>
      <div className={"width50 floatLeft"}>
        <Button text="Logout" onClick={logoutClick}/>
      </div>
      <div className={"width50 floatRight"}>
        <Dropdown image={""} />
      </div>
    </div>
  );

  return (
    <div>
      <Modal isOpen={props.loginModal} onExitClick={exitClick}>
        <Login {...store.getState().forms.login}/>
      </Modal>
      <Modal isOpen={props.signupModal} onExitClick={exitClick}>
        <Signup {...store.getState().forms.signup}/>
      </Modal>
      <div>
        <div>
          {props.loggedIn ? loggedIn : loggedOut }
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Component);
