<template>
  <div class="d-flex">
    <h1 class="me-auto mb-0 align-self-center">Activity</h1>
    <span
      @click="handleCreateActivity"
      class="btn btn-primary color-theme rounded-pill d-flex px-4 h-auto"
      data-toggle="modal" data-target="#exampleModal"
    >
      <img class="img-fluid" src="../../../assets/tabler_plus.svg" alt="" />
      <span class="align-self-center mb-0 ms-2">Tambah</span></span
    >
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: ["handleCreateActivity"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-background {
  /* header-background */

  /* position: absolute; */
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
