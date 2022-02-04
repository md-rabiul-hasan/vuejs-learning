<template>
    <div>
        <p>Student List</p>
        <ul>
            <li v-for="(student,index) in students" :key="index">
                {{ student }}
            </li>            
        </ul>
        <p>{{ firstName }}</p>
        <p>{{ lastName }}</p>
        <input type="text" v-model="newname">
        <button @click="updatedName">Click</button>
    </div>
</template>

<script>
export default {
   props:{
       students: Array,
       firstName: String,
       lastName: String
   },
   data(){
       return {
           newname: 'Rabiul'
       }
   },
   methods:{
       updatedName(){
           this.$emit('updateFirstName', this.newname)
       }
   }    
}
</script>


<style scoped>
    p{
        color: red
    }
</style>