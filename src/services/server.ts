import * as path from "path";
import * as redux from "redux";

import * as http from "../utils/http";
import Config from "../config/confManager";
import Actions from "../constants/actions";
import * as Store from "../reducers/reducer";
import Logger from "../utils/logger";

const logger = Logger(path.normalize(path.basename(__filename)));
console.log('server.ts creating logger: ', __filename);

export const getData = () => {
  return (dispatch: redux.Dispatch<Store.IAppState>) => {
    // http.get(Config.testDataRoot + '/dist/testData/testModel.json')
    http.get(Config.modelServer)
    .then((response: Store.IAppState) => {
      logger.info("dispatching data: ", response);
      if(!response){
        throw Error("No response returned from server");
      }

      dispatch({
        type: Actions.GET_MODEL,
        user: response.user
      });
    })
    .catch((err: any) => {
      logger.error("Error getting data: ", err);
    })
  }
}