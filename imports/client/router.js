import { createRouter, createWebHistory } from 'vue-router'
import routes from './layout/body/routes.js'

export const router = createRouter({
  history: createWebHistory(),
  routes
})
