<template>
    <div>
      <BookListOne :books="books"/>
      <BookListTwo :books="books"/>
    </div>
</template>

<script>
import BookListOne from './components/BookListOne.vue'
import BookListTwo from './components/BookListTwo.vue'
export default {
    data(){
      return {
        books: [
          {name: 'Laravel Book', price: 120},
          {name: 'Devops Book', price: 100},
          {name: 'Js Book', price: 200},
          {name: 'Data Structure & Algorithm', price: 150},
        ]
      }
    },
    components:{
      BookListOne,
      BookListTwo
    }
}
</script>

<style lang="">
  
</style>