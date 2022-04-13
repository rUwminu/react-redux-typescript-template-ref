import { Dispatch } from 'redux'
import { ActionType } from '../constants/todoConstants'

// Action Model
import { Action } from '../actions-models/todoActionModel/todoActionModel'

// Data Model
import { Todo } from '../../model'

export const addTodo = (data: Todo) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.ADD_TODO, payload: data })
}

export const editTodo =
  (itemId: number, task: string) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.EDIT_TODO,
      payload: {
        itemId,
        task,
      },
    })
  }

export const deleteTodo = (todoId: number) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.DELETE_TODO, payload: todoId })
}

export const doneTodo = (todoId: number) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.DONE_TODO, payload: todoId })
}
