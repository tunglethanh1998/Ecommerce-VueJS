<template>
  <table class="wc-block-cart-items wp-block-woocommerce-cart-line-items-block" tabindex="-1">
    <thead>
      <tr class="wc-block-cart-items__header">
        <th class="wc-block-cart-items__header-image"><span>Product</span></th>
        <th class="wc-block-cart-items__header-product"><span>Details</span></th>
        <th class="wc-block-cart-items__header-total"><span>Total</span></th>
      </tr>
    </thead>
    <tbody>
      <CartItemDetail
        v-for="item in computedListCart"
        :key="item.id"
        :id="item.id"
        :imgSrc="item.imgSrc"
        :title="item.title"
        :unitPrice="item.unitPrice"
        :quantity="item.quantity"
      />
    </tbody>
  </table>
</template>

<script setup>
import { computed } from 'vue'
import CartItemDetail from '../molecules/CartItemDetail.vue'
import { useStore } from 'vuex'

const store = useStore()
const computedListCart = computed(() => store.state.listCart)
</script>
