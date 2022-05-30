import { createRouter, createWebHistory } from 'vue-router'
import Orders from '../modules/Orders/index.vue'
import Home from '../modules/Home/index.vue'
import RouteNotFound from "../components/RouteNotFound/index.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/orders',
      name: 'Orders',
      component: Orders
  },
  {
    path: "/:catchAll(.*)",
    component: RouteNotFound,
  }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router