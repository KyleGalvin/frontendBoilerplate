import { combineReducers } from "redux";
import {Action } from "../actions/actions";

export interface IAppState {
  user: IUser
}

const initialState: IUser = {
  firstName: "",
  lastName: "",
  avatar: ""
}

function user (state: IUser = initialState, action: Action): IUser {
  console.log('reducer hit: ', action);
  switch (action.type) {
    case 'GET_MODEL':
      console.log('reducer GET_MODEL ', action, state);
      return action.user;
    default:
    console.log('reducer default ', state);
      return state;
  }
}

export const reducers = combineReducers<IAppState>({
  user
});