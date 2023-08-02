<template>
  <div
    class="wc-block-components-sidebar wc-block-cart__sidebar wp-block-woocommerce-cart-totals-block"
  >
    <div class="wp-block-woocommerce-cart-order-summary-block">
      <h2
        class="wc-block-components-title wp-block-woocommerce-cart-order-summary-heading-block wc-block-cart__totals-title"
      >
        Cart totals
      </h2>

      <div
        class="wp-block-woocommerce-cart-order-summary-coupon-form-block wc-block-components-totals-wrapper"
      >
        <div class="wc-block-components-totals-coupon">
          <a
            role="button"
            href="#wc-block-components-totals-coupon__form"
            class="wc-block-components-totals-coupon-link"
            aria-label="Add a coupon"
            >Add a coupon</a
          >
          <div class="">
            <div class="" aria-hidden="false">
              <div class="wc-block-components-totals-coupon__content screen-reader-text">
                <form
                  class="wc-block-components-totals-coupon__form"
                  id="wc-block-components-totals-coupon__form"
                >
                  <div
                    class="wc-block-components-text-input wc-block-components-totals-coupon__input"
                  >
                    <input
                      type="text"
                      id="wc-block-components-totals-coupon__input-0"
                      autocapitalize="off"
                      autocomplete="off"
                      aria-label="Enter code"
                      aria-invalid="false"
                      title=""
                      value=""
                    /><label for="wc-block-components-totals-coupon__input-0">Enter code</label>
                  </div>
                  <button
                    type="submit"
                    disabled=""
                    class="components-button wc-block-components-button wp-element-button wc-block-components-totals-coupon__button contained"
                  >
                    <span class="wc-block-components-button__text">Apply</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="wp-block-woocommerce-cart-order-summary-subtotal-block wc-block-components-totals-wrapper"
      >
        <div class="wc-block-components-totals-item">
          <span class="wc-block-components-totals-item__label">Subtotal</span
          ><span
            class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-totals-item__value"
            >${{ subTotal }}.00</span
          >
          <div class="wc-block-components-totals-item__description"></div>
        </div>
      </div>

      <div
        class="wp-block-woocommerce-cart-order-summary-fee-block wc-block-components-totals-wrapper"
      ></div>

      <div
        class="wp-block-woocommerce-cart-order-summary-discount-block wc-block-components-totals-wrapper"
      ></div>

      <div class="wc-block-components-totals-wrapper">
        <div class="wc-block-components-totals-item wc-block-components-totals-footer-item">
          <span class="wc-block-components-totals-item__label">Total</span
          ><span
            class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-totals-item__value"
            >${{ subTotal }}.00</span
          >
          <div class="wc-block-components-totals-item__description"></div>
        </div>
      </div>
    </div>

    <div
      class="wc-block-cart__payment-options wp-block-woocommerce-cart-express-payment-block"
    ></div>

    <div class="wc-block-cart__submit wp-block-woocommerce-proceed-to-checkout-block">
      <div
        aria-hidden="true"
        style="inset: 0px; opacity: 0; pointer-events: none; position: absolute; z-index: -1"
      ></div>
      <div class="wc-block-cart__submit-container">
        <router-link
          to="/check-out"
          class="components-button wc-block-components-button wp-element-button wc-block-cart__submit-button contained"
        >
          <span class="wc-block-components-button__text">Proceed to Checkout</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const subTotal = computed(() => {
  let subTotalTemp = 0
  store.state.listCart.forEach((item) => {
    subTotalTemp += item.unitPrice * item.quantity
  })
  return subTotalTemp
})
</script>
