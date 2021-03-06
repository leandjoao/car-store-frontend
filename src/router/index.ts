import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/sobre', name: 'Sobre', component: About },
  { path: '*', name: 'NotFound', component: NotFound },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router