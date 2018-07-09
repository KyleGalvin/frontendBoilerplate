import * as path from "path";
import * as redux from "redux";
import * as jwt from "jsonwebtoken";

import * as http from "../utils/http";
import { config } from "../config";
import * as UserActions from "../actions/user";
import * as Store from "../stores/store";
import Logger from "../utils/logger";
import { IState as ISignupState } from "../components/signup";
import { IUserSerialized } from "../models/IUserSerialized";

const logger = Logger(path.normalize(path.basename(__filename)));

export const signup = (state: ISignupState) => {
  return async (dispatch: redux.Dispatch<IUserSerialized>) => {
    try {
      const response = await http.put(config.authDomain + "/user/signup", state);

      logger.info({"obj": response}, "signup response data: ");
      if (!response) {
        throw Error("No response returned from server");
      }

      dispatch({
        "type": UserActions.UserActionTypes.SIGN_UP,
        "authToken": response.authToken,
        "user": response.user
      });
    } catch (err) {
      logger.error("Error getting data: ", err);
    }
  };
};

export const getUser = (userId: string) => {
  return async (dispatch: redux.Dispatch<IUserSerialized>) => {
    try {
      const response = await http.get(config.authDomain + "/user/" + userId);

      logger.info({"obj": response}, "dispatching data: " + JSON.stringify(response));
      if (!response) {
        throw Error("No response returned from server");
      }

      dispatch({
        "type": UserActions.UserActionTypes.GET_USER,
        "user": response
      });
    } catch (err) {
      logger.error("Error getting data: ", err);
    }
  };
};

export const del = (state: IUserSerialized) => {
  return async (dispatch: redux.Dispatch<IUserSerialized>) => {
    try {
      const response = await http.del(config.authDomain + "/user/" + state.id);

      logger.info({"obj": response}, "dispatching data: ");
      if (!response) {
        throw Error("No response returned from server");
      }

      dispatch({
        "type": UserActions.UserActionTypes.LOG_OUT
      });
    } catch (err) {
      logger.error("Error getting data: ", err);
    }
  };
};

export const login = (state: Store.ILoginFormData) => {
  return async (dispatch: redux.Dispatch<IUserSerialized>) => {
    try {
      const response = await http.put(config.authDomain + "/user/login", state);

      logger.info({"obj": response}, "dispatching data: ");
      if (!response) {
        throw Error("No response returned from server");
      }

      dispatch({
       "type": UserActions.UserActionTypes.LOG_IN,
        "authToken": response.authToken,
        "user": response.user
      });
    } catch (err) {
      logger.error("Error getting data: ", err);
    }
  };
};

export const logout = () => {
  return async (dispatch: redux.Dispatch<IUserSerialized>) => {
    dispatch({
      "type": UserActions.UserActionTypes.LOG_OUT
    });
  };
};
