import * as AuthActions from "./auth";

export enum ActionTypes {
  GET_MODEL = 'ACTION_GET_MODEL'
}

export interface IUserAction { type: ActionTypes.GET_MODEL, user: IUser } 

//export interface OtherAction { type: string }

//actions
export type Action = 
  IUserAction
& AuthActions.AuthAction

 