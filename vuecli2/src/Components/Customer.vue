<template>
  <div>
      <h4>Customer</h4>
      <h6>url id is {{ param_id }}</h6>
  </div>
</template>

<script>
export default {
  data(){
      return {
          param_id : this.$route.params.id
      }
  },
  watch:{
      '$route'(to){
          this.param_id = to.params.id
      }
  }
}
</script>

<style>

</style>