<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'
const store = useStore()

const auth = store.getters.getAuth

onMounted(() => {
  store.dispatch('onGetListOrderAction', auth.profile.email)
})

const listOrders = computed(() => store.state.listOrder)

</script>

<template>
  <div class="profile">
    <div class="profile__left">
      <div>{{ auth.profile.name }}</div>
      <div>{{ auth.profile.email }}</div>
    </div>
    <div class="profile__right">
      <div>List order</div>
      <div v-for="order in listOrders" :key="order.id">
        ID: {{ order.id }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile {
  max-width: 80%;
  font-size: 30px;
  text-align: center;
  display: flex;
  border: 1px solid;
  padding: 20px;
  margin: 100px auto;
}
.profile__left {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid;
}
.profile__right {
  width: 50%;
  display: flex;
  flex-direction: column;
}
</style>
