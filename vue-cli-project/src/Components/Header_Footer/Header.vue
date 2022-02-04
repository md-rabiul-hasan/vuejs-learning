<template>
    <div>
        <p>Student List</p>
        <ul>
            <li v-for="(student,index) in students" :key="index">
                {{ student }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
   props:{
       students:{
           type: Array
       }
   }
    
}
</script>


<style scoped>
    p{
        color: red
    }
</style>