import { suite, test, slow, timeout } from "mocha-typescript";
import 'isomorphic-fetch';

import * as actions from '../src/actions/auth';
import * as userService from "../src/services/user";
import { IState as SignupState } from "../src/components/signup";
import * as Store from "../src/stores/store";

@suite class AuthProviderTests {
  
  @test async canCreateUserAndLogin() {
    
    actions.AuthActionTypes.SIGN_UP;
    var signupData: SignupState = {
      "username": "myUser",
      "email": "myUser@example.com",
      "firstName": "first",
      "lastName": "last",
      "password": "password",
      "altPassword": "password",
      "validUsername": true,
      "validEmail": true,
      "validPassword": true,
      "passwordMatch": true
    }

    await Store.store.dispatch(userService.signup(signupData));
    const signupState = Store.store.getState();
    console.log("signupState: ", signupState);
    const newUser = Store.store.getState().user;
    await Store.store.dispatch(userService.del(newUser));


    //dispatch action. maybe rename access_token?

  }
}