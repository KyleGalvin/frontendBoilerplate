import * as path from "path";
import { combineReducers } from "redux";

import {Action } from "../actions/actions";
import Logger from "../utils/logger";

const logger = Logger(path.normalize(path.basename(__filename)));

export interface IAppState {
  user: IUser
}

const initialState: IUser = {
  firstName: "",
  lastName: "",
  avatar: ""
}

function user (state: IUser = initialState, action: Action): IUser {
  logger.info({obj:action}, 'reducer hit:');
  switch (action.type) {
    case 'GET_MODEL':
      logger.info({obj:{action: action, state: state}}, 'reducer GET_MODEL ');
      return action.user;
    default:
    logger.info({obj:state}, 'reducer default ');
      return state;
  }
}

export const reducers = combineReducers<IAppState>({
  user
});