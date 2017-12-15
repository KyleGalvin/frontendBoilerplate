import * as redux from 'redux'
import * as path from "path";
import { combineReducers } from "redux";
import * as Actions from "../actions/actions";
import * as AuthActions from "../actions/auth";
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
        return (action as Actions.IUserAction).user;
      default:
      logger.info({obj:state}, 'userReducer default ');
        return state;
    }
}

function authReducer (state: {} = {}, action: AuthActions.AuthAction): {} {
  logger.info({obj:{action: action, state: state}}, 'reducer hit:');

    switch (action.type) {
      case AuthActions.AuthActionTypes.SIGN_UP:
        logger.info({obj:{action: action, state: state}}, 'reducer SIGN_UP');
        window.sessionStorage.accessToken = (action as AuthActions.ISignupAction).access_token;
        return state;
      default:
      logger.info({obj:state}, 'authReducer default ');
        return state;
    }
}
const statePropertyToReducerMap = {
  user: (userReducer as redux.Reducer<IUser>),
  auth: (authReducer as redux.Reducer<{}>)
}

export const reducers = combineReducers<Store.IAppState>(statePropertyToReducerMap);