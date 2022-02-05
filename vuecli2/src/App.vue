<template>
  <div class="container">
    <button @click="display=!display">Toggle</button>
    <hr>
    <transition 
    name="alert-card"
    enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeInDown delay-3s"
    >
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

