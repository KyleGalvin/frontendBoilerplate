import { combineReducers } from "redux";
import {Action } from "../actions/actions";

export interface IAppState {
  user: IUser
}

const initialState: IAppState = {
  user: {
    firstName: '',
    lastName: ''
  },
}

function apiUpdate (state: IAppState = initialState, action: Action): IAppState {
  switch (action.type) {
    case 'GOT_DATA':
      return action.state;
    default:
      return state;
  }
}

export const reducers = combineReducers<IAppState>({
  apiUpdate,
});