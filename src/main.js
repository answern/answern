// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import store from './store'
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

//============================== Element UI ==============================

Vue.use(ElementUI);
Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 }; //mini

import Components from './plugins/components'
Vue.use(Components);

import {$loading, $success} from './pub/tool'
Vue.prototype.$$loading = $loading;
Vue.prototype.$$success = $success;


//================================ Vue Root =================================
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})