new Vue({
    el: '#app',
    data: {
        name: 'Rabiul Hasan'
    },
    methods: {
        updateName(){
            this.name = "Nazrul Islam"
        },
        destroyName(){
            this.$destroy();
        }
    },
    beforeCreate() {
        console.log("before create");
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('before mount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('before update')
    },
    updated() {
        console.log('updated')
    },
    beforeDestroy() {
        console.log('before destroy')
    },
    destroyed() {
        console.log('destory')
    },
});