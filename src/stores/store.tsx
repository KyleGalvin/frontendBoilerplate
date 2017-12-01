import * as redux from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IAppState {
  user: IUser
}

export const initialState: IAppState = { 
  user:{
    firstName: "",
    lastName: "",
    avatar: ""
  }
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
import * as Reducers from "../reducers/reducer";
export const Store: redux.Store<IAppState> = redux.createStore(
  Reducers.reducers,
  initialState,
  composeWithDevTools((redux.applyMiddleware(thunk)))
);