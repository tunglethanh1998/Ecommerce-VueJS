<template>
  <tr class="wc-block-cart-items__row" tabindex="-1">
    <td class="wc-block-cart-item__image" aria-hidden="true">
      <a href="https://themegrilldemos.com/blissful/product/customized-rings/" tabindex="-1"
        ><img class="wc-block-components-product-image" :src="imgSrc" alt="Customized Rings"
      /></a>
    </td>
    <td class="wc-block-cart-item__product">
      <div class="wc-block-cart-item__wrap">
        <a
          class="wc-block-components-product-name"
          href="https://themegrilldemos.com/blissful/product/customized-rings/"
        >
          {{ title }}
        </a>
        <div class="wc-block-cart-item__prices">
          <span class="price wc-block-components-product-price">
            <span
              class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value"
            >
              ${{ unitPrice }}.00
            </span>
          </span>
        </div>
        <div class="wc-block-components-product-metadata">
          <div class="wc-block-components-product-metadata__description">
            <p>
              Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Curabitur aliquet am
              id dui posuere blandit…
            </p>
          </div>
        </div>
        <div class="wc-block-cart-item__quantity">
          <div class="wc-block-components-quantity-selector">
            <input
              class="wc-block-components-quantity-selector__input"
              type="number"
              step="1"
              min="1"
              max="9999"
              aria-label="Quantity of Customized Rings in your cart."
              :value="quantity"
              @change="onChangeQuantityItem"
              @blur="onChangeQuantityItem"
            />
            <button
              aria-label="Reduce quantity of Customized Rings"
              class="wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--minus"
              @click="onRemoveQuantity"
            >
              －
            </button>
            <button
              aria-label="Increase quantity of Customized Rings"
              class="wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--plus"
              @click="onAddQuantity"
            >
              ＋
            </button>
          </div>
          <button
            class="wc-block-cart-item__remove-link"
            aria-label="Remove Customized Rings from cart"
            @click="onRemoveItemCart"
          >
            Remove item
          </button>
        </div>
      </div>
    </td>
    <td class="wc-block-cart-item__total">
      <div class="wc-block-cart-item__total-price-and-sale-badge-wrapper">
        <span class="price wc-block-components-product-price">
          <span
            class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value"
            >${{ totalPrice }}.00</span
          ></span
        >
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    id: String,
    title: String,
    imgSrc: String,
    unitPrice: String,
    quantity: String
  },
  computed: {
    totalPrice() {
      return this.quantity * this.unitPrice
    }
  },
  methods: {
    onAddQuantity() {
      this.$store.dispatch('onAddQuantityAction', this.id)
    },
    onRemoveQuantity() {
      this.$store.dispatch('onRemoveQuantityAction', this.id)
    },
    onRemoveItemCart() {
      this.$store.dispatch('onRemoveItemCartAction', this.id)
    },
    onChangeQuantityItem(event) {
      const payload = {
        id: this.id,
        newQuantity: event.target.value
      }
      this.$store.dispatch('onChangeQuantityItemAction', payload)
    }
  }
}
</script>
