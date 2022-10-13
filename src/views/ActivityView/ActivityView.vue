<template>
  <div class="home">
    <!-- <div class="d-flex">
      <h1 class="me-auto mb-0 align-self-center">Activity</h1>
      <span class="btn btn-primary color-theme rounded-pill d-flex px-4 h-auto">
        <img class="img-fluid" src="../../assets/tabler_plus.svg" alt="" />
        <span class="align-self-center mb-0 ms-2">Tambah</span></span
      >
    </div> -->

    <activity-header
    :handleCreateActivity="handleCreateActivity"
    />

    <div class="row mt-5" v-if="this.dataActivity?.length > 0">
      <div
        class="col-xs-6 col-sm-6 col-md-4 col-lg-3 my-3"
        v-for="act in this.dataActivity"
        :key="act.id"
      >
        <activity-item
          :act="act"
          :handleDeleteLocale="handleDeleteLocale"
        />
      </div>
    </div>

    <div class="d-flex justify-content-center mt-5" v-else>
      <img
        @click="handleCreateActivity"
        class="img-fluid w-75"
        src="../../assets/activity-empty-state.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import ActivityItem from "./components/ActivityItem.vue";
import ActivityHeader from "./components/ActivityHeader.vue";
import moment from "moment";
moment.locale("id");

export default {
  name: "ActivityView",
  components: {
    ActivityItem,
    ActivityHeader,
  },
  data() {
    return {
      dataActivity: null,
    };
  },
  methods: {
    handleDeleteLocale(id) {
      let newData = this.dataActivity.filter((el) => {
        return el.id != id;
      });
      this.dataActivity = newData;
      
      console.log(
        "newData",
        this.dataActivity
      );

    },
    handleCreateActivity() {
      axios
      .post(`/activity-groups`, {
        title: "New Activity",
        email: "yoga+1@skyshi.io",
      })
      .then((response) => {
        console.log("responseCreate", response);
        this.dataActivity.unshift(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  },
  created() {
    axios
      .get(`/activity-groups`, {
        params: { email: "yoga+1@skyshi.io" },
      })
      .then((response) => {
        this.dataActivity = response.data.data;
        // this.data = response.data.data;
        console.log("response", this.dataActivity);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
