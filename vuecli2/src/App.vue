<template>
  <div class="container">
    <Client />
    <hr>
    <User />
  </div>
</template>

<script>
import Client from './components/Client.vue'
import User from './components/User.vue'
export default {
  data(){
    return {
     
    }
  },
  components:{
    Client,
    User
  }
}
</script>

