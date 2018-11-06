import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import welcome from '@/pages/index'
import Home from '@/pages/home'
// import Story from '@/pages/storys'

Vue.use(Router)

export default new Router({
  routes: [
    {
      mode:'history',
      path: '/',
      name: 'welcome',
      // component:welcome,
      component:resolve => require(['@/pages/index'],resolve), //懒加载
    },
    {
      mode:'history',
      path: '/Home/:user',
      name: 'Home',
      // component:Home,
      component: resolve => require(['@/pages/home'],resolve)
    },
    {
      mode:'history',
      path:'/Story',
      name:'Story',
      component:resolve => require(['@/pages/storys'],resolve)
    }
  ]
})
