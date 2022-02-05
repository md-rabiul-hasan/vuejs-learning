<template>
    <div>
        <h3>Blog List</h3>
        <h5 v-if="!display">Loading.....</h5>
        <ul v-if="display">
            <li v-for="(post,index) in posts" :key="index">
                {{ post.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            posts: [],
            display: false,
        }
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/todos')
        .then( (res) => {
            this.posts = res.data
            this.display = true
        })
    },
}
</script>

<style>

</style>