import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入字体图标
import './assets/iconfont/iconfont.css'

// 引入自定义组件
import './components/Global'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
