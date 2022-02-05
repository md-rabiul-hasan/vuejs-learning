<template>
  <div class="container">
    <component :is="componentRender"></component>
  </div>
</template>

<script>
import Contact from './Components/Contact.vue'
export default {
  data(){
    return {
      componentRender: 'Contact'
    }
  },
  components:{
    Contact
  }
}
</script>

