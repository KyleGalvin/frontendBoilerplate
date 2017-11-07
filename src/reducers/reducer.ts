import * as redux from 'redux'
import * as path from "path";
import { combineReducers } from "redux";
import * as Actions from "../actions/actions";
import Logger from "../utils/logger";
import * as Store from "../stores/store";

const logger = Logger(path.basename(__filename));



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
        const newState: IUser = (action as Actions.IUserAction).user;
        return newState;
      default:
      logger.info({obj:state}, 'reducer default ');
        return state;
    }


}
const statePropertyToReducerMap = {
  user: (userReducer as redux.Reducer<IUser>)
}

export const reducers = combineReducers<Store.IAppState>(statePropertyToReducerMap);