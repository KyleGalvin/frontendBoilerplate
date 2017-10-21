import { combineReducers } from "redux";
import {Action } from "../actions/actions";
import Winston from "../utils/winston";

export interface IAppState {
  user: IUser
}

const initialState: IUser = {
  firstName: "",
  lastName: "",
  avatar: ""
}

function user (state: IUser = initialState, action: Action): IUser {
  // Winston.info('reducer hit: ', action);
  switch (action.type) {
    case 'GET_MODEL':
      // Winston.info('reducer GET_MODEL ', action, state);
      return action.user;
    default:
    // Winston.info('reducer default ', state);
      return state;
  }
}

export const reducers = combineReducers<IAppState>({
  user
});