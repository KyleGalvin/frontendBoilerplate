export enum UIActionTypes {
  TOGGLE_MENU = "UI_MENU_TOGGLE"
}

export interface IToggleMenuAction { type: UIActionTypes.TOGGLE_MENU, open: boolean } 

export type UIActions = 
  IToggleMenuAction