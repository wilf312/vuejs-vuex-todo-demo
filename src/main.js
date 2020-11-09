import Vue from 'vue'
import App from './App.vue'
import store from './store/store' // import the store we just created

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store
})
