<template>
  <div class="detail-view">
    <todo-header />
    <div v-if="dataDetails?.length > 0">
      <div class="d-flex gap-3" v-for="item in dataDetails" :key="item.id">
          <input type="checkbox" name="" id="">
          <div>{{item.priority}}</div>
          <span>{{item.title}}</span>
        
      </div>
    </div>

    <div class="d-flex justify-content-center mt-5" v-else>
      <img
        @click="handleCreateActivity"
        class="img-fluid w-50 btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        src="../../assets/todo-empty-state.svg"
        alt=""
      />
    </div>

    <modal-add-todo />
  </div>
</template>
<script>
/* eslint-disable */
import TodoHeader from "./components/TodoHeader.vue";
import ModalAddTodo from "./components/ModalAddTodo.vue";

export default {
  name: "DetailView",
  data() {
    return {
      dataDetails: null,
    };
  },
  components: {
    TodoHeader,
    ModalAddTodo,
  },
  methods: {
    handleCreateTodo() {},
  },
  created() {
    axios
      .get(`/activity-groups/` + this.$route.params.id)
      .then((response) => {
        this.dataDetails = response.data.todo_items;
        console.log("datadetails",this.dataDetails)
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
<style scoped></style>
