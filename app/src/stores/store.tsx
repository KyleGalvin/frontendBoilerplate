import * as redux from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";

import * as Reducers from "../reducers/reducer";
import { IUserSerialized } from "../models/IUserSerialized";

export interface ILoginFormData {
  "username": string;
  "password": string;
}

export interface IAppState {
  "modal": Reducers.ModalTypes;
  "forms": Reducers.IForms;
  "ui": Reducers.IUIState;
  "userData": IUserData;
}

export interface IUserData {
  "currentUserId": number;
  "auth": string;
  "users": IUserSerialized[];
}

export const initialState: IAppState = {
  "modal": Reducers.ModalTypes.NONE,
  "userData": {
    "currentUserId": 0,
    "auth": window.sessionStorage ? window.sessionStorage.accessToken || "" : "",
    "users": []
  },
  "forms": Reducers.initialFormsState,
  "ui": Reducers.initialUIState
};

export const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);

export const store: redux.Store<IAppState> = redux.createStore(
  Reducers.reducers,
  initialState,
  composeWithDevTools((redux.applyMiddleware(thunk, historyMiddleware)))
);
