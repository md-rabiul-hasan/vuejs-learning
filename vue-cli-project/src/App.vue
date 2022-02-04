<template>
  <div>
    <UserListSlot></UserListSlot>
  </div>
</template>

<script>
import UserListSlot from './Components/UserListSlot.vue'
export default {
 data(){
   return {
     students: ['Rabiul', 'Ramjan', 'Halim'],
     loading : false
   }   
 },
 components:{
  UserListSlot
 }
}
</script>

<style>
  body{
    font-family: 'Roboto', sans-serif;
  }
</style>