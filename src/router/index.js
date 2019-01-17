import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('../pages/home/index')), 'home')
const project = r => require.ensure([], () => r(require('../pages/project/index')), 'project')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/project/index',
      name: 'project',
      component: project
    }
  ]
})
