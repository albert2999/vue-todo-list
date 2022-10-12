<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <AppHeader/>
  <div class="container my-5">
    <router-view/>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>
<style>

</style>
