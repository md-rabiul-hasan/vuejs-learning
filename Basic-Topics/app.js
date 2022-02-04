new Vue({
    el: '#app',
    data:{
        title: 'Rabiul Hasan',
        isTrue: false,
        myArray : ['Munna', 'Arif'],
        myObj: {
            name: 'Arif',
            age: 20
        }
    },
    methods: {
        myFunction: function(){
            return "ooo";
        },
        getTitle(){
            return this.title;
        }
    },
})