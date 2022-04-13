import { Action } from '../actions-models/storeActionModel'
import { ActionType } from '../constants/storeConstants'

import { ShoppingCartState } from '../store'

export const storeReducer: (
  state: ShoppingCartState | undefined,
  actions: Action
) => ShoppingCartState = (
  state = { productList: [], cartList: [] },
  action
) => {
  switch (action.type) {
    case ActionType.ADD_CART_ITEM:
      let isExist = state.cartList.find((x) => x.id === action.payload.id)

      if (isExist) {
        return {
          ...state,
          cartList: state.cartList.map((x) =>
            x.id === action.payload.id ? { ...x, quantity: x.quantity + 1 } : x
          ),
        }
      }
      return { ...state, cartList: [...state.cartList, action.payload] }
    case ActionType.INCREASE_CART_ITEM:
      return {
        ...state,
        cartList: state.cartList.map((x) =>
          x.id === action.payload ? { ...x, quantity: x.quantity + 1 } : x
        ),
      }
    case ActionType.DECREASE_CART_ITEM:
      return {
        ...state,
        cartList: state.cartList.map((x) =>
          x.id === action.payload
            ? x.quantity > 1
              ? { ...x, quantity: x.quantity - 1 }
              : x
            : x
        ),
      }
    case ActionType.DELETE_CART_ITEM:
      return {
        ...state,
        cartList: state.cartList.filter((x) => x.id !== action.payload),
      }
    default:
      return state
  }
}
