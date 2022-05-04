import { RouteRecordRaw } from 'vue-router';

const routers: Array<RouteRecordRaw> = [
    {
        path: '/study',
        name: 'Study',
        meta: {
            title: '学习笔记'
        },
        component: () => import('../pages/study/index.vue')
    }
]

export default routers