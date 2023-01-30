import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import router from '@/router'
import store from '@/plugins/store/store'
import filter from '@/others/filter'
import i18n from './i18n'

Vue.config.productionTip = false


new Vue({
  filter,
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
