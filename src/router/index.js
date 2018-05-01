import Vue from 'vue'
import Router from 'vue-router'

import Goals from '@/components/Goals'
import Shutouts from '@/components/Shutouts'
import Matches from '@/components/Matches'
import Champions from '@/components/Champions'
import About from '@/components/About'
import SubHeader from '@/components/SubHeader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Goals,
      children: [{
        path: 'Goals',
        component: Goals,
        wtf: Goals
      },
      ]
    }
  ],
})
