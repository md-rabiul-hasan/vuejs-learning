<template>
    <div class="container">
        <h4>{{ text }}</h4>
        <ul>
            <li v-for="(car,index) in cars" :key="index">
                {{car}}
            </li>
        </ul>
    </div>
</template>

<script>
import {cars} from './mixins.js'
export default {
    data(){
        return {
            text: 'Client List'
        }
    },
    mixins: [cars],
    
}
</script>

<style lang="">
    
</style>