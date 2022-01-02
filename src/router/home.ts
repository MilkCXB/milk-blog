import { RouteRecordRaw } from 'vue-router';

const routers:Array<RouteRecordRaw>  = [
    {
      path: '/home',
      name: 'home',
      component: () => import('../pages/home.vue')
    }
  ]

export default routers