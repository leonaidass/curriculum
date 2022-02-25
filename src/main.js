import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import Lottie from 'vue-lottie'

Vue.config.productionTip = false
Vue.component('lottie',Lottie)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
