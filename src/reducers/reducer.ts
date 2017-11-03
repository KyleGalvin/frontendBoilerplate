import * as redux from 'redux'
import * as path from "path";
import { combineReducers } from "redux";
import * as Actions from "../actions/actions";
import Logger from "../utils/logger";

const logger = Logger(path.basename(__filename));

export interface IAppState {
  user: IUser
}

export const initialState: IAppState = { 
  user:{
    firstName: "",
    lastName: "",
    avatar: ""
  }
}

const initialUserState: IUser = { 
  firstName: "",
  lastName: "",
  avatar: ""
}

function userReducer (state: IUser = initialUserState, action: Actions.Action): IUser{
  logger.info({obj:{action: action, state: state}}, 'reducer hit:');

    switch (action.type) {
      case Actions.ActionTypes.GET_MODEL:
        logger.info({obj:{action: action, state: state}}, 'reducer GET_MODEL ');
        const newState: IUser = (action as Actions.UserAction).user;
        return newState;
      default:
      logger.info({obj:state}, 'reducer default ');
        return state;
    }


}
const statePropertyToReducerMap = {
  user: (userReducer as redux.Reducer<IUser>)
}

export const reducers = combineReducers<IAppState>(statePropertyToReducerMap);