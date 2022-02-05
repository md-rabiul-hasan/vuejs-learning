import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false

const router = new VueRouter({
  routes, // short for `routes: routes`,
  mode: 'history',
});




new Vue({
  render: h => h(App),
  router
}).$mount('#app')
