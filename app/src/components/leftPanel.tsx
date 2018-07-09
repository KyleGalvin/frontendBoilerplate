import * as React from "react";
import * as path from "path";
import { connect } from "react-redux";

import NavBar from "../components/navbar";
import { IAppState, store } from "../stores/store";
import { ModalTypes, ILeftPanelWidget } from "../reducers/reducer";
import LeftPanelItem from "./leftPanelItem";

interface IStateProps {
  "loginModal": boolean;
  "signupModal": boolean;
  "loggedIn": boolean;
  "widgets": ILeftPanelWidget[];
  "selectedWidget": number;
}

const mapStateToProps = (state: IAppState, props: {}): IStateProps => {
  return {
    "loginModal": state.modal === ModalTypes.LOGIN,
    "signupModal": state.modal === ModalTypes.SIGNUP,
    "loggedIn": state.userData.auth !== "",
    "widgets": state.ui.leftPanel.widgets,
    "selectedWidget": state.ui.leftPanel.selectedWidget
  };
};

const Component = (props: IStateProps) => {
  return (
    <div className={"leftPanel"}>
        <div className={"placeholderText"}>
          <NavBar {...props}/>
          <div className="accordionContainer">
            {props.widgets.map((w) => <LeftPanelItem name={w.name}/>)}
          </div>
        </div>
    </div>
  );
};

export default connect(mapStateToProps)(Component);
