import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";

import { setData } from "../actions/actions";
import * as Store from "../reducers/reducer";
import * as Config from "../config/confManager";
import Log from "../utils/log";

interface IProps {}

interface IState {
  user: IUser;
}

interface IConnectedState {}

interface IConnectedDispatch {}

const mapStateToProps = (state: Store.IAppState, props: IProps): IConnectedState => ({
  // counter: state.counter,
});

const mapDispatchToProps = (dispatch: redux.Dispatch<Store.IAppState>): IConnectedDispatch => ({
  gotData: (state: Store.IAppState) => {
    Log.info("got data: ", state);
    dispatch(setData(state));
  },
});

class Component extends React.Component<IProps, IState> {
  public render() {
    return (
      <div>
        <div>Image</div>
        <img src={""} />
        <div>Content</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
