import * as redux from "redux";

import * as http from "../utils/http";
// import Log from "../utils/log";
import * as Config from "../config/confManager";
import Actions from "../constants/actions";
import * as Store from "../reducers/reducer";

// const mapDispatchToProps = (dispatch: redux.Dispatch<Store.IAppState>): IConnectedDispatch => ({
//   gotData: (state: Store.IAppState) => {
//     Log.info("got data: ", state);
//     dispatch(setData(state));
//   },
// });

export const getData = () => {
  return (dispatch: redux.Dispatch<Store.IAppState>) => {
    http.get(Config.default.modelServer + '/dist/data/testModel.json')
    .then((response: Store.IAppState) => {
      console.log("dispatching data: ", response);
      dispatch({
        type: Actions.GET_MODEL,
        state: response
      });
    })
  }
}