import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/pages/home/Home.vue'
//import City from '@/pages/city/City.vue'
//import Detail from '@/pages/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      //component: Home  当app文件特别大的时候可用 目的是为了解决异步组件加载的问题
      component: () => import('@/pages/Home/Home.vue')
    },{
      path: '/city',
      name: 'City',
      //component: City
      component: () => import('@/pages/city/City.vue')
    },
    {
      // 动态路由
      path: '/detail/:id',
      name: 'Detail',
      //component: Detail
      component: () => import('@/pages/detail/Detail.vue')
    }],
    scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
}
)
