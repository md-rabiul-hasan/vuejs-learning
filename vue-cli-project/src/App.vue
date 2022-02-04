<template>
  <div>
    <Header 
      :students="students"
      :firstName="firstName"
      :lastName="lastName"
      @updateFirstName="firstName = $event"
    />
    <Footer />
  </div>
</template>

<script>
import Header from './Components/Header_Footer/Header.vue';
import Footer from './Components/Header_Footer/Footer.vue';
export default {
  data(){
    return {
      students: ['Rabiul', 'Munna', 'Arif', 'Ramjan'],
      firstName: 'Rabiul',
      lastName: 'Hasan'
    }
  },
  components:{
    Header,
    Footer
  }
}
</script>

<style>
  body{
    font-family: 'Roboto', sans-serif;
  }
</style>