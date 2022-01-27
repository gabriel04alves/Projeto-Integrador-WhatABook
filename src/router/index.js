import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import('@/layouts/Default'),
    meta: {
      requiresAuth: true
    },
    children: [{
        path: '/',
        component: () => import('@/layouts/Default'),
      },
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/categorias',
        name: 'Catalogo',
        component: () => import( /* webpackChunkName: "about" */ '../views/Catalogo.vue')
      },
      {
        path: '/salvos',
        name: 'Salvos',
        component: () => import( /* webpackChunkName: "about" */ '../views/Salvos.vue')
      },
      {
        path: '/minhas-resenhas',
        name: 'Resenhas',
        component: () => import( /* webpackChunkName: "about" */ '../views/Resenhas.vue')
      },
      {
        path: '/configuracoes',
        name: 'Configuracoes',
        component: () => import( /* webpackChunkName: "about" */ '../views/Configuracoes.vue')
      },
      {
        path: '/perfil',
        name: 'Perfil',
        component: () => import( /* webpackChunkName: "perfil" */ '../views/Perfil.vue')
      },
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/Blank'),
    children: [{
      path: '/login',
      name: 'Login',
      component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router