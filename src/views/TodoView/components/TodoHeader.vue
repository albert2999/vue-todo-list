<template>
  <div class="d-flex">
    <router-link to="/" class="text-decoration-none text-dark p-0 px-2 me-3">
      <h1 class="mb-0">&lt;</h1>
    </router-link>
    <input v-model="recentTitle" type="text" style="outline: 0; border:0;">
    <h1 class="mb-0 me-3 align-self-center">{{dataDetails?.title}}</h1>
    <img
      @click="handleEditTitle()"
      class="me-auto img-fluid btn p-0"
      src="../../../assets/todo-title-edit-button.svg"
      alt=""
    />
    <span
      class="btn btn-primary color-theme rounded-pill d-flex px-4 h-auto"
      data-bs-toggle="modal"
      data-bs-target="#addModal"
    >
      <img class="img-fluid" src="../../../assets/tabler_plus.svg" alt="" />
      <span class="align-self-center mb-0 ms-2">Tambah</span></span
    >
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: ["dataDetails","id"],
  data() {
    return {
      recentTitle:null,
    }
  },
  methods: {
    handleEditTitle (){
      this.recentTitle = this.dataDetails.title;
    }
  },
  created() {
    
  },
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
