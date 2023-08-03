<script setup>
import CartSummarize from '../molecules/CartSummarize.vue'

import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

const email = ref()
const firstName = ref()
const lastName = ref()
const address = ref()
const phone = ref()

const store = useStore()
const router = useRouter()

const computedListCart = computed(() => store.state.listCart)
const calSubTotal = computed(() => {
  let subTotal = 0
  store.getters.getCarts.forEach((cart) => {
    subTotal += parseInt(cart.unitPrice, 10) * parseInt(cart.quantity, 10)
  })
  return subTotal
})

const placeOrder = () => {
  const payload = {
    email: email.value,
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    phone: phone.value,
    items: store.getters.getCarts.map((cart) => ({
      name: cart.title,
      imgSrc: cart.imgSrc,
      quantity: cart.quantity,
      unitPrice: cart.unitPrice
    }))
  }
  store.dispatch('onPlaceOrderAction', payload).then((res) => {
    if (res.status === 201) {
      router.push('/')
    }
  })
}
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
      <div
        data-block-name="woocommerce/checkout"
        class="wp-block-woocommerce-checkout alignwide wc-block-checkout"
      >
        <div class="with-scroll-to-top__scroll-point" aria-hidden="true"></div>
        <div class="wc-block-components-sidebar-layout wc-block-checkout is-large">
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
            class="wc-block-components-main wc-block-checkout__main wp-block-woocommerce-checkout-fields-block"
          >
            <form class="wc-block-components-form wc-block-checkout__form">
              <div class="wp-block-woocommerce-checkout-express-payment-block"></div>

              <fieldset
                class="wc-block-checkout__contact-fields wp-block-woocommerce-checkout-contact-information-block wc-block-components-checkout-step wc-block-components-checkout-step--with-step-number"
                id="contact-fields"
              >
                <legend class="screen-reader-text">Contact information</legend>
                <div class="wc-block-components-checkout-step__heading">
                  <h2
                    class="wc-block-components-title wc-block-components-checkout-step__title"
                    aria-hidden="true"
                  >
                    Contact information
                  </h2>
                  <span class="wc-block-components-checkout-step__heading-content"></span>
                </div>
                <div class="wc-block-components-checkout-step__container">
                  <p class="wc-block-components-checkout-step__description">
                    We'll use this email to send you details and updates about your order.
                  </p>
                  <div class="wc-block-components-checkout-step__content">
                    <div class="wc-block-components-text-input">
                      <input type="email" id="email" placeholder="Email address" v-model="email" />
                    </div>
                  </div>
                </div>
              </fieldset>

              <div
                data-block-name="woocommerce/checkout-shipping-method-block"
                class="wp-block-woocommerce-checkout-shipping-method-block"
              ></div>

              <div
                data-block-name="woocommerce/checkout-pickup-options-block"
                class="wp-block-woocommerce-checkout-pickup-options-block"
              ></div>

              <fieldset
                class="wc-block-checkout__billing-fields wp-block-woocommerce-checkout-billing-address-block wc-block-components-checkout-step wc-block-components-checkout-step--with-step-number"
                id="billing-fields"
              >
                <legend class="screen-reader-text">Billing address</legend>
                <div class="wc-block-components-checkout-step__heading">
                  <h2
                    class="wc-block-components-title wc-block-components-checkout-step__title"
                    aria-hidden="true"
                  >
                    Billing address
                  </h2>
                </div>
                <div class="wc-block-components-checkout-step__container">
                  <p class="wc-block-components-checkout-step__description">
                    Enter the billing address that matches your payment method.
                  </p>
                  <div class="wc-block-components-checkout-step__content">
                    <div id="billing" class="wc-block-components-address-form">
                      <div
                        class="wc-block-components-text-input wc-block-components-address-form__first_name"
                      >
                        <input
                          type="text"
                          id="billing-first_name"
                          autocapitalize="sentences"
                          autocomplete="given-name"
                          aria-label="First name"
                          aria-invalid="false"
                          placeholder="First name"
                          v-model="firstName"
                        />
                      </div>
                      <div
                        class="wc-block-components-text-input wc-block-components-address-form__last_name"
                      >
                        <input
                          type="text"
                          id="billing-last_name"
                          autocapitalize="sentences"
                          autocomplete="family-name"
                          aria-label="Last name"
                          aria-invalid="false"
                          placeholder="Last name"
                          v-model="lastName"
                        />
                      </div>
                      <div
                        class="wc-block-components-text-input wc-block-components-address-form__address_1"
                      >
                        <input
                          type="text"
                          id="billing-address_1"
                          autocapitalize="sentences"
                          autocomplete="address-line1"
                          aria-label="Address"
                          aria-invalid="false"
                          placeholder="Address"
                          v-model="address"
                        />
                      </div>
                    </div>
                    <div class="wc-block-components-text-input">
                      <input
                        type="tel"
                        id="billing-phone"
                        autocapitalize="off"
                        autocomplete="tel"
                        aria-label="Phone"
                        aria-invalid="false"
                        placeholder="Phone"
                        v-model="phone"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>

              <div class="wc-block-checkout__terms wp-block-woocommerce-checkout-terms-block">
                <span
                  >By proceeding with your purchase you agree to our Terms and Conditions and
                  Privacy Policy</span
                >
              </div>

              <div class="wc-block-checkout__actions wp-block-woocommerce-checkout-actions-block">
                <div class="wc-block-checkout__actions_row">
                  <router-link
                    to="/cart-details"
                    class="wc-block-components-checkout-return-to-cart-button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M20 10.8H6.7l4.1-4.5-1.1-1.1-5.8 6.3 5.8 5.8 1.1-1.1-4-3.9H20z"
                      ></path></svg
                    >Return to Cart
                  </router-link>
                  <button
                    type="button"
                    class="components-button wc-block-components-button wp-element-button wc-block-components-checkout-place-order-button contained"
                    @click="placeOrder"
                  >
                    <span class="wc-block-components-button__text">Place Order</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div
            class="wc-block-components-sidebar wc-block-checkout__sidebar wp-block-woocommerce-checkout-totals-block"
          >
            <div class="wp-block-woocommerce-checkout-order-summary-block">
              <div
                class="wp-block-woocommerce-checkout-order-summary-cart-items-block wc-block-components-totals-wrapper"
              >
                <div class="wc-block-components-order-summary wc-block-components-panel">
                  <h2>
                    <button aria-expanded="true" class="wc-block-components-panel__button">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        aria-hidden="true"
                        class="wc-block-components-panel__button-icon"
                        focusable="false"
                      >
                        <path d="M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"></path></svg
                      ><span class="wc-block-components-order-summary__button-text"
                        >Order summary</span
                      >
                    </button>
                  </h2>
                  <div class="wc-block-components-panel__content">
                    <div class="wc-block-components-order-summary__content">
                      <CartSummarize
                        v-for="item in computedListCart"
                        :key="item.id"
                        :imgSrc="item.imgSrc"
                        :title="item.title"
                        :quantity="item.quantity"
                        :unitPrice="item.unitPrice"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="wp-block-woocommerce-checkout-order-summary-coupon-form-block wc-block-components-totals-wrapper"
              >
                <div class="wc-block-components-totals-coupon">
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
                            /><label for="wc-block-components-totals-coupon__input-0"
                              >Enter code</label
                            >
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
                class="wp-block-woocommerce-checkout-order-summary-subtotal-block wc-block-components-totals-wrapper"
              >
                <div class="wc-block-components-totals-item">
                  <span class="wc-block-components-totals-item__label">Subtotal</span
                  ><span
                    class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-totals-item__value"
                    >${{ calSubTotal }}.00</span
                  >
                  <div class="wc-block-components-totals-item__description"></div>
                </div>
              </div>

              <div
                class="wp-block-woocommerce-checkout-order-summary-fee-block wc-block-components-totals-wrapper"
              ></div>

              <div
                class="wp-block-woocommerce-checkout-order-summary-discount-block wc-block-components-totals-wrapper"
              ></div>

              <div class="wc-block-components-totals-wrapper">
                <div class="wc-block-components-totals-item wc-block-components-totals-footer-item">
                  <span class="wc-block-components-totals-item__label">Total</span
                  ><span
                    class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-totals-item__value"
                    >${{ calSubTotal }}.00</span
                  >
                  <div class="wc-block-components-totals-item__description"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="display: none"></div>
      </div>
    </div>

    <footer class="wp-block-template-part">
      <div
        class="is-layout-constrained wp-block-group has-background"
        style="background-color: #fff6f2; padding-bottom: 50px"
      >
        <div class="is-layout-flex wp-container-32 wp-block-columns alignwide">
          <div class="is-layout-flow wp-block-column">
            <div
              class="is-layout-flex wp-container-30 wp-block-columns alignwide"
              style="padding-top: 30px"
            >
              <div
                class="is-layout-flow wp-block-column is-vertically-aligned-top"
                style="padding-right: 0"
              >
                <h4 class="has-text-align-center" style="margin-top: 0px">Offers</h4>

                <nav
                  class="is-vertical is-content-justification-center is-layout-flex wp-container-19 items-justified-center is-vertical wp-block-navigation"
                  aria-label="Offers"
                >
                  <ul class="wp-block-navigation__container">
                    <li class="wp-block-navigation-item wp-block-navigation-link">
                      <a class="wp-block-navigation-item__content" href="#"
                        ><span class="wp-block-navigation-item__label">Coupons</span></a
                      >
                    </li>
                    <li class="wp-block-navigation-item wp-block-navigation-link">
                      <a class="wp-block-navigation-item__content" href="#"
                        ><span class="wp-block-navigation-item__label">Flash Sale</span></a
                      >
                    </li>
                    <li class="wp-block-navigation-item wp-block-navigation-link">
                      <a class="wp-block-navigation-item__content" href="#"
                        ><span class="wp-block-navigation-item__label">Reward Points</span></a
                      >
                    </li>
                    <li class="wp-block-navigation-item wp-block-navigation-link">
                      <a class="wp-block-navigation-item__content" href="#"
                        ><span class="wp-block-navigation-item__label">Gift Card</span></a
                      >
                    </li>
                  </ul>
                </nav>
              </div>

              <div
                class="is-layout-flow wp-block-column is-vertically-aligned-top"
                style="padding-right: 0"
              >
                <h4 class="has-text-align-center" style="margin-top: 0px">Occasions</h4>

                <nav
                  class="is-vertical is-content-justification-center is-layout-flex wp-container-22 items-justified-center is-vertical wp-block-navigation"
                  aria-label="Occasions"
                >
                  <ul class="wp-block-navigation__container">
                    <li class="wp-block-navigation-item wp-block-navigation-link">
                      <a class="wp-block-navigation-item__content" href="#"
                        ><span class="wp-block-navigation-item__label">Birthday</span></a
                      >
                    </li>
                    <li class="wp-block-navigation-item wp-block-navigation-link">
                      <a class="wp-block-navigation-item__content" href="#"
                        ><span class="wp-block-navigation-item__label">Anniversary</span></a
                      >
                    </li>
                    <li class="wp-block-navigation-item wp-block-navigation-link">
                      <a class="wp-block-navigation-item__content" href="#"
                        ><span class="wp-block-navigation-item__label">Christmas</span></a
                      >
                    </li>
                    <li class="wp-block-navigation-item wp-block-navigation-link">
                      <a class="wp-block-navigation-item__content" href="#"
                        ><span class="wp-block-navigation-item__label">Valentine's</span></a
                      >
                    </li>
                  </ul>
                </nav>
              </div>

              <div
                class="is-layout-flow wp-block-column is-vertically-aligned-top"
                style="padding-right: 0"
              >
                <h4 class="has-text-align-center" style="margin-top: 0px">Recipient</h4>

                <nav
                  class="is-vertical is-content-justification-center is-layout-flex wp-container-25 items-justified-center is-vertical wp-block-navigation"
                  aria-label="Recipient"
                >
                  <ul class="wp-block-navigation__container">
                    <li class="wp-block-navigation-item wp-block-navigation-link">
                      <a class="wp-block-navigation-item__content" href="#"
                        ><span class="wp-block-navigation-item__label">Kids</span></a
                      >
                    </li>
                    <li class="wp-block-navigation-item wp-block-navigation-link">
                      <a class="wp-block-navigation-item__content" href="#"
                        ><span class="wp-block-navigation-item__label">Mother</span></a
                      >
                    </li>
                    <li class="wp-block-navigation-item wp-block-navigation-link">
                      <a class="wp-block-navigation-item__content" href="#"
                        ><span class="wp-block-navigation-item__label">Father</span></a
                      >
                    </li>
                    <li class="wp-block-navigation-item wp-block-navigation-link">
                      <a class="wp-block-navigation-item__content" href="#"
                        ><span class="wp-block-navigation-item__label">Corporate Clients</span></a
                      >
                    </li>
                  </ul>
                </nav>
              </div>

              <div
                class="is-layout-flow wp-block-column is-vertically-aligned-top"
                style="padding-right: 0"
              >
                <h4 class="has-text-align-center" style="margin-top: 0px">Delivery Info</h4>

                <nav
                  class="is-vertical is-content-justification-center is-layout-flex wp-container-28 items-justified-center is-vertical wp-block-navigation"
                  aria-label="Delivery Info"
                >
                  <ul class="wp-block-navigation__container">
                    <li class="wp-block-navigation-item wp-block-navigation-link">
                      <a class="wp-block-navigation-item__content" href="#"
                        ><span class="wp-block-navigation-item__label">Order Status</span></a
                      >
                    </li>
                    <li class="wp-block-navigation-item wp-block-navigation-link">
                      <a class="wp-block-navigation-item__content" href="#"
                        ><span class="wp-block-navigation-item__label">Privacy Policy</span></a
                      >
                    </li>
                    <li class="wp-block-navigation-item wp-block-navigation-link">
                      <a class="wp-block-navigation-item__content" href="#"
                        ><span class="wp-block-navigation-item__label">QR Code</span></a
                      >
                    </li>
                    <li class="wp-block-navigation-item wp-block-navigation-link">
                      <a class="wp-block-navigation-item__content" href="#"
                        ><span class="wp-block-navigation-item__label"
                          >Terms &amp; Conditions</span
                        ></a
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr
        class="wp-block-separator has-text-color has-alpha-channel-opacity has-background is-style-wide"
        style="margin-top: 0; margin-bottom: 0; background-color: #d9d9d9; color: #d9d9d9"
      />

      <div
        class="is-layout-flex wp-container-35 wp-block-columns has-background"
        style="
          background-color: #fff6f2;
          margin-top: 0;
          margin-bottom: 0;
          padding-top: 10px;
          padding-right: 0;
          padding-bottom: 10px;
          padding-left: 0;
        "
      >
        <div class="is-layout-flow wp-block-column">
          <p class="has-text-align-center">© Blissful | Built by ThemeGrill</p>
        </div>
      </div>
    </footer>
  </div>
</template>
