<template>
    <div class="container">
        <form @submit.prevent="submitHandler">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" v-model="userData.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" v-model="userData.password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        submitHandler(){
            this.$http.post('https://jsonplaceholder.typicode.com/posts', {
                email: this.userData.email,
                password: this.userData.password
            }).then( (res) => {
                console.log(res);
            } )
        }
    },
}
</script>

<style>

</style>