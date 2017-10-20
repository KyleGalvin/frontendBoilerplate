import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";

import * as Store from "../reducers/reducer";

// interface IProps {}

// interface IState {}

// interface IConnectedState {}

// interface IConnectedDispatch {}

const mapStateToProps = (state: Store.IAppState, mainPanelProps: {}): {} => ({
  // counter: state.counter,
});

const mapDispatchToProps = (dispatch: redux.Dispatch<Store.IAppState>): {} => ({
  // gotData: (state: Store.IAppState) => {
  //   dispatch(setData(state))
  // },
});

class Component extends React.Component<{}, {}> {
  public render() {
    return (<div>Contacts</div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
