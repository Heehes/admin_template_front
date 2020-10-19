import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/layout.vue";
import Login from "../views/login.vue";

Vue.use(VueRouter);

const routerList = [];
let r = require.context("./routes", false, /\.routes\.js/);
r.keys().forEach((key) => {
  if (r(key).default) routerList.push(r(key).default);
});

const routes = [
  {
    path: "/login",
    name: "Login",
    hidden: true,
    component: Login,
  },
  {
    path: "/401",
    name: "401",
    component: () => import("@/views/errorPage/401"),
    hidden: true,
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/errorPage/404"),
    hidden: true,
  },
  {
    // 首页
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home/home.vue"),
        meta: {
          title: "首页",
          icon: 'iconfont u-shouye',
          cantClose: true
        },
      }
    ],
  },
  {
    // 个人中心
    path: "/personal",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/personal",
        name: 'Personal',
        component: () => import("@/views/Personal/personal.vue"),
        meta: {
          title: "个人中心",
          role: 'personal'
        },
      }
    ],
  },
  ...routerList,
  { path: "*", redirect: "/404", hidden: true },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//路由重复跳转报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
router.beforeEach((to, from, next) => {
  next()
  // next({
  //   path: '/401'
  // })
});

export default router;
