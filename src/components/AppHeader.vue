<template>
  <div class="header-background py-4" data-cy="header-background">
    <div class="container">
      <span class="header-title" data-cy="header-title">TO DO LIST APP</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-background {
  /* header-background */

  position: absolute;
  width: 100vw;
  height: auto;
  left: 0px;
  top: 0px;

  background: #16abf8;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.header-title {
  /* header-title */
  
/* 
  position: absolute;
  width: 135px;
  height: 27px;
  left: 20px;
  top: 19px; */

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #ffffff;
}
</style>
