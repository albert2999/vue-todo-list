<template>
  <div class="detail-view">
    <todo-header
    :dataDetails="dataDetails"
    />
    <div class="mt-4" v-if="dataDetails?.length > 0">
      <div
        v-for="item in dataDetails"
        :key="item.id"
        class="card mb-3"
        data-cy="activity-item"
      >
        <div class="card-body py-4 px-4">
          <div class="d-flex">
            <div
              class="card-subtitle me-auto mt-1 align-self-center d-flex gap-3"
            >
              <input type="checkbox" />
              <div
                class="dot border border-light rounded-circle align-self-center"
                :style="`background-color: ${findColor(item.priority)};`"
              ></div>
              <!-- <div>{{ item.priority }}</div> -->
              <span>{{ item.title }}</span>
              <img
                @click="handleUpdate()"
                class="img-fluid btn p-0"
                src="../../assets/todo-title-edit-button.svg"
                alt=""
              />
            </div>

            <img
              @click="handleDelete(item.id)"
              class="img-fluid btn p-0"
              src="../../assets/icon-delete.svg"
              alt=""
            />
          </div>
        </div>
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

    <modal-add-todo
    :handleCreateLocale="handleCreateLocale"
    />
  </div>
</template>
<script>
/* eslint-disable */
import TodoHeader from "./components/TodoHeader.vue";
import ModalAddTodo from "./components/ModalAddTodo.vue";
import priorities from "../../priorities.js";

export default {
  name: "DetailView",
  data() {
    return {
      dataDetails: null,
      priorities,
    };
  },
  components: {
    TodoHeader,
    ModalAddTodo,
  },
  methods: {
    handleCreateTodo() {},
    findColor(val) {
      return priorities.find((sourceItem) => sourceItem.value == val).color;
    },
    handleCreateLocale(newData) {
      this.dataDetails.unshift(newData)
    },
    handleDeleteLocale(id) {
      let newData = this.dataDetails.filter((el) => {
        return el.id != id;
      });
      this.dataDetails = newData;

    },
    handleDelete(id) {
      if (id) {
        axios
          .delete(`/todo-items`, {
            params: { id: id },
          })
          .then((response) => {
            // this.data = response.data.data;
            console.log("delete", response.data);
            this.handleDeleteLocale(id);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
  created() {
    axios
      .get(`/activity-groups/` + this.$route.params.id)
      .then((response) => {
        this.dataDetails = response.data.todo_items;
        console.log("datadetails", this.dataDetails);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}
</style>
