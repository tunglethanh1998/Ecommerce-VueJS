<script setup>
import Button from '../atoms/Button.vue'
</script>

<template>
  <div class="is-layout-flow wp-block-group alignfull" style="margin-top: 0; margin-bottom: 0">
    <div
      class="wp-block-cover alignwide is-light"
      style="margin-top: 0px; margin-bottom: 0px; padding-top: 0; min-height: 770px"
    >
      <span
        aria-hidden="true"
        class="wp-block-cover__background has-background-background-color has-background-dim-20 has-background-dim"
      ></span
      ><img
        decoding="async"
        class="wp-block-cover__image-background wp-image-24"
        alt=""
        src="https://themegrilldemos.com/blissful/wp-content/themes/blissful/assets/images/bg_image.jpg"
        data-object-fit="cover"
      />
      <div class="wp-block-cover__inner-container">
        <h1
          class="has-text-align-center wp-block-heading"
          style="font-style: normal; font-weight: 600"
        >
          Gifts for the Dear of Your Life
        </h1>

        <div style="height: 20px" aria-hidden="true" class="wp-block-spacer"></div>

        <div class="is-layout-flex wp-container-20 wp-block-columns">
          <div
            class="is-layout-flow wp-block-column is-vertically-aligned-center"
            style="flex-basis: 30%"
          ></div>

          <div
            class="is-layout-flow wp-block-column is-vertically-aligned-center"
            style="flex-basis: 50%"
          >
            <p class="has-text-align-center has-primary-color has-text-color has-small-font-size">
              Faucibus turpis in eu mi bibendum neque egestas. Ultrices dui sapien eget mi proin.
              Est velit egestas dui id ornare. Id venenatis a condimentum vitae sapien.Accumsan in
              nisl nisi sceleri.
            </p>
          </div>

          <div
            class="is-layout-flow wp-block-column is-vertically-aligned-center"
            style="flex-basis: 30%"
          ></div>
        </div>

        <div class="is-layout-flex wp-block-buttons">
          <Button> Order now </Button>
        </div>
      </div>
    </div>
  </div>
</template>
