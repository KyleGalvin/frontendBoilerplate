import { IState as SignupState } from "../components/signup";
import { ILoginFormData } from "../stores/store";

export enum AuthActionTypes {
  SIGN_UP = "AUTH_SIGNUP",
  LOG_IN = "AUTH_LOG_IN",
  LOG_OUT = "AUTH_LOG_OUT"
}

export interface ISignupAction { type: AuthActionTypes.SIGN_UP, access_token: SignupState } 
export interface ILoginAction { type: AuthActionTypes.LOG_IN, access_token: ILoginFormData } 
export interface ILogoutAction { type: AuthActionTypes.LOG_OUT }

export type AuthAction = 
  ISignupAction
| ILoginAction
| ILogoutAction