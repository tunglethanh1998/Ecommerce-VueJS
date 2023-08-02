import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import CartDetails from '@/views/CartDetails.vue'
import CheckoutView from '@/views/CheckoutView.vue'

import store from '../store/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart-details',
      name: 'cart detail',
      component: CartDetails
    },
    {
      path: '/check-out',
      name: 'checkout',
      component: CheckoutView,
      beforeEnter: (to, from, next) => {
        if (store.getters.getAuth.isAuth) {
          next();
        } else {
          next('/sign-in');
        }
      },
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignInView,
      beforeEnter: (to, from, next) => {
        if (store.getters.getAuth.isAuth) {
          next('/');
        } else {
          next();
        }
      }
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      beforeEnter: (to, from, next) => {
        if (store.getters.getAuth.isAuth) {
          next();
        } else {
          next('/sign-in');
        }
      }
    },
  ]
})

export default router
