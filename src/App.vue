<template>
  <div class="app">
    <the-navbar></the-navbar>
    <div class="container">
      <!-- <add-job></add-job> -->
      <show-jobs></show-jobs>
    </div>
  </div>
</template>

<script>
import showJobs from "@/components/showJobs.vue";
import TheNavbar from "./components/TheNavbar.vue";
// import addJob from "./components/addJob.vue";
export default {
  components: { showJobs, TheNavbar },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
body {
  font-family: "Nunito";
  background: linear-gradient(135deg, #007bff, #ff00ff);
  margin: 0;
  color: #fff;
  min-height: 100vh;
}
.container {
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
