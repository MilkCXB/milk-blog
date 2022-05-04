import { RouteRecordRaw } from 'vue-router';

const routers: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '主页'
    },
    component: () => import('../pages/home.vue')
  }
]

export default routers