import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/main.scss'
import '@/assets/scss/counter.scss'
import '@/assets/scss/form.scss'
import '@/assets/scss/time.scss'
import '@/assets/scss/layout.scss'
import '@/assets/scss/calculator.scss'
import '@/assets/scss/area.scss'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
