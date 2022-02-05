<template>
  <div class="container">
    <p>{{ name | capitalize }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name: 'rabiul hasan'
    }
  },
  filters:{
    capitalize(value){
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

