import { IAppState } from "../reducers/reducer";

//actions
export type Action =
// API Requests
   { type: 'GOT_DATA', state: IAppState }

export const setData = (state: IAppState): Action => ({
  type: 'GOT_DATA',
  state
})
