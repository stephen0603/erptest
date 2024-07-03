import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'company',
        name: 'company',
        component: () => import('../views/Company.vue')
      },
      {
        path: 'dealerEmps',
        name: 'dealerEmps',
        component: () => import('../views/DealerEmps.vue')
      },
      {
        path: 'dealers',
        name: 'dealers',
        component: () => import('../views/Dealers.vue')
      },
      {
        path: 'magizine',
        name: 'magizine',
        component: () => import('../views/Magizine.vue')
      },
      {
        path: 'booking',
        name: 'booking',
        component: () => import('../views/Booking.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
