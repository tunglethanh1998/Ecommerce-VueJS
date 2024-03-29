import { CART_STORAGE } from '../constants'
import { onSetLocalStorage } from '../utils/localStorage'

export default {
  onAddQuantityMutation(state, cartId) {
    const cartItemIndex = state.listCart.findIndex((cart) => cart.id === cartId)
    state.listCart[cartItemIndex].quantity =
      parseInt(state.listCart[cartItemIndex].quantity, 10) + 1
    onSetLocalStorage(CART_STORAGE, state.listCart)
  },
  onRemoveQuantityMutation(state, cartId) {
    const cartItemIndex = state.listCart.findIndex((cart) => cart.id === cartId)
    if (state.listCart[cartItemIndex].quantity > 1) {
      state.listCart[cartItemIndex].quantity =
        parseInt(state.listCart[cartItemIndex].quantity, 10) - 1
      onSetLocalStorage(CART_STORAGE, state.listCart)
    }
  },
  onRemoveItemCartMutation(state, cartId) {
    state.listCart = state.listCart.filter((cart) => cart.id !== cartId)
    onSetLocalStorage(CART_STORAGE, state.listCart)
  },
  onChangeQuantityItemMutation(state, payload) {
    const cartItemIndex = state.listCart.findIndex((cart) => cart.id === payload.id)
    state.listCart[cartItemIndex].quantity = payload.newQuantity
    onSetLocalStorage(CART_STORAGE, state.listCart)
  },
  onAddToCartMutation(state, payload) {
    const cartItemIndex = state.listCart.findIndex((cart) => cart.id === payload.id)
    if (cartItemIndex === -1) {
      state.listCart.push(payload)
      onSetLocalStorage(CART_STORAGE, state.listCart)
    } else {
      this.commit('onAddQuantityMutation', payload.id)
    }
  },
  getListProductsMutation(state, listProducts) {
    if (listProducts.length) {
      state.listProducts = listProducts
    }
  },
  onSignInMutation(state, data) {
    state.auth.isAuth = true
    state.auth.accessToken = data.accessToken
    state.auth.refreshToken = data.refreshToken
    state.auth.profile = data.profile
  },
  onSignUpMutation(state, data) {
    state.auth.isAuth = true
    state.auth.accessToken = data.accessToken
    state.auth.refreshToken = data.accessToken
  },
  onGetSessionMutation(state, data) {
    state.auth.isAuth = true
    state.auth.profile = {
      ...data
    }
  },
  onPlaceOrderMutation(state) {
    state.listCart = []
    onSetLocalStorage(CART_STORAGE, [])
  },
  onGetListOrderMutation(state, data) {
    state.listOrder = data.orders
  },
}
