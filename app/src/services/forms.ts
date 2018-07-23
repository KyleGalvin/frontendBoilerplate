import * as redux from "redux";

import {store} from "../stores/store";
import { IForms } from "../reducers/reducer";
import * as FormActions from "../actions/forms";

export const loginEditUsername = (username: string) => {
  return (dispatch: redux.Dispatch<IForms>) => {
    dispatch({
      "type": FormActions.FormActionTypes.LOGIN_EDIT,
      "data": {
        ...store.getState().forms.login,
        ...{
          "username": username
        }
      }
    });
  };
};

export const loginEditPassword = (password: string) => {
  return (dispatch: redux.Dispatch<IForms>) => {
    dispatch({
      "type": FormActions.FormActionTypes.LOGIN_EDIT,
      "data": {
        ...store.getState().forms.login,
        ...{
          "password": password
        }
      }
    });
  };
};

export const signupEditPassword = (password: string) => {
  return (dispatch: redux.Dispatch<IForms>) => {
    const oldForm = store.getState().forms.signup;
    dispatch({
      "type": FormActions.FormActionTypes.SIGNUP_EDIT,
      "data": {
        ...oldForm,
        ...{
          "password": password,
          "validPassword": password !== null,
          "passwordMatch": password === oldForm.altPassword
        }
      }
    });
  };
};

export const signupEditAltPassword = (altPassword: string) => {
  return (dispatch: redux.Dispatch<IForms>) => {
    const oldForm = store.getState().forms.signup;
    dispatch({
      "type": FormActions.FormActionTypes.SIGNUP_EDIT,
      "data": {
        ...oldForm,
        ...{
          "altPassword": altPassword,
          "passwordMatch": altPassword === oldForm.password
        }
      }
    });
  };
};

export const signupEditEmail = (email: string) => {
  return (dispatch: redux.Dispatch<IForms>) => {
    const emailRegex = /\S+@\S+/;
    dispatch({
      "type": FormActions.FormActionTypes.SIGNUP_EDIT,
      "data": {
        ...store.getState().forms.signup,
        ...{
          "email": email,
          "validEmail": emailRegex.test(email)
        }
      }
    });
  };
};

export const signupEditLastName = (lastName: string) => {
  return (dispatch: redux.Dispatch<IForms>) => {
    dispatch({
      "type": FormActions.FormActionTypes.SIGNUP_EDIT,
      "data": {...store.getState().forms.signup, ...{"lastName": lastName}}
    });
  };
};

export const signupEditFirstName = (firstName: string) => {
  return (dispatch: redux.Dispatch<IForms>) => {
    dispatch({
      "type": FormActions.FormActionTypes.SIGNUP_EDIT,
      "data": {...store.getState().forms.signup, ...{"firstName": firstName}}
    });
  };
};

export const signupEditUsername = (username: string) => {
  return (dispatch: redux.Dispatch<IForms>) => {
    dispatch({
      "type": FormActions.FormActionTypes.SIGNUP_EDIT,
      "data": {
        ...store.getState().forms.signup,
        ...{
          "username": username,
          "validUsername": username !== null
        }
      }
    });
  };
};
