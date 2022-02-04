new Vue({
    el: '#app',
    data:{
       formData:{
           firstName: '',
           lastName: ''
       }
    },
    methods: {
        updateMobileNumber(event){
            console.log(event);
        },
        handelForm(){
           console.log(this.formData)
        }
    }
})