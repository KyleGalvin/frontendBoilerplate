import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";

import { IAppState } from "../stores/store";

// interface IProps {}

// interface IState {}

// interface IConnectedState {}

// interface IConnectedDispatch {}

const mapStateToProps = (state: IAppState, mainPanelProps: {}): {} => ({
  // counter: state.counter,
});

const mapDispatchToProps = (dispatch: redux.Dispatch<IAppState>): {} => ({
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
