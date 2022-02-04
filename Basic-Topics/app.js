Vue.component('name', {
    data(){
        return {
            name: 'Rabiul Hasan'
        }
    },
    template: `<h4>My name is {{ name }}</h4>`
});

new Vue({
    el: '#app'
})