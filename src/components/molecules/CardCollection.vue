<template>
  <li
    class="wc-block-grid__product add-to-wishlist-before_image blissful-add-to-wishlist-after_add_to_cart"
  >
    <a
      href="https://themegrilldemos.com/blissful/product/soft-teddy-bear/"
      class="wc-block-grid__product-link"
    >
      <div class="wc-block-grid__product-image">
        <img
          width="300"
          height="408"
          :src="imgSrc"
          class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
          alt="Soft Teddy Bear"
          decoding="async"
          loading="lazy"
          sizes="(max-width: 300px) 100vw, 300px"
        />
      </div>
      <div class="wc-block-grid__product-title">{{ title }}</div>
    </a>

    <div class="wc-block-grid__product-price price">
      <span class="woocommerce-Price-amount amount">
        <span class="woocommerce-Price-currencySymbol">$</span>
        {{ unitPrice }}.00
      </span>
    </div>

    <div class="wp-block-button wc-block-grid__product-add-to-cart">
      <a
        rel="nofollow"
        class="wp-block-button__link wp-element-button add_to_cart_button ajax_add_to_cart"
        :class="isLoadingCart && 'loading'"
        @click="onAddToCart"
      >
        Add to cart
      </a>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CardCollection',
  data: function() {
    return {
      isLoadingCart: false
    }
  },
  props: {
    id: String,
    imgSrc: String,
    title: String,
    unitPrice: String
  },
  methods: {
    onAddToCart() {
      const payload = {
        id: this.id,
        imgSrc: this.imgSrc,
        title: this.title,
        unitPrice: this.unitPrice,
        quantity: 1
      }
      this.isLoadingCart = true
      setTimeout(() => {
        this.$store.dispatch('onAddToCartAction', payload)
        this.isLoadingCart = false
      }, 1000)
    }
  }
}
</script>
