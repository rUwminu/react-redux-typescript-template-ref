import { Action } from '../actions-models/todoActionModel/todoActionModel'
import { ActionType } from '../constants/todoConstants'

import { TodoListState } from '../store'

export const todoReducer: (
  state: TodoListState | undefined,
  action: Action
) => TodoListState = (state = { todoList: [], tempArr: [] }, action) => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return { ...state, todoList: [...state.todoList, action.payload] }
    case ActionType.EDIT_TODO:
      return {
        ...state,
        todoList: state.todoList.map((x) =>
          x.id === action.payload.itemId
            ? { ...x, task: action.payload.task }
            : x
        ),
      }
    case ActionType.DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((x) => x.id !== action.payload),
      }
    case ActionType.DONE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((x) =>
          x.id === action.payload ? { ...x, isCompleted: !x.isCompleted } : x
        ),
      }
    default:
      return state
  }
}
