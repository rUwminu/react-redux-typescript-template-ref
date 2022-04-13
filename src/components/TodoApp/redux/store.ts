import thunk from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux'

// Combined Reducer
import reducer from './reducers/index'

// Model
import { Todo } from '../model'

export interface TodoListState {
  todoList: Array<Todo>
  tempArr: Array<Todo>
}

export interface AppState {
  todoInfo: TodoListState
}

const initialState: AppState = {
  todoInfo: {
    todoList: [],
    tempArr: [],
  },
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
)

export default store
