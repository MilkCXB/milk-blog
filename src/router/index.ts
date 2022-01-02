import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import homeRouters from './home'
// import MyUser from './components/MyUser.vue'
// import 

const routes: Array<RouteRecordRaw> = [...homeRouters]
console.log('routes: ', routes);
console.log(createWebHistory(''));

const router = createRouter({
  history: createWebHistory(''),
  routes: [...routes],
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth'
    }
  }
})




router.beforeEach((to: RouteLocationNormalized, form: RouteLocationNormalized) => {

})

export default router