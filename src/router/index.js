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
import add from '../view/law-page/components/add-law-person'
import LawPage from '../view/law-page/index.vue'
import law from '../view/law-page/components/lawperson'
import exchange from '../view/law-page/components/exchange'
import edd from '../view/law-page/components/edd'
import edit from '../view/law-page/components/edit'
import cl from '../view/law-page/components/cl'

// import kpcx from '../view/law-page/kpsqcx.vue'
// import business from '../view/law-page/businessPeriod.vue'





Vue.use(Router)

const router = new Router({
  routes: [
    // 按需加载（推荐）
    {
      path: '/',
      component:homePage
    },
    {
      path: '/law',
      component: LawPage
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
    {
      path: '/add',
      component: add
    },
    {
      path:'/exchange',
      component:exchange
    },
    {
      path:'/edd',
      component:edd
    },
    {
      path:'/edit',
      component:edit
    },
    {
      path:'/cl',
      component:cl
    }




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
