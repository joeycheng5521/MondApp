import Vue from 'vue'
import FastClick from 'fastclick'
import 'normalize.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/responsive'
import './assets/global.css'
import Home from './components/HelloWorld'

if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = function (targetElement) {
    targetElement.focus()
  }
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:'/',component:Home}
  ]

})



new Vue({
  render: h => h(App)
}).$mount('#app')
