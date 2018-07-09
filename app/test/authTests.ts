import { suite, test, slow, timeout } from "mocha-typescript";
import "isomorphic-fetch";
import * as assert from "assert";
import * as jwt from "jsonwebtoken";

import * as userService from "../src/services/user";
import { IState as SignupState } from "../src/components/signup";
import * as Store from "../src/stores/store";

@suite class AuthProviderTests {

  @test public async canCreateUserAndLogin() {

    const signupData: SignupState = {
      "username": "myUser",
      "email": "myUser@example.com",
      "firstName": "first",
      "lastName": "last",
      "password": "password",
      "altPassword": "password",
      "validUsername": true,
      "validEmail": true,
      "validPassword": true,
      "passwordMatch": true,
      "contacts": []
    };

    await Store.store.dispatch(userService.signup(signupData));
    const signupState = Store.store.getState();

    const jwtData = jwt.decode(Store.store.getState().userData.auth) as any;
    await Store.store.dispatch(userService.getUser(jwtData.id));
    const newUser = Store.store.getState().userData.users[0];

    await Store.store.dispatch(userService.del(newUser));
    const deletedUser = Store.store.getState().userData.users[0];

    assert.equal("first", newUser.firstName);
    assert.notEqual(0, newUser.id);

    // dispatch action. maybe rename access_token?

  }
}
