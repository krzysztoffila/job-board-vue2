<template>
  <div class="app">
    <the-navbar @search="updateSearch"></the-navbar>
    <div class="container">
      <router-view :search-query="searchQuery"></router-view>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: { TheNavbar, TheFooter },
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
  height: 100%;
  margin: 0;
  font-family: "Nunito";
  background: linear-gradient(135deg, #007bff, #ff00ff);
  color: #fff;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  flex: 1;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

footer {
  width: 100%;
  background-color: #2f3640;
  color: #fff;
  text-align: center;
  font-size: 14px;
  border-top: 2px solid #40e0d0;
}
</style>
