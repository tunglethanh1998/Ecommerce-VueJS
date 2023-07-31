<template>
  <div
    class="is-layout-constrained wp-block-group alignfull"
    style="margin-top: 0px; margin-bottom: 0px; padding-right: 4.2vw; padding-left: 4.2vw"
  >
    <h2 class="has-text-align-center wp-block-heading" style="font-style: normal; font-weight: 700">
      Our Latest Collections
    </h2>

    <div style="height: 40px" aria-hidden="true" class="wp-block-spacer"></div>

    <div class="is-layout-flex wp-container-25 wp-block-columns alignwide">
      <div class="is-layout-flow wp-block-column">
        <div
          data-block-name="woocommerce/product-new"
          data-columns="4"
          data-rows="1"
          class="wc-block-grid wp-block-product-new wc-block-product-new has-4-columns"
        >
          <ul class="wc-block-grid__products">
            <CardCollection
              v-for="item in getAllProducts"
              :key="item.id"
              :id="item.id"
              :title="item.title"
              :imgSrc="item.imgSrc"
              :unitPrice="item.unitPrice"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardCollection from '../molecules/CardCollection.vue'

export default {
  name: 'ListCardCollection',
  components: {
    CardCollection
  },
  computed: {
    getAllProducts() {
      return this.$store.getters.getAllProducts
    }
  }
}
</script>
