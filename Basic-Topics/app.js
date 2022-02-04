new Vue({
    el: '#app',
    data:{
        user: 'rabiul',
        userAge: 16,
        allowedAge: 18
    },
    methods: {
        checkRabiulAccess(){
            return this.user === 'rabiul' ? true : false
        }
    },
})