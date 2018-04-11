export enum UserActionTypes {
  GET_USER = "USER_GET_USER"
}

export interface IUserAction { type: UserActionTypes.GET_USER, user: IUser } 


export type UserAction = 
  IUserAction