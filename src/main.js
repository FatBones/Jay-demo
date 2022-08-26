import VueRouter from 'vue-router';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI)

new Vue({
  el:'#app',
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;//游鬼
  },
  router,
  store
})
router.replace('/home')