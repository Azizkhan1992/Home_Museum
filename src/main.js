import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import router from '@/router'
import store from '@/plugins/store/store'
import filter from '@/others/filter'

Vue.config.productionTip = false


new Vue({
  filter,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
