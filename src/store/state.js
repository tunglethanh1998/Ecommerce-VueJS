import { CART_STORAGE } from '../constants'
import { onGetLocalStorage } from '../utils/localStorage'

export default {
  auth: {
    isAuth: false,
    accessToken: '',
    refreshToken: '',
    profile: {}
  },
  listCart: onGetLocalStorage(CART_STORAGE),
  listProducts: [],
  listOrder: []
}
