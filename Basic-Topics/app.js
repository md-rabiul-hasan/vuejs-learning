new Vue({
    el: '#app',
    data:{
       name: 'Rabiul Hasan'
    },
    methods: {
        changeName(){
            setTimeout(() => {
                this.name = 'Nazrul Islam'
            }, 2000);
        }
    }
})