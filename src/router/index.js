import { createRouter, createWebHistory } from 'vue-router'
import CalculatorView from '../views/CalculatorView.vue'
import AboutMeView from '../views/AboutMeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'calculator',
      component: CalculatorView
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: AboutMeView
    }
  ]
})

export default router
