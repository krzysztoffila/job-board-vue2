<template>
  <div id="show-jobs">
    <h1>All IT Jobs in one place!</h1>
    <div v-if="filteredJobs.length === 0">No jobs available.</div>
    <div v-else>
      <div v-for="(job, index) in filteredJobs" :key="index" class="job-card">
        <div class="company-logo"></div>
        <div class="job-info">
          <h2>{{ job.title }}</h2>
          <p><strong>Category:</strong> {{ job.category }}</p>
          <p>
            <strong>Level:</strong>
            {{ job.levels.join(", ") | toUppercase }}
          </p>
          <p><strong>Tags:</strong> {{ job.tags.join(", ") }}</p>
          <p>{{ job.content }}</p>
        </div>
        <div class="bookmark-icon">
          <img src="@/assets/icons/bookmark.svg" alt="Bookmark" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toUppercase } from "../helpers/filters.js";

export default {
  props: {
    searchQuery: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      jobs: [],
    };
  },
  computed: {
    filteredJobs() {
      return this.jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          job.category.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          job.tags.some((tag) =>
            tag.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
      );
    },
  },
  filters: {
    toUppercase,
  },
  created() {
    const dbUrl =
      "https://job-dashboard-vue2-default-rtdb.firebaseio.com/jobs.json";
    this.$http
      .get(dbUrl)
      .then((response) => {
        this.jobs = Object.values(response.body);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  },
};
</script>

<style src="../assets/styles/show-jobs.css"></style>
