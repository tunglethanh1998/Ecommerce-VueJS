<script setup>
import { computed } from 'vue';

const props = defineProps(['imgSrc', 'title', 'unitPrice', 'quantity'])
const totalPrice = computed(() => props.unitPrice * props.quantity)
</script>

<template>
  <div class="wc-block-components-order-summary-item">
    <div class="wc-block-components-order-summary-item__image">
      <div class="wc-block-components-order-summary-item__quantity">
        <span aria-hidden="true">{{ props.quantity }}</span><span class="screen-reader-text">{{ props.quantity }} items</span>
      </div>
      <img
        class="wc-block-components-product-image"
        :src="props.imgSrc"
        alt="Soft Teddy Bear"
      />
    </div>
    <div class="wc-block-components-order-summary-item__description">
      <span class="wc-block-components-product-name">{{ props.title }}</span
      ><span
        class="wc-block-components-order-summary-item__individual-prices price wc-block-components-product-price"
        ><span
          class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value wc-block-components-order-summary-item__individual-price"
          >${{ props.unitPrice }}.00</span
        ></span
      >
      <div class="wc-block-components-product-metadata">
        <div class="wc-block-components-product-metadata__description">
          <p>
            Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Curabitur aliquet am
            id dui posuere blandit…
          </p>
        </div>
      </div>
    </div>
    <span class="screen-reader-text">Total price for 2 Soft Teddy Bear items: $100.00</span>
    <div class="wc-block-components-order-summary-item__total-price" aria-hidden="true">
      <span class="price wc-block-components-product-price"
        ><span
          class="wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-product-price__value"
          >${{ totalPrice }}.00</span
        ></span
      >
    </div>
  </div>
</template>
