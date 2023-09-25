import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contador from '../views/Contador.vue'
import PaisVue from '../views/Pais.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contador',
    name: 'Contador',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contador.vue')
  },
  {
    path: '/paises',
    name: 'Paises',
    component: () => import(/* webpackChunkName: "about" */ '../views/Paises.vue')
  },  
  {
    path: '/paises/:nombre',
    name: 'Pais',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Pais.vue')
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
