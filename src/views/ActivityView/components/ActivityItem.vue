<template>
    <div class="card" data-cy="activity-item">
      <div class="card-body p-0">
        <div>
          <router-link
          :to="{ name: 'detail', params: { id: act.id } }"
          class="text-decoration-none text-dark"
          >
            <h4
              class="card-title activity-item-body"
              data-cy="activity-item-title"
            >
              {{ act.title }}
            </h4>
          </router-link>
        </div>
        <div class="d-flex">
          <span class="card-subtitle me-auto mt-1 align-self-center">{{
            handleDate(act.created_at)
          }}</span>
          <img
            @click="handleDelete(act.id)"
            class="img-fluid btn p-0"
            src="../../../assets/icon-delete.svg"
            alt=""
          />
        </div>
      </div>
    </div>
</template>
<script>
/* eslint-disable */
import moment from "moment";
moment.locale("id");

export default {
  name: "ActivityItem",
  props: ["act", "handleDeleteLocale", "activityTitle", "activityDate"],
  data() {
    return {};
  },
  methods: {
    handleDate(value) {
      // value && return moment(value).format('LL');
      if (value) {
        return moment(value).format("LL");
      }
    },
    handleDelete(id) {
      // value && return moment(value).format('LL');
      if (id) {
        axios
          .delete(`/activity-groups`, {
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
};
</script>
<style scoped>
.activity-item-body {
  cursor: pointer;
  height: 158px;
}
.card {
  background-color: #fff;
  border-radius: 12px;
  padding: 22px 27px;
  margin-bottom: 26px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
span {
  color: #888;
  font-size: 14px;
  font-style: normal;
}
</style>
