import Vue from 'vue';
import axios from 'axios';

axios.defaults.withCredentials=true;//统一携带凭证，用来反向跨域

window.axios=axios;
Vue.prototype.$axios=axios;

export default axios;