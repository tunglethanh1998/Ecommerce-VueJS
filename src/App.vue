<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { RouterView } from 'vue-router'

import Header from '@/components/templates/header.vue'
import Footer from '@/components/templates/Footer.vue'
import Cart from '@/components/organisms/Cart.vue'

const isShowCart = ref(false)
const isFirstShow = ref(true)
const cartRef = ref(null)

const onToggleCart = () => {
  isShowCart.value = !isShowCart.value
  isFirstShow.value = true
}

const handleClickOutside = (event) => {
  if (isFirstShow.value) {
    isFirstShow.value = false
    return
  }
  if (!event.target || !cartRef.value) return
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <Header @onOpenCart="onToggleCart"></Header>
  <RouterView />
  <Footer></Footer>
  <Cart :isShowCart="isShowCart" @onCloseCart="onToggleCart" ref="cartRef" />
</template>

<style scoped></style>
