import * as React from "react";
import * as path from "path";
import { connect } from "react-redux";

import NavBar from "../components/navbar";
import { IAppState } from "../stores/store";
import { ModalTypes } from "../reducers/reducer";

interface IStateProps {
  "loginModal": boolean;
  "signupModal": boolean;
  "loggedIn": boolean;
}

const mapStateToProps = (state: IAppState, props: {}): IStateProps => {
  return {
    "loginModal": state.modal === ModalTypes.LOGIN,
    "signupModal": state.modal === ModalTypes.SIGNUP,
    "loggedIn": state.userData.auth !== ""
  };
};

const Component = (props: IStateProps) => {
  return (
    <div className={"leftPanel"}>
        <div className={"placeholderText"}>
          <NavBar {...props}/>
          <div className="accordionContainer">
            <button className="accordion">API Documentation</button>
            <button className="accordion">Settings</button>
            <div className="panel">
              <p>Lorem ipsum...</p>
            </div>
            <button className="accordion">Pages</button>
            <div className="panel">
              <p>Lorem ipsum...</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default connect(mapStateToProps)(Component);
