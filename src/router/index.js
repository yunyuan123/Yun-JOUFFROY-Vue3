import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/liste',
      name: 'liste',
      component: () => import('../views/List.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/Detail.vue')
    }

  ]
})

export default router
