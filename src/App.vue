<template>
  <div class="container">
    <add-job></add-job>
    <show-jobs></show-jobs>
  </div>
</template>

<script>
import showJobs from "@/components/showJobs.vue";
import addJob from "./components/addJob.vue";
export default {
  components: { addJob, showJobs },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
body {
  margin: 0;
  font-family: "Nunito";
  background: linear-gradient(135deg, #007bff, #ff00ff);
  color: #fff;
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
