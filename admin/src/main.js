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
import app from './App.vue'

let alertOptions = { 

}

// Vue.use(BootstrapVue)
Vue.use(VueSweetalert2,alertOptions)
Vue.prototype.$bus = EventBus
Vue.prototype.$http = axios
Vue.prototype.$url = "http://localhost:8080/admin/"
Vue.prototype.$urluser = "http://localhost:8080/"


new Vue({
  el: '#vue-app',
  render: h => h(app),
  router
})
