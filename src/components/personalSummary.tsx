import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";

import * as Store from "../reducers/reducer";
import * as Config from "../config/confManager";
import { getData } from "../services/server";
// import Log from "../utils/log";

interface IProps {}

interface IState {
  user: IUser;
}

interface IConnectedState {
  user: IUser;
}

interface IConnectedDispatch {
  get: () => void;
}

const mapStateToProps = (state: Store.IAppState, props: IProps): IConnectedState => ({
  user: state.user
});

const mapDispatchToProps = (dispatch: redux.Dispatch<Store.IAppState>): IConnectedDispatch => ({
  get: () => {
    dispatch(getData());
  },
});

class Component extends React.Component<IConnectedState & IConnectedDispatch & IProps, IState> {
  constructor(props: IConnectedState & IConnectedDispatch & IProps) {
    super(props);
  }

  public render() {
    const { user } = this.props;
    return (
      <div>
        <div>{user.firstName} {user.lastName}</div>
        <img src={user.avatar} />
        <div>Content</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
