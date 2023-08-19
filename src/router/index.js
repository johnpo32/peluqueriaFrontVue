import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PeinadosView from '../views/PeinadosView.vue'
import ExtensionesView from '../views/ExtensionesView.vue'
import EstilistasView from '../views/EstilistasView.vue'
import Historico from '../views/Historico.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/peinados',
      name: 'peinados',
      component: PeinadosView
    },
    {
      path: '/extensiones',
      name: 'extensiones',
      component: ExtensionesView
    },
    {
      path: '/estilistas',
      name: 'estilistas',
      component: EstilistasView
    },
    {
      path: '/historico',
      name: 'historico',
      component: Historico
    },
  ]
})

export default router
