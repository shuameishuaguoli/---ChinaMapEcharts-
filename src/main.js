import Vue from 'vue'
import App from './App.vue'
// 引入自定义的Echarts文件
import Echart from './plugins/echarts'
// 引入中国地图
import '../node_modules/echarts/map/js/china'
Vue.config.productionTip = false
// 挂载到vue中
Vue.use(Echart)
new Vue({
  render: h => h(App),
}).$mount('#app')
