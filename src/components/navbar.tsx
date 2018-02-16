import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import Button from "../components/button";
import Logger from "../utils/logger";
import * as AuthService from "../services/auth";
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
  "loggedIn": state.auth !== ""
});

const signupClick = () => {
  store.dispatch(ModalService.openSignupModal());
};

const logoutClick = () => {
  store.dispatch(AuthService.logout());
};

const loginClick = () => {
  store.dispatch(ModalService.openLoginModal());
};

const exitClick = () => {
  store.dispatch(ModalService.closeModal());
};

const openAccountDropdown = () => {
  logger.info("Open Account Dropdown")
};

const Component = (props: INavBarProps) => {
  const loggedOut = (
    <Row end="xs">
      <Col xs={6}>
        <Button text="Login" onClick={loginClick}/>
      </Col>
      <Col xs={6}>
        <Button text="Signup" onClick={signupClick}/>
      </Col>
    </Row>
  );

  const loggedIn = (
    <Row end="xs">
      <Col xs={6}>
        <Button text="Logout" onClick={logoutClick}/>
      </Col>
      <Col xs={6}>
        <Dropdown image={""} />
      </Col>
    </Row>
  );

  return (
    <div>
      <Modal isOpen={props.loginModal} onExitClick={exitClick}>
        <Login {...store.getState().forms.login}/>
      </Modal>
      <Modal isOpen={props.signupModal} onExitClick={exitClick}>
        <Signup {...store.getState().forms.signup}/>
      </Modal>
      <Row className ="navbar" end="xs">
        <Col xs={8} sm={4} md={2} lg={1}>
          {props.loggedIn ? loggedIn : loggedOut }
        </Col>
      </Row>
    </div>
  );
};

export default connect(mapStateToProps)(Component);
