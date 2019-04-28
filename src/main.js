import JQuery from 'jquery'

// css files
import 'va/lib/css'
 
// js files
import 'va/lib/script'
import Vue from 'vue'
import router from './router/router'
// import EventBus from './lib/eventBus.js'
import axios from 'axios'
import EventBus from 'va/lib/eventBus.js'
import VueSweetalert2 from 'vue-sweetalert2';

const alertOptions ={
  confirmButtonColor: '#74b4ff',
  cancelButtonColor: '#ff0000'
}


// Vue.use(BootstrapVue)
Vue.use(VueSweetalert2,alertOptions)
Vue.prototype.$bus = EventBus
Vue.prototype.$http = axios
Vue.prototype.$url = "http://localhost:8080/"

import app from './admin/App'

new Vue({
  el: '#vue-app',
  render: h => h(app),
  router
})
