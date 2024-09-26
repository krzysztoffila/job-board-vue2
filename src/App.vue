<template>
  <div class="app">
    <the-navbar @search="updateSearch"></the-navbar>
    <div class="container">
      <show-jobs :search-query="searchQuery"></show-jobs>
    </div>
  </div>
</template>

<script>
import showJobs from "@/components/showJobs.vue";
import TheNavbar from "./components/TheNavbar.vue";

export default {
  components: { showJobs, TheNavbar },
  data() {
    return {
      searchQuery: "", // Nowa właściwość do przechowywania wartości wyszukiwania
    };
  },
  methods: {
    updateSearch(query) {
      this.searchQuery = query; // Aktualizacja wartości wyszukiwania
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
