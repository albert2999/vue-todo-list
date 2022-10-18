<template>
  <div class="d-flex flex-wrap">
    <div class="d-flex my-3">
      <router-link to="/" class="text-decoration-none text-dark p-0 px-2 me-3 align-self-center">
        <h1 class="mb-0">&lt;</h1>
      </router-link>
      <input
        v-model="recentTitle"
        ref="inputField"
        @blur="handleLoseFocus"
        type="text"
        v-if="recentTitle"
      />
      <h1 v-else @click="handleEditTitle()" class="mb-0 me-3 align-self-center">{{ dataDetails?.title }}</h1>
      <img
        @click="handleEditTitle()"
        class="me-auto btn p-0 align-self-center"
        src="../../../assets/todo-title-edit-button.svg"
        alt=""
      />
      
    </div>
    <span
      class="btn btn-primary color-theme rounded-pill d-flex px-3 my-3 ms-auto"
      data-bs-toggle="modal"
      data-bs-target="#addModal"
    >
      <img class="align-self-center" src="../../../assets/tabler_plus.svg" alt="" />
      <span class="align-self-center mb-0 ms-2">Tambah</span>
      </span
  >
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: "AppHeader",
  props: ["dataDetails", "handleUpdateActivityLocale", "id"],
  data() {
    return {
      recentTitle: null,
    };
  },
  methods: {
    handleEditTitle() {
      this.recentTitle = this.dataDetails.title;
      setTimeout(() => {
        this.$refs.inputField.focus();
      }, 10);
    },
    handleLoseFocus() {
      console.log("test", this.recentTitle);
      console.log("test", this.dataDetails.title);

      if (!(this.recentTitle === this.dataDetails.title)) {
        axios
          .patch(`/activity-groups/${this.$route.params.id}`, {
            title: this.recentTitle,
          })
          .then((response) => {
            console.log("title tes update", response.data);
            this.handleUpdateActivityLocale(response.data.title);
            this.recentTitle = null;
          })
          .catch((error) => {
            console.error(error);
          });
      }
      this.recentTitle = null;
    },
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
  width: 70%;
  font-size: 2.5rem;
}

img {
  max-height: 20pt;
}

.btn {
  max-height: 30pt;
}


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
