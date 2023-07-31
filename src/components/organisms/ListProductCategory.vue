<script setup lang="ts">
import ProductCategory from '../molecules/ProductCategory.vue'
const listData = [
  {
    id: 1,
    src: 'https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/03/chocolates-300x300.jpg',
    title: 'Chocolates'
  },
  {
    id: 2,
    src: 'https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/03/flowers-300x300.jpg',
    title: 'Flowers'
  },
  {
    id: 3,
    src: 'https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/03/jwellery-300x300.jpg',
    title: 'Jewellery'
  },
  {
    id: 4,
    src: 'https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/03/mugs-300x300.jpg',
    title: 'Mugs'
  },
  {
    id: 5,
    src: 'https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/03/personalised-300x300.jpg',
    title: 'Personalised'
  },
  {
    id: 6,
    src: 'https://themegrilldemos.com/blissful/wp-content/uploads/sites/193/2023/03/soft-toys-300x300.jpg',
    title: 'Soft Toys'
  }
]
</script>

<template>
  <div
    class="is-layout-constrained wp-block-group alignfull"
    style="padding-right: 4.2vw; padding-left: 4.2vw"
  >
    <h2 class="has-text-align-center wp-block-heading" style="font-style: normal; font-weight: 700">
      Choose from Category
    </h2>

    <div style="height: 40px" aria-hidden="true" class="wp-block-spacer"></div>

    <div
      class="wp-block-woocommerce-product-categories wc-block-product-categories alignwide is-list"
    >
      <ul class="wc-block-product-categories-list wc-block-product-categories-list--depth-0 wc-block-product-categories-list--has-images">
        <ProductCategory
          v-for="item in listData"
          :key="item.id"
          :imgSrc="item.src"
          :title="item.title"
        />
      </ul>
    </div>
    <div style="height: 54px" aria-hidden="true" class="wp-block-spacer"></div>
  </div>
</template>
