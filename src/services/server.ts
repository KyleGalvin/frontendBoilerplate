import * as path from "path";
import * as redux from "redux";

import * as http from "../utils/http";
import { config } from "../config";
import * as Actions from "../actions/actions";
import * as Store from "../reducers/reducer";
import Logger from "../utils/logger";

const logger = Logger(path.normalize(path.basename(__filename)));
console.log('server.ts creating logger: ', __filename);

export const getUserData = () => {
  return async (dispatch: redux.Dispatch<IUser>) => {
    try {
      let response = await http.get(config.authDomain);

      logger.info({obj: response}, "dispatching data: ");
      if(!response){
        throw Error("No response returned from server");
      }

      dispatch({
        type: Actions.ActionTypes.GET_MODEL,
        user: response.user
      });
    } catch (err) {
      logger.error("Error getting data: ", err);
    }
  }
}