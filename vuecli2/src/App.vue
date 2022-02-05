<template>
  <div class="container">
    <p v-user.red.bold="'Rahman Mia'"></p>
    <p v-people.red.bold="name"></p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name: 'Rabiul Hasan'
    }
  },
  directives:{
    'people': {
      bind(el,binding){
        el.innerHTML = binding.value
        if(binding.modifiers.red){
          el.style.color='red'
        }
        if(binding.modifiers.bold){
          el.style.fontWeight='bold'
        }
      }
    }
  }
}
</script>

<style>
  
</style>