import { createRouter, createWebHistory } from "vue-router";
import routes from './config.ts'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// router.beforeEach((to, from, next) => {
//   if (to.path === '/home') {
//     next()
//     return
//   }
//   let user = JSON.parse(localStorage.getItem('user'))
//   if (user && user.userName && user.pwd) {
//     next()
//     return
//   }
//   next('/home')
// })
export default router;