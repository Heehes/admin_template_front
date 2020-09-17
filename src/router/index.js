import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout.vue'
import Login from '../views/login.vue'

Vue.use(VueRouter)

const routerList = [];
let r = require.context("./routes", false, /\.routes\.js/)
r.keys().forEach((key) => {
  if(r(key).default)
    routerList.push(r(key).default)
});

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    // 首页
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home/home.vue'),
      meta: { title: '首页' }
    }]
  },
  ...routerList,
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
