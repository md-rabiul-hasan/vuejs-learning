<template>
    <div>
      <BookListOne/>
      <BookListTwo/>
    </div>
</template>

<script>
import BookListOne from './components/BookListOne.vue'
import BookListTwo from './components/BookListTwo.vue'
export default {
    data(){
      return {
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