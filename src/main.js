import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 配置全局资源
import '@/assets/css/style.css';
import './assets/js/Adaptive';

// 路由引入
import router from './plugins/router.config';

import './plugins/axios'

//配置全局 baseUrl
import config from './config/config';
window.baseUrl = config.baseUrl.localhost_https

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
