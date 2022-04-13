import { ProductInCart } from '../../UtilsModels/Model'
import { ActionType } from '../constants/storeConstants'

interface AddItemAction {
  type: ActionType.ADD_CART_ITEM
  payload: ProductInCart
}

interface IncreaseItemAction {
  type: ActionType.INCREASE_CART_ITEM
  payload: number
}

interface DecreaseItemAction {
  type: ActionType.DECREASE_CART_ITEM
  payload: number
}

interface DeleteItemAction {
  type: ActionType.DELETE_CART_ITEM
  payload: number
}

export type Action =
  | AddItemAction
  | IncreaseItemAction
  | DecreaseItemAction
  | DeleteItemAction
