<template>
  <div>
      <ul>
          <router-link class="cursor" tag="li" to="/customer/1/details">Customer 1</router-link>
          <router-link class="cursor" tag="li" to="/customer/2/details">Customer 2</router-link>
          <router-link class="cursor" tag="li" to="/customer/3/details">Customer 3</router-link>
      </ul>

  </div>
</template>

<script>
export default {
  
}
</script>

<style>
    .cursor{
        cursor: pointer;
    }
</style>