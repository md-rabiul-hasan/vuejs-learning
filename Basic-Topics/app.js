var temp = `<h2>My Name is {{ name }}</h2>`
var app1 = new Vue({
    data:{
        name: 'Rabiul Hasan'
    },
    template: temp
});

setTimeout(() => {
    app1.$mount('#app');
}, 2000);