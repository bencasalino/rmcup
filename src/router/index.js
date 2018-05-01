import Vue from 'vue'
import Router from 'vue-router'

import History from '@/components/History'
import About from '@/components/About'
import Stats from '@/components/Stats'
import Resources from '@/components/Resources'
import Rules from '@/components/Rules'
import API from '@/components/API'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/History',
      name: 'History',
      component: History
    },
    {
      path: '/Rules',
      name: 'Rules',
      component: Rules
    },
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/Resources',
      name: 'Resources',
      component: Resources
    },
    {
      path: '/Stats',
      name: 'Stats',
      component: Stats
    },
    {
      path: '/API',
      name: 'API',
      component: API
    },
  ]
})
