import Vue from 'vue'
import Router from 'vue-router'

import Goals from '@/components/Goals'
import Shutouts from '@/components/Shutouts'
import Matches from '@/components/Matches'
import Champions from '@/components/Champions'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Default',
    //   component: Default
    // },
    {
      path: '/Goals',
      name: 'Goals',
      component: Goals
    },
    {
      path: '/Champions',
      name: 'Champions',
      component: Champions
    },
    {
      path: '/Matches',
      name: 'Matches',
      component: Matches
    },
    {
      path: '/Shutouts',
      name: 'Shutouts',
      component: Shutouts
    },
  ]
})
