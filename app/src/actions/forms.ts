import { ILoginFormData } from "../stores/store";
import { ISignupFormData } from "../reducers/reducer";

export enum FormActionTypes {
  SIGNUP_EDIT = "FORM_SIGNUP_EDIT",
  LOGIN_EDIT = "FORM_LOGIN_EDIT",
}


export interface ISignupFormEditAction { type: FormActionTypes.SIGNUP_EDIT, data: ISignupFormData } 
export interface ILoginFormEditAction { type: FormActionTypes.LOGIN_EDIT, data: ILoginFormData } 

export type FormActions = 
  ILoginFormEditAction
| ISignupFormEditAction