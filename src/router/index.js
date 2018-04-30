import Vue from 'vue'
import Router from 'vue-router'
// import Default from '@/components/Default'
import GoalsWrapper from '@/components/GoalsWrapper'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Default',
    //   component: Default
    // },
    {
      path: '/GoalsWrapper',
      name: 'GoalsWrapper',
      component: GoalsWrapper
    }
  ]
})
