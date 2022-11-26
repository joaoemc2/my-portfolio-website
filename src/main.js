import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'G-WC4R22V9TJ',
  router
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
