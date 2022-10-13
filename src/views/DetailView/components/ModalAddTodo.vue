<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Tambah List item</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body py-5 px-3">
          <label class="mb-2" data-cy="modal-add-name-title"
            >NAMA LIST ITEM
          </label>
          <div class="mb-4" data-cy="modal-add-name-input">
            <input
              v-model="recentItemTitle"
              class="w-100"
              type="text"
              placeholder="Tambahkan Nama List Item"
            />
          </div>

          <label class="mb-2">PRIORITY</label>

          <div class="dropdown">
            <div
              class="btn btn-light dropdown-toggle d-flex"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div
                class="dot border border-light rounded-circle align-self-center me-2"
                :style="`background-color: ${recentPrior.color};`"
              ></div>
              {{ recentPrior.title }}
            </div>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li v-for="prior in priorities" :key="prior.value">
                <a
                  class="dropdown-item d-flex"
                  @click="handlePrior(prior)"
                  href="#"
                  ><div
                    class="dot border border-light rounded-circle align-self-center me-2"
                    :style="`background-color: ${prior.color};`"
                  ></div>
                  {{ prior.title }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            @click="handleSubmit()"
            data-bs-dismiss="modal"
            :class="`btn btn-primary color-theme rounded-pill d-flex px-4 h-auto ${
              recentItemTitle ? '' : 'disabled'
            }`"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "ModalAddTodo",
  data() {
    return {
      recentItemTitle: null,
      recentPrior: {
        title: "Very High",
        value: "very-high",
        color: "#dc3545",
      },
      priorities: [
        {
          title: "Very High",
          value: "very-high",
          color: "#dc3545",
        },
        {
          title: "High",
          value: "high",
          color: "#F8A541",
        },
        {
          title: "Normal",
          value: "normal",
          color: "#00A790",
        },
        {
          title: "Low",
          value: "low",
          color: "#428BC1",
        },
        {
          title: "Very Low",
          value: "very-low",
          color: "#8942C1",
        },
      ],
    };
  },
  props: {},
  methods: {
    handlePrior(val) {
      this.recentPrior = val;
      console.log("val", val);
      console.log("val", this.recentItemTitle);
    },
    handleSubmit() {
      axios
        .post(`/todo-items`, {
          activity_group_id: this.$route.params.id,
          title: this.recentItemTitle,
          priority: this.recentPrior.value,
        })
        .then((response) => {
          console.log("responseCreateItemList", response);
          this.recentItemTitle = null;
          this.recentPrior = {
            title: "Very High",
            value: "very-high",
            color: "#dc3545",
          };
          // this.dataActivity.unshift(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  font-weight: 600;
  font-size: 12px;
}

.dot {
  /* background-color: #dc3545; */
  width: 12pt !important;
  height: 12pt !important;
}

.btn-light {
  border: 1px solid #ccc !important;
  max-width: 50%;
  width: fit-content;
}

.dropdown-toggle::after {
  margin-top: 7pt;
}
</style>
