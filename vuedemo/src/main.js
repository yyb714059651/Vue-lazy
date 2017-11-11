// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import VueLazyload from 'vue-lazyload'
import VueLazyComponent from '@xunlei/vue-lazy-component'

import './assets/iconfont/iconfont.css'
import './assets/css/animate.css'
import './assets/css/swiper.css'

import './assets/js/common.js'
//import './assets/js/swiper.jquery.min.js'
//import './assets/js/jquery-2.1.4.min.js'
import './assets/js/swiper.js'
import './assets/js/swiper.animate1.0.2.min.js'

Vue.config.productionTip = false;
Vue.use(VueLazyComponent);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/assets/logo.png',
  //loading: '../static/assets/lzj.gif',
  loading: '../static/assets/logo2.png',
  //attempt: 3
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
