<script setup>
import ListCardCollection from './ListCardCollection.vue'
</script>

<template>
  <div
    class="is-layout-constrained wp-block-group alignfull"
    style="margin-top: 100px; margin-bottom: 100px; padding-right: 4.2vw; padding-left: 4.2vw"
  >
    <h2 class="has-text-align-center wp-block-heading" style="font-style: normal; font-weight: 700">
      Alluring Products
    </h2>

    <div class="is-layout-flex wp-container-47 wp-block-columns alignwide">
      <div class="is-layout-flow wp-block-column">
        <div
          data-block-name="woocommerce/handpicked-products"
          data-columns="4"
          data-orderby="price_desc"
          data-products="[149,244,246,138]"
          class="wc-block-grid wp-block-handpicked-products wc-block-handpicked-products has-4-columns has-multiple-rows"
        >
          <ListCardCollection />
        </div>
      </div>
    </div>
  </div>
</template>
