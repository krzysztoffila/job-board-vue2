<template>
  <add-job> </add-job>
</template>

<script>
import addJob from "./components/addJob.vue";
export default {
  components: { addJob },
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
</style>
