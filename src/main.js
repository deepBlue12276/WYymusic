import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from './store'
import Vant from 'vant'
import http from '@/server/https'
import { Notify } from 'vant'
import 'vant/lib/index.css'
import '@/style/common.less'


Vue.prototype.$http = http
Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(Notify)
new Vue({
  router,
  store,
  render: h=>h(App),
}).$mount('#app')
