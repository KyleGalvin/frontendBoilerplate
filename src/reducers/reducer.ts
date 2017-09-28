import { combineReducers } from "redux";
import {Action } from "../actions/actions";

export interface IAppState {
  user: IUser
}

const initialState: IAppState = {
  user: {
    firstName: "",
    lastName: "",
    avatar: ""
  },
}

function apiUpdate (state: IAppState = initialState, action: Action): IAppState {
  console.log('reducer hit');
  switch (action.type) {
    case 'GET_MODEL':
      console.log('reducer GET_MODEL ', action);
      return action.state;
    default:
      return state;
  }
}

export const reducers = combineReducers<IAppState>({
  apiUpdate,
});