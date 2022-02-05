<template>
  <div class="container">
    <button @click="display=!display">Toggle</button>
    <hr>
    <transition name="alert-card">
      <div v-if="display" class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
    </transition>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      name: 'Rabiul Hasan',
      display: false
    }
  }
}
</script>

<style>
  /* Enter and leave animations can use different */
/* durations and timing functions.              */
.alert-card-enter-active {
  transition: all .3s ease;
}
.alert-card-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.alert-card-enter, .alert-card-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>