import * as redux from "redux";

import * as ModalActions from "../actions/modal";

export const openLoginModal = () => {
  return (dispatch: redux.Dispatch<null>) => {
    dispatch({
      type: ModalActions.ModalActionTypes.LOGIN_MODAL
    })
  }
}

export const openSignupModal = () => {
  return (dispatch: redux.Dispatch<null>) => {
    dispatch({
      type: ModalActions.ModalActionTypes.SIGNUP_MODAL
    })
  }
}

export const closeModal = () => {
  return (dispatch: redux.Dispatch<null>) => {
    dispatch({
      type: ModalActions.ModalActionTypes.CLOSE_MODAL
    })
  }
}