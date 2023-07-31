<template>
  <header>
    <div class="is-layout-flow wp-container-16 wp-block-group">
      <div
        class="is-layout-constrained wp-block-group alignfull has-color-1-background-color has-background"
        style="padding-top: 4px; padding-right: 4px; padding-bottom: 4px; padding-left: 4px"
      >
        <p class="has-text-align-center has-foreground-color has-text-color">
          Use coupon code <strong>“GIFT”</strong> to get <strong>10% OFF</strong>.
        </p>
      </div>

      <div
        class="is-layout-constrained wp-container-15 wp-block-group"
        style="padding-top: 0; padding-right: 4.2vw; padding-bottom: 0; padding-left: 4.2vw"
      >
        <div
          class="is-layout-flow wp-block-group alignwide blissful-margin-block-start-zero has-background-background-color has-background"
          style="padding-top: 0px; padding-right: 0vw; padding-bottom: 0px; padding-left: 0vw"
        >
          <div class="is-layout-flex wp-container-13 wp-block-columns">
            <div
              class="is-layout-flow wp-block-column is-vertically-aligned-center"
              style="flex-basis: 10%"
            >
              <div
                class="is-content-justification-left is-layout-constrained wp-container-2 wp-block-group has-color-3-color has-text-color"
                style="padding-top: 20px; padding-bottom: 20px"
              >
                <h3 class="has-text-align-center wp-block-site-title">
                  <a href="/" target="_self" rel="home" aria-current="page">Blissful.</a>
                </h3>
              </div>
            </div>

            <div
              class="is-layout-flow wp-block-column is-vertically-aligned-center"
              style="padding-right: 0; padding-left: 0px"
            >
              <div
                class="is-horizontal is-content-justification-space-between is-layout-flex wp-container-11 wp-block-group flex-direction--mobile blissful-position-relative"
              >
                <div
                  class="is-content-justification-left is-nowrap is-layout-flex wp-container-6 wp-block-group blissful-primary-menu"
                  style="padding-top: 7px; padding-bottom: 7px; padding-left: 0"
                >
                  <nav
                    class="is-horizontal is-content-justification-center is-layout-flex wp-container-5 has-medium-font-size is-responsive items-justified-center wp-block-navigation has-medium-font-size"
                    aria-label="Main Navigation"
                  >
                    <button
                      aria-haspopup="true"
                      aria-label="Open menu"
                      class="wp-block-navigation__responsive-container-open"
                      data-micromodal-trigger="modal-4"
                    >
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <rect x="4" y="7.5" width="16" height="1.5"></rect>
                        <rect x="4" y="15" width="16" height="1.5"></rect>
                      </svg>
                    </button>
                    <div
                      class="wp-block-navigation__responsive-container has-background has-secondary-background-color"
                      style=""
                      id="modal-4"
                    >
                      <div
                        class="wp-block-navigation__responsive-close"
                        tabindex="-1"
                        data-micromodal-close=""
                      >
                        <div class="wp-block-navigation__responsive-dialog" aria-label="Menu">
                          <button
                            aria-label="Close menu"
                            data-micromodal-close=""
                            class="wp-block-navigation__responsive-container-close"
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
                                d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
                              ></path>
                            </svg>
                          </button>
                          <div
                            class="wp-block-navigation__responsive-container-content"
                            id="modal-4-content"
                          >
                            <ul class="wp-block-navigation__container">
                              <li
                                class="has-medium-font-size wp-block-navigation-item current-menu-item wp-block-navigation-link"
                              >
                                <router-link
                                  to="/"
                                  class="wp-block-navigation-item__content"
                                  aria-current="page"
                                >
                                  <span class="wp-block-navigation-item__label">Home</span>
                                </router-link>
                              </li>
                              <li
                                class="has-medium-font-size wp-block-navigation-item has-child open-on-hover-click wp-block-navigation-submenu"
                              >
                                <a class="wp-block-navigation-item__content" href="/blissful/shop/">
                                  Shop
                                </a>
                                <button
                                  aria-label="Shop submenu"
                                  class="wp-block-navigation__submenu-icon wp-block-navigation-submenu__toggle"
                                  aria-expanded="false"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    aria-hidden="true"
                                    focusable="false"
                                  >
                                    <path d="M1.50002 4L6.00002 8L10.5 4" stroke-width="1.5"></path>
                                  </svg>
                                </button>
                                <ul class="wp-block-navigation__submenu-container">
                                  <li
                                    class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                  >
                                    <a
                                      class="wp-block-navigation-item__content"
                                      href="/blissful/shop-two/"
                                    >
                                      <span class="wp-block-navigation-item__label">Shop Two</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li
                                class="has-medium-font-size wp-block-navigation-item has-child open-on-hover-click wp-block-navigation-submenu"
                              >
                                <a class="wp-block-navigation-item__content" href="#">Patterns</a
                                ><button
                                  aria-label="Patterns submenu"
                                  class="wp-block-navigation__submenu-icon wp-block-navigation-submenu__toggle"
                                  aria-expanded="false"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    aria-hidden="true"
                                    focusable="false"
                                  >
                                    <path d="M1.50002 4L6.00002 8L10.5 4" stroke-width="1.5"></path>
                                  </svg>
                                </button>
                                <ul class="wp-block-navigation__submenu-container">
                                  <li
                                    class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                  >
                                    <a
                                      class="wp-block-navigation-item__content"
                                      href="/blissful/banner/"
                                      ><span class="wp-block-navigation-item__label"
                                        >Banner</span
                                      ></a
                                    >
                                  </li>
                                  <li
                                    class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                  >
                                    <a
                                      class="wp-block-navigation-item__content"
                                      href="/blissful/testimonial/"
                                      ><span class="wp-block-navigation-item__label"
                                        >Testimonial</span
                                      ></a
                                    >
                                  </li>
                                  <li
                                    class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                  >
                                    <a
                                      class="wp-block-navigation-item__content"
                                      href="/blissful/contact-pattern/"
                                      ><span class="wp-block-navigation-item__label"
                                        >Contact Pattern</span
                                      ></a
                                    >
                                  </li>
                                  <li
                                    class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                  >
                                    <a
                                      class="wp-block-navigation-item__content"
                                      href="/blissful/offers/"
                                      ><span class="wp-block-navigation-item__label"
                                        >Offers</span
                                      ></a
                                    >
                                  </li>
                                  <li
                                    class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                  >
                                    <a
                                      class="wp-block-navigation-item__content"
                                      href="/blissful/cta/"
                                      ><span class="wp-block-navigation-item__label">CTA</span></a
                                    >
                                  </li>
                                  <li
                                    class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                  >
                                    <a
                                      class="wp-block-navigation-item__content"
                                      href="/blissful/footer/"
                                      ><span class="wp-block-navigation-item__label"
                                        >Footer</span
                                      ></a
                                    >
                                  </li>
                                </ul>
                              </li>
                              <li
                                class="has-medium-font-size wp-block-navigation-item has-child open-on-hover-click wp-block-navigation-submenu"
                              >
                                <a class="wp-block-navigation-item__content" href="#" title=""
                                  >Pages</a
                                ><button
                                  aria-label="Pages submenu"
                                  class="wp-block-navigation__submenu-icon wp-block-navigation-submenu__toggle"
                                  aria-expanded="false"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    aria-hidden="true"
                                    focusable="false"
                                  >
                                    <path d="M1.50002 4L6.00002 8L10.5 4" stroke-width="1.5"></path>
                                  </svg>
                                </button>
                                <ul class="wp-block-navigation__submenu-container">
                                  <li
                                    class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                  >
                                    <a
                                      class="wp-block-navigation-item__content"
                                      href="/blissful/blog/"
                                      ><span class="wp-block-navigation-item__label">Blog</span></a
                                    >
                                  </li>
                                  <li
                                    class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                  >
                                    <a
                                      class="wp-block-navigation-item__content"
                                      href="/blissful/about/"
                                      ><span class="wp-block-navigation-item__label">About</span></a
                                    >
                                  </li>
                                  <li
                                    class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                  >
                                    <a
                                      class="wp-block-navigation-item__content"
                                      href="/blissful/contact-us/"
                                      ><span class="wp-block-navigation-item__label"
                                        >Contact Us</span
                                      ></a
                                    >
                                  </li>
                                  <li
                                    class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                  >
                                    <a
                                      class="wp-block-navigation-item__content"
                                      href="/blissful/404"
                                      ><span class="wp-block-navigation-item__label">404</span></a
                                    >
                                  </li>
                                </ul>
                              </li>
                              <li
                                class="has-medium-font-size wp-block-navigation-item has-child open-on-hover-click has-megamenu wp-block-navigation-submenu"
                              >
                                <a class="wp-block-navigation-item__content" href="#">Mega Menu</a
                                ><button
                                  aria-label="Mega Menu submenu"
                                  class="wp-block-navigation__submenu-icon wp-block-navigation-submenu__toggle"
                                  aria-expanded="false"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    aria-hidden="true"
                                    focusable="false"
                                  >
                                    <path d="M1.50002 4L6.00002 8L10.5 4" stroke-width="1.5"></path>
                                  </svg>
                                </button>
                                <ul class="wp-block-navigation__submenu-container">
                                  <li
                                    class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item has-child open-on-hover-click has-border-right wp-block-navigation-submenu"
                                  >
                                    <a class="wp-block-navigation-item__content" href="#" title="#"
                                      >Single Products</a
                                    ><button
                                      aria-label="Single Products submenu"
                                      class="wp-block-navigation__submenu-icon wp-block-navigation-submenu__toggle"
                                      aria-expanded="false"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        aria-hidden="true"
                                        focusable="false"
                                      >
                                        <path
                                          d="M1.50002 4L6.00002 8L10.5 4"
                                          stroke-width="1.5"
                                        ></path>
                                      </svg>
                                    </button>
                                    <ul class="wp-block-navigation__submenu-container">
                                      <li
                                        class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                      >
                                        <a
                                          class="wp-block-navigation-item__content"
                                          href="/blissful/product/good-miffy-toy/"
                                          ><span class="wp-block-navigation-item__label"
                                            >Simple</span
                                          ></a
                                        >
                                      </li>
                                      <li
                                        class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                      >
                                        <a
                                          class="wp-block-navigation-item__content"
                                          href="/product/customized-printed-mug/"
                                          ><span class="wp-block-navigation-item__label"
                                            >External/Affiliate</span
                                          ></a
                                        >
                                      </li>
                                      <li
                                        class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                      >
                                        <a
                                          class="wp-block-navigation-item__content"
                                          href="/blissful/product/personalised-t-shirt/"
                                          ><span class="wp-block-navigation-item__label"
                                            >Variable</span
                                          ></a
                                        >
                                      </li>
                                      <li
                                        class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                      >
                                        <a
                                          class="wp-block-navigation-item__content"
                                          href="/blissful/product/bouquet-of-yellow-flower/"
                                          ><span class="wp-block-navigation-item__label"
                                            >Grouped</span
                                          ></a
                                        >
                                      </li>
                                      <li
                                        class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                      >
                                        <a
                                          class="wp-block-navigation-item__content"
                                          href="/blissful/product/red-tulip-flower/"
                                          ><span class="wp-block-navigation-item__label"
                                            >Image Gallery</span
                                          ></a
                                        >
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item has-child open-on-hover-click has-border-right wp-block-navigation-submenu"
                                  >
                                    <a class="wp-block-navigation-item__content" href="#" title="#"
                                      >Product States</a
                                    ><button
                                      aria-label="Product States submenu"
                                      class="wp-block-navigation__submenu-icon wp-block-navigation-submenu__toggle"
                                      aria-expanded="false"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        aria-hidden="true"
                                        focusable="false"
                                      >
                                        <path
                                          d="M1.50002 4L6.00002 8L10.5 4"
                                          stroke-width="1.5"
                                        ></path>
                                      </svg>
                                    </button>
                                    <ul class="wp-block-navigation__submenu-container">
                                      <li
                                        class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                      >
                                        <a
                                          class="wp-block-navigation-item__content"
                                          href="/blissful/product/vase-with-roses/"
                                          ><span class="wp-block-navigation-item__label"
                                            >In Stock</span
                                          ></a
                                        >
                                      </li>
                                      <li
                                        class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                      >
                                        <a
                                          class="wp-block-navigation-item__content"
                                          href="/blissful/product/heart-candy/"
                                          ><span class="wp-block-navigation-item__label"
                                            >Out of Stock</span
                                          ></a
                                        >
                                      </li>
                                      <li
                                        class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                      >
                                        <a
                                          class="wp-block-navigation-item__content"
                                          href="/blissful/product/pikachu-soft-toy/"
                                          ><span class="wp-block-navigation-item__label"
                                            >Backorder</span
                                          ></a
                                        >
                                      </li>
                                      <li
                                        class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                      >
                                        <a
                                          class="wp-block-navigation-item__content"
                                          href="/blissful/product/customized-rings/"
                                          ><span class="wp-block-navigation-item__label"
                                            >Cross Selling</span
                                          ></a
                                        >
                                      </li>
                                      <li
                                        class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                      >
                                        <a
                                          class="wp-block-navigation-item__content"
                                          href="/blissful/product/gold-pearl-and-flower-necklace/"
                                          ><span class="wp-block-navigation-item__label"
                                            >Product Reviews</span
                                          ></a
                                        >
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                  >
                                    <a class="wp-block-navigation-item__content" href="#"
                                      ><span class="wp-block-navigation-item__label"
                                        ><img
                                          decoding="async"
                                          loading="lazy"
                                          width="416"
                                          height="494"
                                          class="wp-image-352"
                                          style="width: 200px"
                                          src="https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/05/coming-soon.png"
                                          alt=""
                                          srcset="
                                            https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/05/coming-soon.png         416w,
                                            https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/05/coming-soon-253x300.png 253w,
                                            https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/05/coming-soon-300x356.png 300w
                                          "
                                          sizes="(max-width: 416px) 100vw, 416px" /></span
                                    ></a>
                                  </li>
                                  <li
                                    class="has-background has-secondary-background-color has-medium-font-size wp-block-navigation-item wp-block-navigation-link"
                                  >
                                    <a class="wp-block-navigation-item__content" href="#"
                                      ><span class="wp-block-navigation-item__label"
                                        ><img
                                          decoding="async"
                                          loading="lazy"
                                          width="416"
                                          height="494"
                                          class="wp-image-351"
                                          style="width: 200px"
                                          src="https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/05/surprise-gift.png"
                                          alt=""
                                          srcset="
                                            https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/05/surprise-gift.png         416w,
                                            https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/05/surprise-gift-253x300.png 253w,
                                            https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/05/surprise-gift-300x356.png 300w
                                          "
                                          sizes="(max-width: 416px) 100vw, 416px" /></span
                                    ></a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>

                <div
                  class="is-content-justification-right is-layout-flex wp-container-10 wp-block-group has-primary-color has-text-color"
                  style="padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0"
                >
                  <form
                    role="search"
                    method="get"
                    action="https://themegrilldemos.com/blissful/"
                    class="wp-block-search__no-button is-style-blissful-search-style-1 wp-block-search"
                  >
                    <label
                      for="wp-block-search__input-7"
                      class="wp-block-search__label screen-reader-text"
                      >Search</label
                    >
                    <div class="search-wrapper">
                      <div class="wp-block-search__inside-wrapper">
                        <input
                          type="search"
                          id="wp-block-search__input-7"
                          class="wp-block-search__input wp-block-search__input"
                          name="s"
                          value=""
                          placeholder="Search products…"
                        /><input type="hidden" name="post_type" value="product" />
                      </div>
                    </div>
                  </form>

                  <nav
                    class="is-layout-flex wp-container-9 wp-block-navigation"
                    aria-label="Woocommerce Menu"
                  >
                    <ul class="wp-block-navigation__container">
                      <li class="wp-block-navigation-item blissful-avatar wp-block-navigation-link">
                        <a class="wp-block-navigation-item__content" href="/blissful/my-account/"
                          ><span class="wp-block-navigation-item__label">My account</span></a
                        >
                      </li>
                      <li
                        class="wp-block-navigation-item blissful-wishlist-icon wp-block-navigation-link"
                      >
                        <a class="wp-block-navigation-item__content" href="/blissful/wishlist/"
                          ><span class="wp-block-navigation-item__label">Wishlist</span></a
                        >
                      </li>
                    </ul>
                  </nav>

                  <div
                    data-block-name="woocommerce/mini-cart"
                    data-has-hidden-price="true"
                    class="wc-block-mini-cart wp-block-woocommerce-mini-cart"
                    @click="onOpenCartShop"
                  >
                    <button
                      class="wc-block-mini-cart__button"
                      aria-label="3 items in cart, total price of $255.00"
                    >
                      <span class="wc-block-mini-cart__quantity-badge">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="none"
                          width="20"
                          height="20"
                          class="wc-block-mini-cart__icon"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.84614 18.2769C7.89712 18.2769 7.93845 18.2356 7.93845 18.1846C7.93845 18.1336 7.89712 18.0923 7.84614 18.0923C7.79516 18.0923 7.75384 18.1336 7.75384 18.1846C7.75384 18.2356 7.79516 18.2769 7.84614 18.2769ZM6.03076 18.1846C6.03076 17.182 6.84353 16.3692 7.84614 16.3692C8.84875 16.3692 9.66152 17.182 9.66152 18.1846C9.66152 19.1872 8.84875 20 7.84614 20C6.84353 20 6.03076 19.1872 6.03076 18.1846Z"
                            fill="currentColor"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17.3231 18.2769C17.3741 18.2769 17.4154 18.2356 17.4154 18.1846C17.4154 18.1336 17.3741 18.0923 17.3231 18.0923C17.2721 18.0923 17.2308 18.1336 17.2308 18.1846C17.2308 18.2356 17.2721 18.2769 17.3231 18.2769ZM15.5077 18.1846C15.5077 17.182 16.3205 16.3692 17.3231 16.3692C18.3257 16.3692 19.1385 17.182 19.1385 18.1846C19.1385 19.1872 18.3257 20 17.3231 20C16.3205 20 15.5077 19.1872 15.5077 18.1846Z"
                            fill="currentColor"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20.0631 9.53835L19.4662 12.6685L19.4648 12.6757L19.4648 12.6757C19.3424 13.2919 19.0072 13.8454 18.5178 14.2394C18.031 14.6312 17.4226 14.8404 16.798 14.8308H8.44017C7.81556 14.8404 7.20714 14.6312 6.72038 14.2394C6.2312 13.8456 5.89605 13.2924 5.77352 12.6765L5.77335 12.6757L4.33477 5.48814C4.3286 5.46282 4.32345 5.43711 4.31934 5.41104L3.61815 1.90768H0.953842C0.42705 1.90768 0 1.48063 0 0.953842C0 0.42705 0.42705 0 0.953842 0H4.4C4.85462 0 5.24607 0.320858 5.33529 0.766644L6.04403 4.30769H12.785C13.0114 4.99157 13.3319 5.63258 13.7312 6.21538H6.42585L7.64421 12.3026L7.64449 12.304C7.67966 12.4811 7.77599 12.6402 7.91662 12.7534C8.05725 12.8666 8.23322 12.9267 8.41372 12.9233L8.432 12.9231H16.8062L16.8244 12.9233C17.0049 12.9267 17.1809 12.8666 17.3215 12.7534C17.4614 12.6408 17.5575 12.4828 17.5931 12.3068L17.5937 12.304L18.1649 9.30867C18.762 9.45873 19.387 9.53842 20.0307 9.53842C20.0415 9.53842 20.0523 9.5384 20.0631 9.53835Z"
                            fill="currentColor"
                          >
                          </path>
                        </svg>
                          <span class="wc-block-mini-cart__badge undefined">
                            {{ getListCarts.length }}
                          </span>
                        </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>

<script>
export default {
  name: 'HeaderComponent',
  methods: {
    onOpenCartShop() {
      this.$emit('onOpenCart')
    }
  },
  computed: {
    getListCarts() {
      return this.$store.getters.getCarts
    }
  }
}
</script>
