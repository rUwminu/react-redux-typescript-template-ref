import thunk from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux'

import reducer from './reducers/index'

import { Product, ProductInCart } from '../UtilsModels/Model'

// dumy product
import { productData } from '../DumyData/ProductData'

export interface ShoppingCartState {
  productList: Array<Product>
  cartList: Array<ProductInCart>
}

export interface AppState {
  storeInfo: ShoppingCartState
}

const initialState: AppState = {
  storeInfo: {
    productList: [...productData],
    cartList: [],
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
