import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('../pages/home/index')), 'home')
// project
const project = r => require.ensure([], () => r(require('../pages/project/index')), 'project')
const changeEnv = r => require.ensure([], () => r(require('../pages/project/changeEnv')), 'changeEnv')

// webpack
const webpack = r => require.ensure([], () => r(require('../pages/webpack/index')), 'webpack')
const ensure = r => require.ensure([], () => r(require('../pages/webpack/ensure')), 'ensure')

// sass
const sass = r => require.ensure([], () => r(require('../pages/sass/index')), 'sass')
const beginner = r => require.ensure([], () => r(require('../pages/sass/beginner')), 'beginner')
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
    },
    {
      path: '/project/changeEnv',
      name: 'changeEnv',
      component: changeEnv
    },
    {
      path: '/webpack/index',
      name: 'webpack',
      component: webpack
    },
    {
      path: '/webpack/ensure',
      name: 'ensure',
      component: ensure
    },
    {
      path: '/sass/index',
      name: 'sass',
      component: sass
    },
    {
      path: '/sass/beginner',
      name: 'beginner',
      component: beginner
    }
  ]
})
