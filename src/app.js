// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

require ('bootstrap/dist/js/bootstrap.js')
require ('bootstrap/dist/css/bootstrap.css')
require ('jquery/dist/jquery.min.js')

import Vue from 'vue'
import router from './router/router.js'
import App from './index'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
