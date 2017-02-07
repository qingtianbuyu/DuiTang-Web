// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

require ('bootstrap/dist/js/bootstrap.js')
require ('bootstrap/dist/css/bootstrap.css')
require ('jquery/dist/jquery.min.js')
require ('../static/common-color.css')

import Vue from 'vue'
import router from './router/router.js'
import store from './store'
import App from './index'

console.log(router)


/* eslint-disable no-new */
export default 	new Vue({
  el: '#app',
  store,
  router,
  ...App
})
