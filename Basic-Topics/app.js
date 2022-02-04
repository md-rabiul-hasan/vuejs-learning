new Vue({
    el: '#app',
    data:{
       name: '',
       x: 0,
       y: 0,
    },
    methods: {
        getName(){
            return this.name = 'Rabiul Hasan';
        },
        findMouserMove(event){
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
})