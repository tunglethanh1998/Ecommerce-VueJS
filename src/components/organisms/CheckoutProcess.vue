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
                      <input
                        type="email"
                        id="email"
                        autocapitalize="off"
                        autocomplete="email"
                        aria-label="Email address"
                        aria-invalid="false"
                        title=""
                        value=""
                      /><label for="email">Email address</label>
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
                          title=""
                          value=""
                        /><label for="billing-first_name">First name</label>
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
                          title=""
                          value=""
                        /><label for="billing-last_name">Last name</label>
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
                          title=""
                          value=""
                        /><label for="billing-address_1">Address</label>
                      </div>
                      <div
                        class="wc-block-components-text-input wc-block-components-address-form__address_2"
                      >
                        <input
                          type="text"
                          id="billing-address_2"
                          autocapitalize="sentences"
                          autocomplete="address-line2"
                          aria-label="Apartment, suite, etc. (optional)"
                          aria-invalid="false"
                          title=""
                          value=""
                        /><label for="billing-address_2">Apartment, suite, etc. (optional)</label>
                      </div>
                      <div class="wc-block-components-country-input">
                        <div id="billing-country" class="wc-block-components-combobox is-active">
                          <div>
                            <div
                              class="components-base-control wc-block-components-combobox-control components-combobox-control css-1wzzj1a e1puf3u3"
                            >
                              <div class="components-base-control__field css-1kyqli5 e1puf3u2">
                                <label
                                  class="components-base-control__label css-4dk55l e1puf3u1"
                                  for="components-form-token-input-0"
                                  >Country/Region</label
                                >
                                <div
                                  class="components-combobox-control__suggestions-container"
                                  tabindex="-1"
                                >
                                  <div
                                    data-wp-c16t="true"
                                    data-wp-component="Flex"
                                    class="components-flex css-dfwk0q css-0 em57xhy0"
                                  >
                                    <div
                                      data-wp-c16t="true"
                                      data-wp-component="FlexBlock"
                                      class="components-flex-item components-flex-block css-106zala css-0 em57xhy0"
                                    >
                                      <input
                                        id="components-form-token-input-0"
                                        type="text"
                                        aria-label="United States (US), Country/Region"
                                        size="19"
                                        class="components-combobox-control__input components-form-token-field__input"
                                        autocomplete="off"
                                        role="combobox"
                                        aria-expanded="false"
                                        aria-autocomplete="list"
                                        aria-describedby="components-form-token-suggestions-howto-0"
                                        value="United States (US)"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="wc-block-components-text-input wc-block-components-address-form__city"
                      >
                        <input
                          type="text"
                          id="billing-city"
                          autocapitalize="sentences"
                          autocomplete="address-level2"
                          aria-label="City"
                          aria-invalid="false"
                          title=""
                          value=""
                        /><label for="billing-city">City</label>
                      </div>
                      <div
                        id="billing-state"
                        class="wc-block-components-combobox wc-block-components-state-input is-active"
                      >
                        <div>
                          <div
                            class="components-base-control wc-block-components-combobox-control components-combobox-control css-1wzzj1a e1puf3u3"
                          >
                            <div class="components-base-control__field css-1kyqli5 e1puf3u2">
                              <label
                                class="components-base-control__label css-4dk55l e1puf3u1"
                                for="components-form-token-input-1"
                                >State</label
                              >
                              <div
                                class="components-combobox-control__suggestions-container"
                                tabindex="-1"
                              >
                                <div
                                  data-wp-c16t="true"
                                  data-wp-component="Flex"
                                  class="components-flex css-dfwk0q css-0 em57xhy0"
                                >
                                  <div
                                    data-wp-c16t="true"
                                    data-wp-component="FlexBlock"
                                    class="components-flex-item components-flex-block css-106zala css-0 em57xhy0"
                                  >
                                    <input
                                      id="components-form-token-input-1"
                                      type="text"
                                      aria-label="California, State"
                                      size="11"
                                      class="components-combobox-control__input components-form-token-field__input"
                                      autocomplete="off"
                                      role="combobox"
                                      aria-expanded="false"
                                      aria-autocomplete="list"
                                      aria-describedby="components-form-token-suggestions-howto-1"
                                      value="California"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="wc-block-components-text-input wc-block-components-address-form__postcode"
                      >
                        <input
                          type="text"
                          id="billing-postcode"
                          autocapitalize="characters"
                          autocomplete="postal-code"
                          aria-label="ZIP Code"
                          aria-invalid="false"
                          title=""
                          value=""
                        /><label for="billing-postcode">ZIP Code</label>
                      </div>
                    </div>
                    <div class="wc-block-components-text-input">
                      <input
                        type="tel"
                        id="billing-phone"
                        autocapitalize="off"
                        autocomplete="tel"
                        aria-label="Phone (optional)"
                        aria-invalid="false"
                        title=""
                        value=""
                      /><label for="billing-phone">Phone (optional)</label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset
                class="wc-block-checkout__payment-method wp-block-woocommerce-checkout-payment-block wc-block-components-checkout-step wc-block-components-checkout-step--with-step-number"
                id="payment-method"
              >
                <legend class="screen-reader-text">Payment options</legend>
                <div class="wc-block-components-checkout-step__heading">
                  <h2
                    class="wc-block-components-title wc-block-components-checkout-step__title"
                    aria-hidden="true"
                  >
                    Payment options
                  </h2>
                </div>
                <div class="wc-block-components-checkout-step__container">
                  <div class="wc-block-components-checkout-step__content">
                    <div
                      class="wc-block-checkout__no-payment-methods-notice woocommerce-message woocommerce-error components-notice is-info"
                    >
                      <div class="components-notice__content">
                        There are no payment methods available. This may be an error on our side.
                        Please contact us if you need any help placing your order.
                        <div class="components-notice__actions"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>

              <div
                class="wc-block-checkout__order-notes wp-block-woocommerce-checkout-order-note-block wc-block-components-checkout-step"
                id="order-notes"
              >
                <div class="wc-block-components-checkout-step__container">
                  <div class="wc-block-components-checkout-step__content">
                    <div class="wc-block-checkout__add-note">
                      <div class="wc-block-components-checkbox">
                        <label for="checkbox-control-0"
                          ><input
                            id="checkbox-control-0"
                            class="wc-block-components-checkbox__input"
                            type="checkbox"
                            aria-invalid="false"
                          /><svg
                            class="wc-block-components-checkbox__mark"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 20"
                          >
                            <path
                              d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                            ></path></svg><span class="wc-block-components-checkbox__label"
                            >Add a note to your order</span
                          ></label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="wc-block-checkout__terms wp-block-woocommerce-checkout-terms-block">
                <span
                  >By proceeding with your purchase you agree to our Terms and Conditions and
                  Privacy Policy</span
                >
              </div>

              <div class="wc-block-checkout__actions wp-block-woocommerce-checkout-actions-block">
                <div class="wc-block-checkout__actions_row">
                  <a
                    href="https://themegrilldemos.com/blissful/cart/"
                    class="wc-block-components-checkout-return-to-cart-button"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M20 10.8H6.7l4.1-4.5-1.1-1.1-5.8 6.3 5.8 5.8 1.1-1.1-4-3.9H20z"
                      ></path></svg>Return to Cart</a
                  ><button
                    type="button"
                    class="components-button wc-block-components-button wp-element-button wc-block-components-checkout-place-order-button contained"
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
                        <path d="M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"></path></svg><span class="wc-block-components-order-summary__button-text">Order summary</span
                      >
                    </button>
                  </h2>
                  <div class="wc-block-components-panel__content">
                    <div class="wc-block-components-order-summary__content">
                      <div class="wc-block-components-order-summary-item">
                        <div class="wc-block-components-order-summary-item__image">
                          <div class="wc-block-components-order-summary-item__quantity">
                            <span aria-hidden="true">2</span
                            ><span class="screen-reader-text">2 items</span>
                          </div>
                          <img
                            class="wc-block-components-product-image"
                            src="https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/03/teddy-bear-300x408.jpg"
                            alt="Soft Teddy Bear"
                          />
                        </div>
                        <div class="wc-block-components-order-summary-item__description">
                          <span class="wc-block-components-product-name">Soft Teddy Bear</span
                          ><span
                            class="wc-block-components-order-summary-item__individual-prices price wc-block-components-product-price"
                            ><span
                              class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value wc-block-components-order-summary-item__individual-price"
                              >$50.00</span
                            ></span
                          >
                          <div class="wc-block-components-product-metadata">
                            <div class="wc-block-components-product-metadata__description">
                              <p>
                                Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh.
                                Curabitur aliquet am id dui posuere blandit…
                              </p>
                            </div>
                          </div>
                        </div>
                        <span class="screen-reader-text"
                          >Total price for 2 Soft Teddy Bear items: $100.00</span
                        >
                        <div
                          class="wc-block-components-order-summary-item__total-price"
                          aria-hidden="true"
                        >
                          <span class="price wc-block-components-product-price"
                            ><span
                              class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value"
                              >$100.00</span
                            ></span
                          >
                        </div>
                      </div>
                      <div class="wc-block-components-order-summary-item">
                        <div class="wc-block-components-order-summary-item__image">
                          <div class="wc-block-components-order-summary-item__quantity">
                            <span aria-hidden="true">1</span
                            ><span class="screen-reader-text">1 item</span>
                          </div>
                          <img
                            class="wc-block-components-product-image"
                            src="https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/03/handmade-ceramic-cup-300x408.jpg"
                            alt="Handmade Ceramic Cup"
                          />
                        </div>
                        <div class="wc-block-components-order-summary-item__description">
                          <span class="wc-block-components-product-name">Handmade Ceramic Cup</span
                          ><span
                            class="wc-block-components-order-summary-item__individual-prices price wc-block-components-product-price"
                            ><span
                              class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value wc-block-components-order-summary-item__individual-price"
                              >$20.00</span
                            ></span
                          >
                          <div class="wc-block-components-product-metadata">
                            <div class="wc-block-components-product-metadata__description">
                              <p>
                                Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh.
                                Curabitur aliquet am id dui posuere blandit…
                              </p>
                            </div>
                          </div>
                        </div>
                        <span class="screen-reader-text"
                          >Total price for 1 Handmade Ceramic Cup item: $20.00</span
                        >
                        <div
                          class="wc-block-components-order-summary-item__total-price"
                          aria-hidden="true"
                        >
                          <span class="price wc-block-components-product-price"
                            ><span
                              class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value"
                              >$20.00</span
                            ></span
                          >
                        </div>
                      </div>
                      <div class="wc-block-components-order-summary-item">
                        <div class="wc-block-components-order-summary-item__image">
                          <div class="wc-block-components-order-summary-item__quantity">
                            <span aria-hidden="true">1</span
                            ><span class="screen-reader-text">1 item</span>
                          </div>
                          <img
                            class="wc-block-components-product-image"
                            src="https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/03/egg-chocolate-300x408.jpg"
                            alt="Egg Chocolate"
                          />
                        </div>
                        <div class="wc-block-components-order-summary-item__description">
                          <span class="wc-block-components-product-name">Egg Chocolate</span
                          ><span
                            class="wc-block-components-order-summary-item__individual-prices price wc-block-components-product-price"
                            ><span
                              class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value wc-block-components-order-summary-item__individual-price"
                              >$45.00</span
                            ></span
                          >
                          <div class="wc-block-components-product-metadata">
                            <div class="wc-block-components-product-metadata__description">
                              <p>
                                Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh.
                                Curabitur aliquet am id dui posuere blandit…
                              </p>
                            </div>
                          </div>
                        </div>
                        <span class="screen-reader-text"
                          >Total price for 1 Egg Chocolate item: $45.00</span
                        >
                        <div
                          class="wc-block-components-order-summary-item__total-price"
                          aria-hidden="true"
                        >
                          <span class="price wc-block-components-product-price"
                            ><span
                              class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value"
                              >$45.00</span
                            ></span
                          >
                        </div>
                      </div>
                      <div class="wc-block-components-order-summary-item">
                        <div class="wc-block-components-order-summary-item__image">
                          <div class="wc-block-components-order-summary-item__quantity">
                            <span aria-hidden="true">2</span
                            ><span class="screen-reader-text">2 items</span>
                          </div>
                          <img
                            class="wc-block-components-product-image"
                            src="https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/03/customized-rings-300x408.jpg"
                            alt="Customized Rings"
                          />
                        </div>
                        <div class="wc-block-components-order-summary-item__description">
                          <span class="wc-block-components-product-name">Customized Rings</span
                          ><span
                            class="wc-block-components-order-summary-item__individual-prices price wc-block-components-product-price"
                            ><span
                              class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value wc-block-components-order-summary-item__individual-price"
                              >$85.00</span
                            ></span
                          >
                          <div class="wc-block-components-product-metadata">
                            <div class="wc-block-components-product-metadata__description">
                              <p>
                                Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh.
                                Curabitur aliquet am id dui posuere blandit…
                              </p>
                            </div>
                          </div>
                        </div>
                        <span class="screen-reader-text"
                          >Total price for 2 Customized Rings items: $170.00</span
                        >
                        <div
                          class="wc-block-components-order-summary-item__total-price"
                          aria-hidden="true"
                        >
                          <span class="price wc-block-components-product-price"
                            ><span
                              class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value"
                              >$170.00</span
                            ></span
                          >
                        </div>
                      </div>
                      <div class="wc-block-components-order-summary-item">
                        <div class="wc-block-components-order-summary-item__image">
                          <div class="wc-block-components-order-summary-item__quantity">
                            <span aria-hidden="true">1</span
                            ><span class="screen-reader-text">1 item</span>
                          </div>
                          <img
                            class="wc-block-components-product-image"
                            src="https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/03/vase-with-roses-300x408.jpg"
                            alt="Roses with vase"
                          />
                        </div>
                        <div class="wc-block-components-order-summary-item__description">
                          <span class="wc-block-components-product-name">Roses with vase</span
                          ><span
                            class="wc-block-components-order-summary-item__individual-prices price wc-block-components-product-price"
                            ><span
                              class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value wc-block-components-order-summary-item__individual-price"
                              >$85.00</span
                            ></span
                          >
                          <div class="wc-block-components-product-metadata">
                            <div class="wc-block-components-product-metadata__description">
                              <p>
                                Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh.
                                Curabitur aliquet am id dui posuere blandit…
                              </p>
                            </div>
                          </div>
                        </div>
                        <span class="screen-reader-text"
                          >Total price for 1 Roses with vase item: $85.00</span
                        >
                        <div
                          class="wc-block-components-order-summary-item__total-price"
                          aria-hidden="true"
                        >
                          <span class="price wc-block-components-product-price"
                            ><span
                              class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value"
                              >$85.00</span
                            ></span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="wp-block-woocommerce-checkout-order-summary-coupon-form-block wc-block-components-totals-wrapper"
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
                    >$420.00</span
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
                    >$420.00</span
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
