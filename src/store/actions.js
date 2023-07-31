import axiosInstance from '@/services/axiosInstance.js'

export default {
  async getListProductsAction({ commit }) {
    try {
      const response = await axiosInstance.get('/products')
      commit('getListProductsMutation', response.data)
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
