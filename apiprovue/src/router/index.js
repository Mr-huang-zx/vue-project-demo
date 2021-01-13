import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'Home'
  },
  {
    path: '/Tabbar',
    name: 'Tabbar',
    component: () => import('../views/Tabbar.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home/Index.vue')
  },
  {
    path: '/Find',
    name: 'Find',
    component: () => import('../views/Find/Index.vue')
  },
  {
    path: '/Order',
    name: 'Order',
    component: () => import('../views/Order/Index.vue')
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: () => import('../views/Mine/Index.vue')
  },
  {
    path: '/my-banner',
    name: 'my-banner',
    component: () => import('../components/Global/my-banner/Main.vue')
  },
  {
    path: '/my-button',
    name: 'my-button',
    component: () => import('../components/Global/my-button/Main.vue')
  },
]

const router = new VueRouter({
  linkActiveClass:'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
