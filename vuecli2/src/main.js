import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('user', {
  bind(el, binding){
    el.innerHTML = binding.value
    if(binding.modifiers.red){
      el.style.color='red'
    }
    if(binding.modifiers.bold){
      el.style.fontWeight='bold'
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
