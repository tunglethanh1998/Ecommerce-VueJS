<script setup>
import Banner from '../components/organisms/Banner.vue'
import ListProductCategory from '../components/organisms/ListProductCategory.vue'
import ListCardCollection from '../components/organisms/ListCardCollection.vue'
import PackLoveAndCare from '../components/organisms/PackLoveAndCare.vue'
import JoyOfSurprises from '../components/organisms/JoyOfSurprises.vue'
import BlissFull from '../components/organisms/BlissFull.vue'
import AlluringProducts from '../components/organisms/AlluringProducts.vue'

import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(() => {
  store.dispatch('getListProductsAction')
})
</script>

<template>
  <div class="is-layout-flow wp-block-group" style="margin-top: 0; margin-bottom: 0">
    <div class="is-layout-constrained entry-content wp-block-post-content">
      <div
        class="is-layout-constrained wp-container-53 wp-block-group alignfull"
        style="margin-top: 0px"
      >
        <Banner />
        <ListProductCategory />
        <ListCardCollection />
        <PackLoveAndCare />
        <JoyOfSurprises />
        <BlissFull />
        <AlluringProducts />
      </div>
    </div>
  </div>
</template>
