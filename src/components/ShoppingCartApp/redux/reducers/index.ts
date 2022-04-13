import { combineReducers } from 'redux'

import { AppState } from '../store'

// Reduces
import { storeReducer } from './storeReducer'

const reducer = combineReducers<AppState>({
  storeInfo: storeReducer,
})

export default reducer

export type State = ReturnType<typeof reducer>
