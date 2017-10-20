import * as redux from "redux";

import * as http from "../utils/http";
// import Log from "../utils/log";
import Config from "../config/confManager";
import Actions from "../constants/actions";
import * as Store from "../reducers/reducer";
import Winston from "../utils/winston";

export const getData = () => {
  return (dispatch: redux.Dispatch<Store.IAppState>) => {
    // http.get(Config.testDataRoot + '/dist/testData/testModel.json')
    http.get(Config.modelServer)
    .then((response: Store.IAppState) => {
      Winston.info("dispatching data: ", response);
      Winston.info('winston: ', Winston);
      if(!response){
        throw Error("No response returned from server");
      }

      dispatch({
        type: Actions.GET_MODEL,
        user: response.user
      });
    })
    .catch((err: any) => {
      Winston.error("Error getting data: ", err);
    })
  }
}