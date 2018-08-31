import Vue from 'vue'
import Router from 'vue-router'
import essentialData from '../view/essentialData'
import homePage from '../view/homePage'
import gather from '../view/gather'
import menu from '../view/system/menu'
import role from '../view/system/role'
import user from '../view/system/user'
import request from '../view/system/request'
import task from '../view/system/task'
Vue.use(Router)

const router = new Router({
    routes: [
        // 按需加载（推荐）
        {
            path: '/',
            component:homePage
        },
        {
          path: '/essential',
          component: essentialData
        },
      {
        path: '/gather',
        component: gather
      },
      {
        path: '/menu',
        component: menu
      },
      {
        path: '/role',
        component: role
      },
      {
        path: '/user',
        component: user
      },
      {
        path: '/request',
        component: request
      },
      {
        path: '/task',
        component: task
      },


    ]
})

// router.beforeEach((to, from, next) => {
//     window.scrollTo(0, 0)
// next()
// })
//
// router.beforeResolve((to, from, next) => {
//   next()
// })

export default router
