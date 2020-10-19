// 公用组件
import labelContent from './public/labelContent.vue'            //标题
import searchBox from './public/searchBox.vue'            //筛选搜索栏

const components = {
  install: function (Vue) {
    // 公用组件
    Vue.component('LabelContent', labelContent)
    Vue.component('SearchBox', searchBox)
  }
}
export default components
