interface IUser {
  firstName: string;
  lastName: string;
  avatar: string;
}

interface IModel {
  user: IUser
}

interface IAction {
  type: string,
  action: any
}