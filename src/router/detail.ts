import { RouteRecordRaw } from 'vue-router';

const routers:Array<RouteRecordRaw>  = [
    {
      path: '/detail',
      name: 'detail',
      meta: {
        title: '详情'
    },
      component: () => import('../pages/detail.vue')
    }
  ]

export default routers