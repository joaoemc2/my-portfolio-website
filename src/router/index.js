import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjetosView from '../views/ProjetosView'
import CertificadosView from '../views/CertificadosView'
import EmailConfirmView from '../views/EmailConfirmView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projetos',
    name: 'projetos',
    component: ProjetosView
  },
  {
    path: '/certificados',
    name: 'certificados',
    component: CertificadosView
  },
  {
    path: '/sucess',
    name: 'sucess',
    component: EmailConfirmView
  },
]

const router = new VueRouter({
  routes
})

export default router
