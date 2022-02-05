<template>
    <div>
      <BookListOne/>
      <BookListTwo/>

      <button @click="amountDecrease">Amount Decrease</button>
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
    },
    methods: {
      amountDecrease(){
        return this.$store.dispatch('priceReduceAction')
      }
    },
}
</script>

<style lang="">
  
</style>