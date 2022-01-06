import { RouteRecordRaw } from 'vue-router';

const routers:Array<RouteRecordRaw>  = [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/home.vue')
    }
  ]

export default routers