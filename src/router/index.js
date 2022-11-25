import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjetosView from '../views/ProjetosView.vue'
import CertificatesView from '../views/CertificatesView.vue'
import EmailConfirmView from '../views/EmailConfirmView.vue'
import ProjectSchwarzaView from '../views/projects/ProjectSchwarzaView.vue'
import DonutsAppView from '../views/projects/DonutsAppView.vue'

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
    component: CertificatesView
  },
  {
    path: '/sucess',
    name: 'sucess',
    component: EmailConfirmView
  },
  {
    path: '/projectschwarza',
    name: 'projectschwarza',
    component: ProjectSchwarzaView
  },
  {
    path: '/donutsapp',
    name: 'donutsapp',
    component: DonutsAppView
  },
]

const router = new VueRouter({
  routes
})

export default router
