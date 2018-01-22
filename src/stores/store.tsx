import * as redux from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "History";
import { routerMiddleware } from "react-router-redux";

import * as Reducers from "../reducers/reducer";

export interface ILoginFormData {
  "username": string;
  "password": string;
}

export interface IAppState {
  "modal": Reducers.ModalTypes;
  "auth": string;
  "forms": Reducers.IForms;
}

export const initialState: IAppState = {
  "modal": Reducers.ModalTypes.NONE,
  "auth": window.sessionStorage.accessToken || "",
  "forms": Reducers.initialFormsState
};

export const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);

export const store: redux.Store<IAppState> = redux.createStore(
  Reducers.reducers,
  initialState,
  composeWithDevTools((redux.applyMiddleware(thunk, historyMiddleware)))
);
