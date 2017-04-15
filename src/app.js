// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//注意:此处因为 import 关键字具有提权作用，所以 import 进来的css回提前执行,就是 会被 require 覆盖


require ('bootstrap/dist/js/bootstrap.js')
require ('bootstrap/dist/css/bootstrap.css')
require ('jquery/dist/jquery.min.js')
require ('../static/common-color.css')

import Vue from 'vue'
import Element from 'element-ui'
import router from './router'
import store from './store'
import App from './index'

Vue.use(Element)

/* eslint-disable no-new */
export default 	new Vue({
  el: '#app',
  store,
  router,
  ...App
})
