<template>
  <tr class="wc-block-cart-items__row" tabindex="-1">
    <td class="wc-block-cart-item__image" aria-hidden="true">
      <a href="https://themegrilldemos.com/blissful/product/soft-teddy-bear/" tabindex="-1">
        <img class="wc-block-components-product-image" :src="props.imgSrc" alt="Soft Teddy Bear" />
      </a>
    </td>
    <td class="wc-block-cart-item__product">
      <div class="wc-block-cart-item__wrap">
        <a
          class="wc-block-components-product-name"
          href="https://themegrilldemos.com/blissful/product/soft-teddy-bear/"
          >{{ props.title }}</a
        >
        <div class="wc-block-cart-item__prices">
          <span class="price wc-block-components-product-price">
            <span
              class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value"
              >${{ props.unitPrice }}.00</span
            ></span
          >
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
              aria-label="Quantity of Soft Teddy Bear in your cart."
              :value="props.quantity"
            />
            <button
              aria-label="Reduce quantity of Soft Teddy Bear"
              class="wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--minus"
              :disabled="props.quantity === 1"
            >
              －
            </button>
            <button
              aria-label="Increase quantity of Soft Teddy Bear"
              class="wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--plus"
            >
              ＋
            </button>
          </div>
          <button
            class="wc-block-cart-item__remove-link"
            aria-label="Remove Soft Teddy Bear from cart"
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
          >
            $50.00
          </span>
        </span>
      </div>
    </td>
  </tr>
</template>

<script setup>
const props = defineProps(['imgSrc', 'title', 'unitPrice', 'quantity'])
</script>
