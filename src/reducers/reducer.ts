import * as path from "path";
import { combineReducers } from "redux";

import {Action } from "../actions/actions";
import Logger from "../utils/logger";

const logger = Logger(path.basename(__filename));

export interface IAppState {
  user: IUser
}

const initialState: IUser = {
  firstName: "",
  lastName: "",
  avatar: ""
}

function user (state: IUser = initialState, action: Action): IUser {
  logger.info('reducer hit: ', action);
  switch (action.type) {
    case 'GET_MODEL':
      logger.info('reducer GET_MODEL ', action, state);
      return action.user;
    default:
    logger.info('reducer default ', state);
      return state;
  }
}

export const reducers = combineReducers<IAppState>({
  user
});