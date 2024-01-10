import { createRouter, createWebHistory } from 'vue-router'
import Home from './home/index.vue'
import About from './about.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    }
  ]
})
