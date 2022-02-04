<template>
  <div>
    <Header />
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <Footer />
  </div>
</template>

<script>
import Header from './Components/Header_Footer/Header.vue';
import Footer from './Components/Header_Footer/Footer.vue';
export default {
  data(){
    return {
      name: 'Rabiul Hasan',
      age: 13
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