import * as React from "react";
import * as path from "path";

import NavBar from "../components/navbar";
import { IAppState } from "../stores/store";
import { ModalTypes } from "../reducers/reducer";
import { connect } from "react-redux";

interface IStateProps {
  "loginModal": boolean;
  "signupModal": boolean;
  "loggedIn": boolean;
}

const mapStateToProps = (state: IAppState, props: {}): IStateProps => {
  return {
    "loginModal": state.modal === ModalTypes.LOGIN,
    "signupModal": state.modal === ModalTypes.SIGNUP,
    "loggedIn": state.auth !== ""
  };
};

const Component = (props: IStateProps) => {
  return (
    <div className={"placeholderText"}>
      <NavBar {...props} />
      <span>landing</span>
    </div>
  );
};

export default connect(mapStateToProps)(Component);
