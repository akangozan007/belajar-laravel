import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Masuk from '../views/auth/Masuk.vue'
import Daftar from '../views/auth/Daftar.vue'
import Panel from '../views/auth/Panel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/masuk',
      name: 'masuk',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Masuk,
    },
    {
      path: '/daftar',
      name: 'daftar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Daftar,
    },
    {
      path: '/panel',
      name: 'panel',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Panel,
    },
  ],
})

export default router
