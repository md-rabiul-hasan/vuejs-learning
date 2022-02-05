<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Vue Router</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about-us">About-Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/customer/1">Customer-1</router-link>
                    </li>
                     <li class="nav-item">
                        <router-link class="nav-link" to="/customer/2">Customer-2</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <hr>
        <router-view></router-view>
    </div>    
</template>

<script>
export default {
  
}
</script>

<style>

</style>