import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Volte aqui!";
})

window.addEventListener("focus", () => {
  document.title = docTitle;
})
