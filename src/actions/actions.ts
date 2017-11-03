import * as redux from 'redux'
import { IAppState } from "../reducers/reducer";
import * as State from '../reducers/reducer';


export enum ActionTypes {
  GET_MODEL = 'GET_MODEL'
}

export interface UserAction { type: ActionTypes.GET_MODEL, user: IUser } 

//export interface OtherAction { type: string }

//actions
export type Action = 
  UserAction
//| OtherAction

 