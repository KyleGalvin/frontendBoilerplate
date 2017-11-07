import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { IAppState } from "../stores/store";
// import SignUp from "./signUp";

// interface IProps {}

// interface IState {}

// interface IConnectedState {}

// interface IConnectedDispatch {}

const mapStateToProps = (state: IAppState, mainPanelProps: {}): {} => ({
  // counter: state.counter,
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): {} => ({
  // gotData: (state: Store.IAppState) => {
  //   dispatch(setData(state))
  // },
});

class Component extends React.Component<{}, {}> {
  public render() {
    // return (<div>Main Panel <SignUp /></div>);
    return (<div>Main Panel</div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
