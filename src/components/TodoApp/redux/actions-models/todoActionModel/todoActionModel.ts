import { Todo } from '../../../model'
import { ActionType } from '../../constants/todoConstants'

interface AddTodoAction {
  type: ActionType.ADD_TODO
  payload: Todo
}

interface EditTodoAction {
  type: ActionType.EDIT_TODO
  payload: {
    itemId: number
    task: string
  }
}

interface DeleteTodoAction {
  type: ActionType.DELETE_TODO
  payload: number
}

interface DoneTodoAction {
  type: ActionType.DONE_TODO
  payload: number
}

export type Action =
  | AddTodoAction
  | EditTodoAction
  | DeleteTodoAction
  | DoneTodoAction
