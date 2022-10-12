<template>
  <div class="home">
    <div class="d-flex">
      <h1 class="me-auto mb-0 align-self-center">Activity</h1>
      <span class="btn btn-primary rounded-pill d-flex px-4 h-auto">
        <img class="img-fluid " src="../assets/tabler_plus.svg" alt="">
        <h6 class="align-self-center m-0">Tambah</h6></span
      >
    </div>
    <!-- <span>{{this.dataActivity.data}}</span> -->

    <div class="row mt-5" v-if="this.dataActivity">
      <div
        class="col-3 my-3"
        v-for="act in this.dataActivity.data"
        :key="act.id"
      >
        <div class="activity-item" data-cy="activity-item">
          <div>
            <b>
              <h4 data-cy="activity-item-title">{{ act.title }}</h4>
            </b>
          </div>
          <!-- <p>{{act.id}}</p> -->
          <small>{{ act.created_at }}</small>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center mt-5" v-else>
      <img
        class="img-fluid w-75"
        src="../assets/activity-empty-state.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "ActivityView",
  components: {
    // HelloWorld
  },
  data() {
    return {
      dataActivity: null,
    };
  },
  created() {
    axios
      .get(`/activity-groups`, {
        params: { email: "yoga+1@skyshi.io" },
      })
      .then((response) => {
        this.dataActivity = response.data;
        // this.data = response.data.data;
        console.log("response", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
