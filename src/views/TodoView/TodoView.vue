<template>
  <div class="detail-view">
    <todo-header :dataDetails="dataDetails" />
    <div class="mt-4" v-if="dataDetailsTodo?.length > 0">
      <div
        v-for="item in dataDetailsTodo"
        :key="item.id"
        class="card mb-3"
        data-cy="activity-item"
      >
        <div class="card-body py-4 px-4">
          <div class="d-flex">
            <div
              class="card-subtitle me-auto mt-1 align-self-center d-flex gap-3"
            >
              <input
                type="checkbox"
                :checked="!item.is_active"
                @change="handleActiveTodo(item)"
              />
              <div
                class="dot border border-light rounded-circle align-self-center"
                :style="`background-color: ${findColor(item.priority)};`"
              ></div>
              <!-- <div>{{ item.priority }}</div> -->
              <span
                :class="
                  item.is_active == 0
                    ? 'text-decoration-line-through text-muted'
                    : ''
                "
                >{{ item.title }}</span
              >
              <img
                @click="editTargetItem = item"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
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

    <modal-add-todo :handleCreateLocale="handleCreateLocale" />
    <modal-edit-todo
      :handleUpdateLocale="handleUpdateLocale"
      :editTargetItem="editTargetItem"
    />
  </div>
</template>
<script>
/* eslint-disable */
import TodoHeader from "./components/TodoHeader.vue";
import ModalAddTodo from "./components/ModalAddTodo.vue";
import ModalEditTodo from "./components/ModalEditTodo.vue";
import priorities from "../../priorities.js";

export default {
  name: "DetailView",
  data() {
    return {
      dataDetailsTodo: null,
      priorities,
      editTargetItem: null,
    };
  },
  components: {
    TodoHeader,
    ModalAddTodo,
    ModalEditTodo,
  },
  methods: {
    handleActiveTodo(item) {
      axios
        .patch(`/todo-items/${item.id}`, {
          is_active: !item.is_active,
        })
        .then((response) => {
          // this.data = response.data.data;
          console.log("isActive", response.data);
          this.handleUpdateLocale(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

      // console.log("active", val);
    },
    findColor(val) {
      return priorities.find((sourceItem) => sourceItem.value == val).color;
    },
    handleCreateLocale(newData) {
      this.dataDetailsTodo.unshift(newData);
    },
    handleUpdateLocale(newData) {
      let index = this.dataDetailsTodo.findIndex((e) => e.id == newData.id);
      this.dataDetailsTodo[index] = newData;
    },
    handleDeleteLocale(id) {
      let newData = this.dataDetailsTodo.filter((el) => {
        return el.id != id;
      });
      this.dataDetailsTodo = newData;
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
        this.dataDetailsTodo = response.data.todo_items;
        this.dataDetails = response.data;
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
