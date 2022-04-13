import { combineReducers } from 'redux'

import { AppState } from '../store'

// Reduces
import { todoReducer } from './todoReducer'

const reducer = combineReducers<AppState>({
  todoInfo: todoReducer,
})

export default reducer

export type State = ReturnType<typeof reducer>
