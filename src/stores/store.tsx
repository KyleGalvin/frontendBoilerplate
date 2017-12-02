import * as redux from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import * as Reducers from "../reducers/reducer";

export interface IAppState {
  user: IUser;
}

export const initialState: IAppState = { 
  user: {
    firstName: "",
    lastName: "",
    avatar: ""
  }
};

export const Store: redux.Store<IAppState> = redux.createStore(
  Reducers.reducers,
  initialState,
  composeWithDevTools((redux.applyMiddleware(thunk)))
);
