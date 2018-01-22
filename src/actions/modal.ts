export enum ModalActionTypes {
  SIGNUP_MODAL = "MODAL_SIGNUP",
  LOGIN_MODAL = "MODAL_LOGIN",
  CLOSE_MODAL = "MODAL_CLOSE"
}

export interface ISignupModalAction { type: ModalActionTypes.SIGNUP_MODAL } 
export interface ILoginModalAction { type: ModalActionTypes.LOGIN_MODAL } 
export interface ICloseModalAction { type: ModalActionTypes.CLOSE_MODAL } 

export type ModalActions = 
  ISignupModalAction
| ILoginModalAction
| ICloseModalAction