import { Dispatch } from 'redux'
import { ActionType } from '../constants/storeConstants'

// Action Models
import { Action } from '../actions-models/storeActionModel'

import { ProductInCart } from '../../UtilsModels/Model'

export const addItemToCart =
  (data: ProductInCart) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_CART_ITEM,
      payload: data,
    })
  }

export const increaseItemQuantity =
  (itemId: number) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.INCREASE_CART_ITEM,
      payload: itemId,
    })
  }

export const decreaseItemQuantity =
  (itemId: number) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DECREASE_CART_ITEM,
      payload: itemId,
    })
  }

export const removeItemInCart =
  (itemId: number) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_CART_ITEM,
      payload: itemId,
    })
  }
