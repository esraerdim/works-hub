import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import navbar from './pages/profile.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {
      path:'/',
      component:navbar,
    }

  ]
})

new Vue({
  el:'#app',
  router,
  render: h => h(App),
}).$mount('#app')
