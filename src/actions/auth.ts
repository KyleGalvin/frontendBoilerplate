import { IState as SignupState } from "../components/signup";
import { IState as LoginState } from "../components/login";

export enum AuthActionTypes {
  SIGN_UP = "AUTH_SIGNUP",
  LOG_IN = "AUTH_LOG_IN"
}

export interface ISignupAction { type: AuthActionTypes.SIGN_UP, user: SignupState } 
export interface ILoginAction { type: AuthActionTypes.LOG_IN, user: LoginState } 

export type AuthAction = 
  ISignupAction
| ILoginAction