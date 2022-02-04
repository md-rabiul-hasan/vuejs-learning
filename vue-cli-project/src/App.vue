<template>
  <div>
    <UserListSlot>
      <template v-slot:studentList>
        <ul>
          <li v-for="(student, index) in students" :key="index">
            {{ student }}
          </li>
        </ul>
      </template>
      <template v-slot:loader>
      </template>

      
    </UserListSlot>
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