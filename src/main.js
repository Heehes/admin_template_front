import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 公用方法
import utils from '@/libs/utils.js'
// elementUi
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//图标文件
import '@/assets/iconFont/iconfont.css'
//主要样式
import '@/assets/styles/main.scss'
//自定义主题颜色
import '@/assets/styles/theme.scss'

Vue.use(utils);
Vue.use(ElementUI);
//element组件默认尺寸
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
