import * as redux from 'redux'
import * as path from "path";
import { combineReducers } from "redux";

import * as Actions from "../actions/actions";
import * as AuthActions from "../actions/auth";
import * as FormActions from "../actions/forms";
import * as ModalActions from "../actions/modal";
import * as UIActions from "../actions/ui";
import Logger from "../utils/logger";
import * as Store from "../stores/store";
import { ILoginFormData } from '../stores/store';
import { ModalActionTypes } from '../actions/modal';

const logger = Logger(path.basename(__filename));

export interface IForms {
  "login": ILoginFormData;
  "signup": ISignupFormData;
}

export interface UIState {
  "preferencesDropdownToggle": boolean;
}

export interface ISignupFormField {
  "label": string;
  "name": string;
  "type": string;
  "onChange": (event: React.ChangeEvent<HTMLInputElement>) => void;
  "status": boolean;
}

export interface ISignupFormData {
  "username": string;
  "email": string;
  "firstName": string;
  "lastName": string;
  "password": string;
  "altPassword": string;
  "validUsername": boolean;
  "validEmail": boolean;
  "validPassword": boolean;
  "passwordMatch": boolean;
}

export const initialUIState = {
  "preferencesDropdownToggle": false
}
const initialSignupFormState = {
  "username": "",
  "email": "",
  "firstName": "",
  "lastName": "",
  "password": "",
  "altPassword": "",
  "validUsername": false,
  "validEmail": false,
  "validPassword": false,
  "passwordMatch": true
}

export enum ModalTypes {
  LOGIN = "MODAL_LOGIN",
  SIGNUP = "MODAL_SIGNUP",
  NONE = "MODAL_NONE"
}

const initialLoginFormState: ILoginFormData =  {
  "username": "",
  "password": ""
}

export const initialFormsState = {
  "login": initialLoginFormState,
  "signup": initialSignupFormState
}

const initialUserState: IUser = {
  firstName: "",
  lastName: "",
  avatar: ""
}

function userReducer (state: IUser = initialUserState, action: Actions.Action): IUser{
  logger.info({obj:{action: action, state: state}}, 'reducer hit:');
  switch (action.type) {
    case Actions.ActionTypes.GET_MODEL:
      logger.info({obj:{action: action, state: state}}, 'reducer GET_MODEL ');
      return (action as Actions.IUserAction).user;
    default:
    logger.info({obj:state}, 'userReducer default ');
      return state;
  }
}

function authReducer (state: {} = {}, action: AuthActions.AuthAction): {} {
  logger.info({obj:{action: action, state: state}}, 'reducer hit:');
  switch (action.type) {
    case AuthActions.AuthActionTypes.SIGN_UP:
    case AuthActions.AuthActionTypes.LOG_IN:
      logger.info({obj:{action: action, state: state}}, 'reducer SIGN_UP');
      window.sessionStorage.accessToken = (action as AuthActions.ISignupAction).access_token;
      return (action as AuthActions.ISignupAction).access_token;
    case AuthActions.AuthActionTypes.LOG_OUT:
      delete window.sessionStorage.accessToken;
      return "";
    default:
    logger.info({obj:state}, 'authReducer default ');
      return state;
  }
}

function formReducer (state: IForms = initialFormsState, action: FormActions.FormActions): IForms {
  logger.info({obj:{action: action, state: state}}, 'reducer hit:');
  switch (action.type) {
    case FormActions.FormActionTypes.LOGIN_EDIT: 
      return {
        ...state,
        "login": (action as FormActions.ILoginFormEditAction).data
      }
    case FormActions.FormActionTypes.SIGNUP_EDIT: 
      return {
        ...state,
        "signup": (action as FormActions.ISignupFormEditAction).data
      }
  }
  return state;

}

function modalReducer (state: ModalTypes = ModalTypes.NONE, action: ModalActions.ModalActions): ModalTypes {
  switch (action.type) {
    case ModalActions.ModalActionTypes.LOGIN_MODAL:
      return ModalTypes.LOGIN;
    case ModalActions.ModalActionTypes.SIGNUP_MODAL:
      return ModalTypes.SIGNUP;
    case ModalActions.ModalActionTypes.CLOSE_MODAL:
      return ModalTypes.NONE;
  }
  return state;
}

function uiReducer (state: UIState = initialUIState, action: UIActions.UIActions): UIState {
  switch (action.type) {
    case UIActions.UIActionTypes.TOGGLE_MENU:
      return {"preferencesDropdownToggle": action.open};
  }

  return state;
}

const statePropertyToReducerMap = {
  modal: (modalReducer as redux.Reducer<ModalTypes>),
  user: (userReducer as redux.Reducer<IUser>),
  auth: (authReducer as redux.Reducer<{}>),
  forms: (formReducer as redux.Reducer<IForms>),
  ui: (uiReducer as redux.Reducer<UIState>)
}

export const reducers = combineReducers<Store.IAppState>(statePropertyToReducerMap);