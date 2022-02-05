<template>
    <div>
        Customer Details {{ $route.params.id }}
        <router-link :to="{ name: 'customer_edit', params: { id: $route.params.id }}">Edit</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>