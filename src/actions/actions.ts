import * as redux from 'redux'

import { IAppState } from "../reducers/reducer";
import * as State from '../reducers/reducer';

// type Q<T> = { request: T }
// type S<T> = { response: T }
// type E = { error: Error }

// type apiFunc<Q, S> = (q: Q) => Promise<S>

//actions
export type Action =
// API Requests
   { type: 'GET_MODEL', user: IUser }

// export const setData = (state: IAppState): Action => ({
//   type: 'GET_MODEL',
//   state
// })

// export type ApiActionGroup<_Q, _S> = {
//   request: (q?: _Q)         => Action & Q<_Q>
//   success: (s: _S, q?: _Q)  => Action & Q<_Q> & S<_S>
//   error: (e: Error, q?: _Q) => Action & Q<_Q> & E
// }

// function apiActionGroupFactory<Q, S>(x: ApiActionGroup<Q, S>, go: apiFunc<Q, S>) {
//   return (request: Q) => (dispatch: redux.Dispatch<State.IAppState>) => {
//     dispatch(x.request(request))
//     go(request)
//       .then((response) => dispatch(x.success(response, request)))
//       .catch((e: Error) => dispatch(x.error(e, request)))
//   }
// }

// export const saveCount = apiActionGroupFactory(_saveCount, api.save)