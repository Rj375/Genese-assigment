import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home.vue')
    },
    {
      path: '/counter',
      name: 'Counter',
      component: () => import('@/components/Counter.vue')
    },
    {
      path: '/nav',
      name: 'Nav',
      component: () => import('@/components/Nav.vue')
    },
    {
      path: '/calculator',
      name: 'Calculator',
      component: () => import('@/components/Calculator.vue')
    },
    {
      path: '/time',
      name: 'Time',
      component: () => import('@/components/Time.vue')
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import('@/components/Form.vue')
    },
    {
      path: '/layout',
      name: 'Layout',
      component: () => import('@/components/Layout.vue')
    },
    {
      path: '/area',
      name: 'Area',
      component: () => import('@/components/Area.vue')
    }

]

const router = new VueRouter({
  routes
})

export default router
