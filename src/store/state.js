import { CART_STORAGE } from '../constants'
import { onGetLocalStorage } from '../utils/localStorage'

export default {
  listCart: onGetLocalStorage(CART_STORAGE),
  listProducts: []
}
