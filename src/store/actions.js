import axiosInstance from '@/services/axiosInstance.js'
import { onSetLocalStorage } from '../utils/localStorage'
import { AUTHORIZATION } from '../constants'

export default {
  async getListProductsAction({ commit }) {
    try {
      const response = await axiosInstance.get('/products')
      commit('getListProductsMutation', response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  },
  async onSignInAction({ commit }, payload) {
    try {
      const response = await axiosInstance.post(
        'http://mark.io.vn:3000/api/v0/accounts/sign_in',
        payload
      )
      if (response.status === 200) {
        commit('onSignInMutation', response.data)
        onSetLocalStorage(AUTHORIZATION, response.data)
      }
      return response
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  },
  async onSignUpAction({ commit }, payload) {
    try {
      const response = await axiosInstance.post(
        'http://mark.io.vn:3000/api/v0/accounts/sign_up',
        payload
      )
      if (response.status === 200) {
        commit('onSignUpMutation', response.data)
        onSetLocalStorage(AUTHORIZATION, response.data)
      }
      return response
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  },
  async onGetSessionAction({ commit }) {
    try {
      const response = await axiosInstance.get('http://mark.io.vn:3000/api/v0/users/me')
      if (response.status === 200) {
        commit('onGetSessionMutation', response.data)
      }
      return response
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  },
  async onPlaceOrderAction({ commit }, payload) {
    try {
      const response = await axiosInstance.post('http://mark.io.vn:4000/order', payload)
      if (response.status === 201) {
        commit('onPlaceOrderMutation', response.data)
      }
      return response
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  },
  async onGetListOrderAction({ commit }, email) {
    try {
      const response = await axiosInstance.get(`http://mark.io.vn:4000/order/${email}`)
      if (response.status === 200) {
        commit('onGetListOrderMutation', response.data)
      }
      return response
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  },
  onAddQuantityAction({ commit }, id) {
    commit('onAddQuantityMutation', id)
  },
  onRemoveQuantityAction({ commit }, id) {
    commit('onRemoveQuantityMutation', id)
  },
  onRemoveItemCartAction({ commit }, id) {
    commit('onRemoveItemCartMutation', id)
  },
  onChangeQuantityItemAction({ commit }, payload) {
    commit('onChangeQuantityItemMutation', payload)
  },
  onAddToCartAction({ commit }, payload) {
    commit('onAddToCartMutation', payload)
  }
}
