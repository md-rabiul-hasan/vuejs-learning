<template>
    <div class="container">
        <button @click="componentToRender='Home'" >Home</button>
        <button @click="componentToRender='About'" >About</button>
        <button @click="componentToRender='Contact'" >Contact</button>

        <keep-alive>
            <component :is="componentToRender"></component>
        </keep-alive>
        
    </div>
</template>

<script>
import Home from './Components/Home.vue'
import About from './Components/About.vue'
import Contact from './Components/Contact.vue'
export default {
    data(){
        return {
            componentToRender: 'Home'
        }
    },
    components:{
        Home,
        About,
        Contact
    }
}
</script>

<style>
    
</style>