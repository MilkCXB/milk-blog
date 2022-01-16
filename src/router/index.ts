import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import homeRouters from './home'
import detailRouters from './detail'
// import MyUser from './components/MyUser.vue'
// import 

const routes: Array<RouteRecordRaw> = [...homeRouters,...detailRouters]


const router = createRouter({
  history: createWebHistory(''),
  routes: [...routes]
})




router.beforeEach((to: RouteLocationNormalized, form: RouteLocationNormalized) => {
  console.log(to,form);
   
 
   // 设置页面标题
   document.title = to.meta.title ? to.meta.title as string : 'milk博客'
})

export default router