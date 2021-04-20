import Vue from 'vue'
import App from './App.vue'
import Authors from './Authors.vue'
import Books from './Books.vue'

const routes = {
  '/': App,
  '/authors': Authors,
  '/books' : Books
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute]
    }
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app')
