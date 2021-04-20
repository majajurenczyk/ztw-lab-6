import Vue from 'vue'
import App from './App.vue'
import Authors from './Authors.vue'
import Books from './Books.vue'
import NotFound from './NotFound.vue'

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
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app')
