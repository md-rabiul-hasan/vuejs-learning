<template>
  <div class="container">
    <component :is="componentRender"></component>
  </div>
</template>

<script>
import Contact from './Components/Contact.vue'
import Get from './Components/Get.vue'
export default {
  data(){
    return {
      componentRender: 'Get'
    }
  },
  components:{
    Contact,
    Get
  }
}
</script>

