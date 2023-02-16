import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import shop from '../views/shop.vue'
import account from '../views/account.vue'
import cart from '../views/cart.vue'
import contactUs from '../views/contactUs.vue'
import favorite from '../views/favorite.vue'
import checkout from '../views/checkout.vue'
import controlPanel from '../views/controlPanel.vue'
import addNewProduct from '../views/addNewProduct.vue'
import updateProduct from '../views/updateProduct.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import error from '../views/error.vue'
import details from '../views/details.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/account',
    name: 'account',
    component: account
  },
  {
    path: '/details',
    name: 'details',
    component: details
  },
  {
    path: '/404',
    name: 'error',
    component: error
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/addNewProduct',
    name: 'addNewProduct',
    component: addNewProduct
  },
  {
    path: '/updateProduct',
    name: 'updateProduct',
    component: updateProduct
  },
  {
    path: '/controlPanel',
    name: 'controlPanel',
    component: controlPanel
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: checkout
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: favorite
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: contactUs
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/shop',
    name: 'shop',
    component: shop
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
