<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <app-header/>
  <div class="container my-5">
    <router-view />
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>
<style>

body {
  font-family: "Poppins", sans-serif;
  background-color: #f4f4f4;
}
.btn-primary {
  background: #16abf8 !important ;
  color: white;
  font-weight: 600;
  font-size: 18px;
  border-color: #16abf8 !important ;
}
.dot {
  width: 14px !important;
  height: 14px !important;
}
</style>
