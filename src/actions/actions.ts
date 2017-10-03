import * as redux from 'redux'

import { IAppState } from "../reducers/reducer";
import * as State from '../reducers/reducer';

//actions
export type Action =
// API Requests
   { type: 'GET_MODEL', user: IUser }