import { RouteRecordRaw } from 'vue-router';

const routers: Array<RouteRecordRaw> = [
    {
        path: '/game',
        name: 'Game',
        meta: {
            title: '游戏心得'
        },
        component: () => import('../pages/game/index.vue')
    }
]

export default routers