import Vue from 'vue'
//导入
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import All from '../compontes/all.vue'
import Home from '../compontes/home.vue'
import Login from '../compontes/User/Login.vue'
import Register from '../compontes/User/Register.vue'
const routes=[
  {path:'/all',component:All},
  {path:'/login',component:Login},
  {path:'/register',component:Register},
  {path:'/home',component:Home},
  {path:'*',redirect:'/all'}
]

const router = new VueRouter({
  routes
})

export default router
