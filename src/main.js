import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import router from './router/index.js'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
