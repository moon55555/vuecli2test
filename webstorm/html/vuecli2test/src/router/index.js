import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login'
import home from '../components/home'
import users from '../components/user/users'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      // 重定向
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      component: home,
      children: [{path: '/users', component: users}]
    }
  ]
})

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   // to将要访问的路径
//   // from代表从哪个路径跳转而来
//   // next是一个函数，表示放行
//   // next（）放行  next('/login')强制跳转
//   if (to.path === '/login') return next()
//   // 获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// })

export default router
