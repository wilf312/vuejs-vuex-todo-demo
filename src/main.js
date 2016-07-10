import Vue from 'vue'
import app from './app.vue'
import store from './store/store' // import the store we just created

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    app
  },
  store
})
