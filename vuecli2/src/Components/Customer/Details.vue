<template>
    <div>
        Customer Details {{ $route.params.id }}
        <router-link :to="{ name: 'customer_edit', params: { id: $route.params.id }, query: {locale:'en', q: 100} }">Edit</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>