import * as redux from 'redux'
import { IAppState } from "../stores/store";
import * as State from '../reducers/reducer';


export enum ActionTypes {
  GET_MODEL = 'ACTION_GET_MODEL'
}

export interface IUserAction { type: ActionTypes.GET_MODEL, user: IUser } 

//export interface OtherAction { type: string }

//actions
export type Action = 
  IUserAction
//| OtherAction

 