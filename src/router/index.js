import { createRouter, createWebHashHistory } from 'vue-router'
import AccueilRevy from '../views/HomeView.vue'
import AboutUs from '../views/AboutView.vue'
// import NosReseaux from '../views/NosReseaux.vue'
import MeilleurYv from '../views/MeilleurYv.vue'
import VosActivite from '../views/VosActivite.vue'
import BienEtre from '../views/BienEtre.vue'
import CarteMap from '../views/CarteMap.vue'
const routes = [
  
  {
    path: '/about',
    name: 'about',
   
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/Accueil',
    name: 'Accueil',
    component: AccueilRevy
  },
  {
    path: '/CarteMap',
    name: 'CarteMap',
    component: CarteMap
  },
  {
    path:'/AboutUs',
    name:'AboutUs',
    component: AboutUs,
  },

  {    path:'/MeilleurYv',
      name: 'MeilleurYv',
    component: MeilleurYv,
  },
  {
    path: '/VosActivite',
    name: 'VosActivite',
    component: VosActivite,
  },
 {
  path:'/BienEtre',
  name:'BienEtre',
  component: BienEtre,

 } 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
