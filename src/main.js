// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import { routes } from './routes';
import store from './store/store';
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'https://vue-stocks-49e88.firebaseio.com/';

Vue.filter('currency', (value)=>{
  return 'Ksh' + value.toLocaleString();
})
const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
