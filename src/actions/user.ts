import { IState as SignupState } from "../components/signup";
import { ILoginFormData } from "../stores/store";
import { IUserSerialized } from "../models/IUserSerialized";

export enum UserActionTypes {
  SIGN_UP = "USER_SIGNUP",
  LOG_IN = "USER_LOG_IN",
  LOG_OUT = "USER_LOG_OUT",
  GET_USER = "USER_GET_USER"
}

export interface ISignupAction { type: UserActionTypes.SIGN_UP; authToken: string; user: IUserSerialized; }
export interface ILoginAction { type: UserActionTypes.LOG_IN; authToken: string; user: IUserSerialized; }
export interface ILogoutAction { type: UserActionTypes.LOG_OUT; }
export interface IUserAction { type: UserActionTypes.GET_USER; user: IUserSerialized; }

export type UserAction =
  ISignupAction
| ILoginAction
| ILogoutAction
| IUserAction;
