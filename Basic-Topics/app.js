new Vue({
    el: '#app',
    data:{
       name: '',
       x: 0,
       y: 0,
    },
    methods: {
        updateMobileNumber(event){
            console.log(event);
        },
        handelForm(){
            console.log("yes");
        }
    }
})