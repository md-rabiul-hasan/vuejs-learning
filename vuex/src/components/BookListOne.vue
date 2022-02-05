<template>
  <div id="book-list-one">
      <h4>BookList One</h4>
      <ul>
          <li v-for="(book, index) in books" :key="index">
              <span class="name">{{ book.name }}</span>
              <span class="name">$ {{ book.price }}</span>
          </li>
        </ul>
  </div>
</template>

<script>
export default {
  data(){
      return {

      }
  },
  props: ['books']
}
</script>

<style scoped>
    #book-list-one{
    background: rgb(218, 201, 14);
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 10px;
    padding: 10px 20px;
}
#book-list-one ul{
    padding: 0;
}
#book-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>