import { RouteRecordRaw } from 'vue-router';

const routers: Array<RouteRecordRaw> = [
    {
        path: '/game',
        name: 'Mood',
        meta: {
            title: '个人心情'
        },
        component: () => import('../pages/mood/index.vue')
    }
]

export default routers