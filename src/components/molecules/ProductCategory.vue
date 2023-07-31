<script setup lang="ts">
const props = defineProps(['imgSrc', 'title'])
</script>

<template>
  <li class="wc-block-product-categories-list-item">
    <a style="" href="https://themegrilldemos.com/blissful/product-category/chocolates/">
      <span class="wc-block-product-categories-list-item__image">
        <img
          width="300"
          height="300"
          :src="props.imgSrc"
          class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
          alt=""
          decoding="async"
          loading="lazy"
          sizes="(max-width: 300px) 100vw, 300px"
        />
      </span>
      <span class="wc-block-product-categories-list-item__name">{{ title }}</span>
    </a>
  </li>
</template>
