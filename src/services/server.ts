import * as redux from "redux";

import * as http from "../utils/http";
// import Log from "../utils/log";
import * as Config from "../config/confManager";
import Actions from "../constants/actions";
import * as Store from "../reducers/reducer";

export const getData = () => {
  return (dispatch: redux.Dispatch<Store.IAppState>) => {
    // http.get(Config.default.testDataRoot + '/dist/testData/testModel.json')
    http.get(Config.default.modelServer)
    .then((response: Store.IAppState) => {
      console.log("dispatching data: ", response);
      if(!response){
        return Promise.reject("No response returned from server");
      }

      dispatch({
        type: Actions.GET_MODEL,
        user: response.user
      });
    })
    .catch((err: any) => {
      console.log("Error getting data: ", err);
    })
  }
}