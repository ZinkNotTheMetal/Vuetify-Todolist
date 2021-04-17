import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '@/views/Todo'
import Research from '@/views/Research'
import ShoppingList from '@/views/ShoppingList'
import NextToPurchase from '@/views/NextToPurchase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Todo
  },
  {
    path: '/research',
    name: 'Research',
    component: Research
  },
  {
    path: '/shopping-list',
    name: 'Shopping List',
    component: ShoppingList
  },
  {
    path: '/next-purchase',
    name: 'Next to Purchase',
    component: NextToPurchase
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
