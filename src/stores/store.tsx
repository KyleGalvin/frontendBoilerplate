import * as redux from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import * as Reducers from "../reducers/reducer";

export interface IAppState {
  user: IUser;
  auth: {};
  signupForm: ISignupForm | null;
}

export interface ISignupFormField {
  "label": string;
  "name": string;
  "type": string;
  "onChange": (event: React.ChangeEvent<HTMLInputElement>) => void
  "status": boolean;
}
export interface ISignupForm {
  "username": ISignupFormField;
  "email": ISignupFormField;
  "firstName": ISignupFormField;
  "lastName": ISignupFormField;
  "password": ISignupFormField;
  "altPassword": ISignupFormField;
}

export const initialState: IAppState = {
  "user": {
    "firstName": "",
    "lastName": "",
    "avatar": ""
  },
  "auth": {},
  "signupForm": null
};

export const Store: redux.Store<IAppState> = redux.createStore(
  Reducers.reducers,
  initialState,
  composeWithDevTools((redux.applyMiddleware(thunk)))
);
