var app1 = new Vue({
    el: '#app1',
    data:{

    },
    methods: {
        changeInstance(){
            app2.value = "Nazrul Islam"
        }
    },
});

var app2 = new Vue({
    el: '#app2',
    data:{
        value: 'Rabiul Hasan'
    }
});