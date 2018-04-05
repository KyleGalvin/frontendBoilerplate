import { suite, test, slow, timeout } from "mocha-typescript";
import * as actions from '../src/actions/auth';
import * as authService from "../src/services/auth";
import { IState as SignupState } from "../src/components/signup";

@suite class AuthProviderTests {
  @test async canCreateUserAndLogin() {
    actions.AuthActionTypes.SIGN_UP;
    var signupState: SignupState = {
      "username": "",
      "email": "",
      "firstName": "",
      "lastName": "",
      "password": "",
      "altPassword": "",
      "validUsername": true,
      "validEmail": true,
      "validPassword": true,
      "passwordMatch": true
    }
    var signupState: SignupState
    var action: actions.ISignupAction = { 
      type: actions.AuthActionTypes.SIGN_UP, 
      access_token: signupState } 
  }
}