import * as React from "react";
import * as redux from 'redux';
import { connect } from 'react-redux';

import { setData } from '../actions/actions';
import * as Store from '../reducers/reducer';
import * as Config from "../config/confManager";

interface IProps {};

interface IState {};

interface IConnectedState {};

interface IConnectedDispatch {};

const mapStateToProps = (state: Store.IAppState, mainPanelProps: IProps): IConnectedState => ({
  // counter: state.counter,
})

const mapDispatchToProps = (dispatch: redux.Dispatch<Store.IAppState>): IConnectedDispatch => ({
  gotData: (state: Store.IAppState) => {
    dispatch(setData(state))
  },
})

class Component extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <div>Image</div>
        <img src={ Config.default.modelServer + '/dist/data/avatar.jpg'} />
        <div>Content</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)