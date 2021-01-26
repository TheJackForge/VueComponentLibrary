import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LandingPage001 from '../views/LandingPage001.vue'
import TwoColumnLayout from '../views/TwoColumnLayoutPage'
import BurgerMenu001 from '../views/BurgerMenu001'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/burgermenu001',
    name: 'BurgerMenu001',
    component: BurgerMenu001
  },
  {
    path: '/landingpage001',
    name: 'LandingPage001',
    component: LandingPage001
  },
  {
    path: '/twocolumnlayout',
    name: 'TwoColumnLayout',
    component: TwoColumnLayout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
