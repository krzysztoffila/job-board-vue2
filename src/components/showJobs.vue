<template>
  <div id="show-jobs">
    <h1>All IT Jobs in one place!</h1>
    <div v-if="jobs.length === 0">No jobs available.</div>
    <div v-else>
      <div v-for="(job, index) in jobs" :key="index" class="job-card">
        <div class="company-logo"></div>
        <div class="job-info">
          <h2>{{ job.title }}</h2>
          <p><strong>Category:</strong> {{ job.category }}</p>
          <p><strong>Level:</strong> {{ job.levels.join(", ") }}</p>
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
export default {
  data() {
    return {
      jobs: [],
    };
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
