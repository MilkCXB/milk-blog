import { RouteRecordRaw } from 'vue-router';

const routers: Array<RouteRecordRaw> = [
    {
        path: '/music',
        name: 'Music',
        meta: {
            title: '音乐心得'
        },
        component: () => import('../pages/music/index.vue')
    }
]

export default routers