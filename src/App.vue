<template>
  <div class="app">
    <the-navbar @search="updateSearch"></the-navbar>
    <div class="container">
      <router-view :search-query="searchQuery"> </router-view>
    </div>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";

export default {
  components: { TheNavbar },
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    updateSearch(query) {
      this.searchQuery = query;
    },
  },
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
