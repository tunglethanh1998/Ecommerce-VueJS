<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { RouterView } from 'vue-router'

import HeaderComponent from './components/templates/HeaderComponent.vue'
import FooterComponent from './components/templates/FooterComponent.vue'
import CartOverlay from './components/organisms/CartOverlay.vue'

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
  <HeaderComponent @onOpenCart="onToggleCart"></HeaderComponent>
  <RouterView />
  <FooterComponent></FooterComponent>
  <CartOverlay :isShowCart="isShowCart" @onCloseCart="onToggleCart" ref="cartRef" />
</template>

<style scoped></style>
