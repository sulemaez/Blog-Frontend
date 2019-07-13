import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
Vue.prototype.$http = axios
Vue.prototype.$url = 'http://localhost:8080/'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
