<template>
  <nav class="navbar">
    <div class="nav-left">
      <div class="logo">Jobtopia</div>
      <div class="nav-links">
        <router-link to="/jobs">Job Offers</router-link>
        <router-link to="/add-job">Add Job</router-link>
      </div>
    </div>
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        @input="updateSearch"
        placeholder="Search jobs..."
      />
      <i class="fa fa-search search-icon"></i>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    updateSearch() {
      this.$emit("search", this.searchQuery);
    },
  },
};
</script>
<style src="../assets/styles/the-navbar.css"></style>
