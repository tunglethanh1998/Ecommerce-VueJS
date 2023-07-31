<script setup>
import ListCartItemDetail from '../components/organisms/ListCartItemDetail.vue'
import SummarizeCart from '../components/molecules/SummarizeCart.vue'

</script>

<template>
  <div
    class="is-layout-flow wp-block-group has-background-background-color has-background"
    style="
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 32px;
      padding-right: 4.2vw;
      padding-bottom: 32px;
      padding-left: 4.2vw;
    "
  >
    <div
      class="is-layout-constrained wp-block-group alignwide"
      style="padding-top: 50px; padding-bottom: 50px"
    >
      <div data-block-name="woocommerce/cart" class="wp-block-woocommerce-cart alignwide">
        <div class="with-scroll-to-top__scroll-point" aria-hidden="true"></div>
        <div class="">
          <div class="" aria-hidden="false">
            <div
              class="wc-block-components-sidebar-layout wc-block-cart wp-block-woocommerce-filled-cart-block is-large"
            >
              <div
                aria-hidden="true"
                style="
                  position: absolute;
                  inset: 0px;
                  pointer-events: none;
                  opacity: 0;
                  overflow: hidden;
                  z-index: -1;
                "
              ></div>
              <div
                class="wc-block-components-main wc-block-cart__main wp-block-woocommerce-cart-items-block"
              >
                <ListCartItemDetail />
                <hr
                  class="wp-block-separator has-text-color has-color-4-color has-alpha-channel-opacity has-color-4-background-color has-background is-style-wide"
                  style="margin-top: 24px; margin-bottom: 24px"
                />
              </div>

              <SummarizeCart />
            </div>
          </div>
        </div>
        <div style="display: none"></div>
      </div>
    </div>
  </div>
</template>
