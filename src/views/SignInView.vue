<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

const username = ref('')
const password = ref('')

const onHandleSubmit = () => {
  const payload = {
    email: username.value,
    password: password.value
  }
  store.dispatch('onSignInAction', payload).then((res) => {
    if (res.status === 200) {
      router.push('/')
    }
  })
}
</script>

<template>
  <div class="is-layout-flow wp-block-group">
    <div class="is-layout-constrained entry-content wp-block-post-content">
      <div style="height: 62px" aria-hidden="true" class="wp-block-spacer"></div>

      <div class="is-layout-constrained wp-block-group alignfull">
        <div class="is-layout-flex wp-container-18 wp-block-columns alignwide">
          <div class="is-layout-flow wp-block-column">
            <div class="woocommerce">
              <div class="woocommerce-notices-wrapper"></div>

              <h2>Login</h2>

              <form
                class="woocommerce-form woocommerce-form-login login"
                @submit.prevent="onHandleSubmit"
              >
                <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label for="username"
                    >Username or email address&nbsp;<span class="required">*</span></label
                  >
                  <input
                    type="text"
                    class="woocommerce-Input woocommerce-Input--text input-text"
                    name="username"
                    id="username"
                    autocomplete="username"
                    v-model="username"
                  />
                </p>
                <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label for="password">Password&nbsp;<span class="required">*</span></label>
                  <span class="password-input">
                    <input
                      class="woocommerce-Input woocommerce-Input--text input-text"
                      type="password"
                      name="password"
                      id="password"
                      v-model="password"
                      autocomplete="current-password"
                    />
                    <span class="show-password-input"></span>
                  </span>
                </p>

                <p class="form-row">
                  <button
                    type="submit"
                    class="woocommerce-button button woocommerce-form-login__submit wp-element-button"
                    name="login"
                    value="Log in"
                  >
                    Log in
                  </button>
                </p>
                <p class="woocommerce-LostPassword lost_password">
                  <router-link to="/sign-up">Create new account ? </router-link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div style="height: 62px" aria-hidden="true" class="wp-block-spacer"></div>
    </div>
  </div>
</template>

<style scoped>
.wp-container-18 {
  max-width: 600px !important;
}
</style>
