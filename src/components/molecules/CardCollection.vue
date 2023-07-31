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
        @click="onAddToCart"
      >
        Add to cart
      </a>
    </div>

    <div
      class="yith-wcwl-add-to-wishlist add-to-wishlist-288 wishlist-fragment on-first-load"
      data-fragment-ref="288"
      data-fragment-options='{"base_url":"","in_default_wishlist":false,"is_single":false,"show_exists":false,"product_id":"288","parent_product_id":288,"product_type":"simple","show_view":false,"browse_wishlist_text":"Browse wishlist","already_in_wishslist_text":"The product is already in your wishlist!","product_added_text":"Product added!","heading_icon":"fa-heart-o","available_multi_wishlist":false,"disable_wishlist":false,"show_count":false,"ajax_loading":false,"loop_position":"before_image","item":"add_to_wishlist"}'
    >
      <!-- ADD TO WISHLIST -->

      <div class="yith-wcwl-add-button">
        <a
          href="?add_to_wishlist=288&amp;_wpnonce=9d911b4eec"
          class="add_to_wishlist single_add_to_wishlist button alt"
          data-product-id="288"
          data-product-type="simple"
          data-original-product-id="288"
          data-title="Add to wishlist"
          rel="nofollow"
        >
          <i class="yith-wcwl-icon fa fa-heart-o"></i> <span>Add to wishlist</span>
        </a>
      </div>

      <!-- COUNT TEXT -->
    </div>
  </li>
</template>

<script>
export default {
  name: 'CardCollection',
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
      this.$store.dispatch('onAddToCartAction', payload)
    }
  }
}
</script>
