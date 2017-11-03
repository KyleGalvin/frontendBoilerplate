interface IUser {
  firstName: string;
  lastName: string;
  avatar: string;
}

interface IAction {
  type: string,
  action: any
}

interface IUserCreationRequest {
  username: string,
  password: string,
  email: string
}

interface IUserCreationResponse {
  status: string
}
