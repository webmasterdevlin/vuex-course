import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Heroes from '../heroes/views/Heroes'
import HeroDetail from '../heroes/views/HeroDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: { name: "heroes" }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/heroes',
    name: 'heroes',
    component: Heroes
  },
  {
    path: '/hero-detail/:id',
    name: 'hero-detail',
    component: HeroDetail
  },
  {
    path: "*",
    redirect: "/"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
