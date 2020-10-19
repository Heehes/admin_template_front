import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// elementUi
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// http
import Http from '@/libs/http.js'
// 公用方法
import utils from '@/libs/utils.js'
//权限
import { Check } from "./libs/permission";
//公用组件
import components from './components/index'
//图标文件
import '@/assets/iconFont/iconfont.css'
//主要样式
import '@/assets/styles/main.scss'
//自定义主题颜色
import '@/assets/styles/theme.scss'

Vue.use(utils);
Vue.use(components);
Vue.use(ElementUI);
Vue.prototype.$http = Http

Vue.config.productionTip = false

//权限校验
Vue.directive("autoPower", {
  inserted(el, binding) {
    if (!Check(binding.value))
      el.parentNode && el.parentNode.removeChild(el);
  },
});
//v-autoPower="'权限代码'" 进行使用

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
