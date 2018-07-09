import * as redux from "redux";

import * as UIActions from "../actions/ui";
import { store } from "../stores/store";

export const toggleMenu = () => {
  return (dispatch: redux.Dispatch<null>) => {
    dispatch({
      type: UIActions.UIActionTypes.TOGGLE_MENU,
      open: !store.getState().ui.preferencesDropdownToggle
    })
  }
}
