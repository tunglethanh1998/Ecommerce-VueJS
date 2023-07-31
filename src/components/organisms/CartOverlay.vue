<template>
  <div
    class="components-modal__screen-overlay wc-block-components-drawer__screen-overlay wc-block-components-drawer__screen-overlay--with-slide-in wc-block-components-drawer__screen-overlay--with-slide-out"
    v-if="isShowCart"
  >
    <div
      class="components-modal__frame wc-block-mini-cart__drawer is-mobile wc-block-components-drawer"
      role="dialog"
      tabindex="-1"
      ref="targetRef"
    >
      <div class="components-modal__content" role="document">
        <div class="components-modal__header">
          <div class="components-modal__header-heading-container"></div>
          <button
            type="button"
            class="components-button has-icon"
            aria-label="Close"
            @click="onClosedCart"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="wc-block-mini-cart__template-part">
          <div
            data-block-name="woocommerce/mini-cart-contents"
            class="wp-block-woocommerce-mini-cart-contents"
          >
            <div class="wp-block-woocommerce-filled-mini-cart-contents-block">
              <h2 class="wp-block-woocommerce-mini-cart-title-block wc-block-mini-cart__title">
                Your cart ({{ getListCarts.length }} items)
              </h2>
              <div
                class="wp-block-woocommerce-mini-cart-items-block wc-block-mini-cart__items"
                tabindex="-1"
              >
                <div
                  class="wp-block-woocommerce-mini-cart-products-table-block wc-block-mini-cart__products-table"
                >
                  <table class="wc-block-cart-items wc-block-mini-cart-items" tabindex="-1">
                    <thead>
                      <tr class="wc-block-cart-items__header">
                        <th class="wc-block-cart-items__header-image"><span>Product</span></th>
                        <th class="wc-block-cart-items__header-product"><span>Details</span></th>
                        <th class="wc-block-cart-items__header-total"><span>Total</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <CartItem
                        v-for="item in getListCarts"
                        :key="item.id"
                        :id="item.id"
                        :title="item.title"
                        :imgSrc="item.imgSrc"
                        :unitPrice="item.unitPrice"
                        :quantity="item.quantity"
                      />
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="wp-block-woocommerce-mini-cart-footer-block wc-block-mini-cart__footer">
                <div class="wc-block-components-totals-item wc-block-mini-cart__footer-subtotal">
                  <span class="wc-block-components-totals-item__label">Subtotal</span
                  ><span
                    class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-totals-item__value"
                    >${{ calSubTotal }}.00</span
                  >
                  <div class="wc-block-components-totals-item__description">
                    Shipping, taxes, and discounts calculated at checkout.
                  </div>
                </div>
                <div class="wc-block-mini-cart__footer-actions">
                  <router-link
                    to="/cart-details"
                    class="components-button wc-block-components-button wp-element-button wc-block-mini-cart__footer-cart outlined"
                  >
                    <span class="wc-block-components-button__text">View my cart</span>
                  </router-link>
                  <router-link
                    to="/cart-details"
                    class="components-button wc-block-components-button wp-element-button wc-block-mini-cart__footer-checkout contained"
                  >
                    <span class="wc-block-components-button__text">Go to checkout</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import CartItem from '../molecules/CartItem.vue'

const targetRef = (ref < HTMLDivElement) | (null > null)

export default {
  props: {
    isShowCart: Boolean
  },
  setup: () => {
    return {
      targetRef
    }
  },
  computed: {
    getListCarts() {
      return this.$store.getters.getCarts
    },
    calSubTotal() {
      let subTotal = 0
      this.$store.getters.getCarts.forEach((cart) => {
        subTotal += parseInt(cart.unitPrice, 10) * parseInt(cart.quantity, 10)
      })
      return subTotal
    }
  },
  methods: {
    onClosedCart() {
      this.$emit('onCloseCart')
    }
  },
  components: {
    CartItem
  }
}
</script>
