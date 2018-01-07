import * as redux from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import * as Reducers from "../reducers/reducer";

export interface ILoginFormData {
  "username": string;
  "password": string;
}

export interface IAppState {
  "user": IUser;
  "auth": string;
  "forms": Reducers.IForms;
}

export const initialState: IAppState = {
  "user": {
    "firstName": "",
    "lastName": "",
    "avatar": ""
  },
  "auth": window.sessionStorage.accessToken || "",
  "forms": Reducers.initialFormsState
};

export const Store: redux.Store<IAppState> = redux.createStore(
  Reducers.reducers,
  initialState,
  composeWithDevTools((redux.applyMiddleware(thunk)))
);
