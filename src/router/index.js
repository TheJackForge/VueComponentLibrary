import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LandingPage1 from '../views/LandingPage1.vue'
import TwoColumnLayout from '../views/TwoColumnLayoutPage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/landingpage1',
    name: 'LandingPage1',
    component: LandingPage1
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
