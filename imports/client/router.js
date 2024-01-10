import { createRouter, createWebHistory } from 'vue-router'
import routes from './layout/pages/routes.js'

export const router = createRouter({
  history: createWebHistory(),
  routes
})
