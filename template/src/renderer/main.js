import Vue from 'vue'
import App from './App.vue'
{{#with plugins.router}}
import router from './router'
{{/with}}
{{#with plugins.vuex}}
import store from './store'
{{/with}}

Vue.config.productionTip = false

new Vue({
  {{#with plugins.router}}
  router,
  {{/with}}
  {{#with plugins.vuex}}
  store,
  {{/with}}
  render: h => h(App)
}).$mount('#app')
