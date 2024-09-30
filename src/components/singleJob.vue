<template>
  <div class="single-job-container">
    <div class="single-job">
      <h1>Job Details</h1>
      <div v-if="job">
        <h2>{{ job.title }}</h2>
        <div class="company-info">
          <div class="company-logo">
            <div class="logo-gradient"></div>
          </div>
          <div class="company-name">
            <h3>{{ job.company }}</h3>
            <p>{{ job.location }}</p>
          </div>
        </div>
        <p class="job-description">
          <strong>Description:</strong> {{ job.content }}
        </p>
        <p class="job-details"><strong>Category:</strong> {{ job.category }}</p>
        <p class="job-details">
          <strong>Tags:</strong> {{ job.tags.join(", ") }}
        </p>
        <p class="job-details">
          <strong>Levels:</strong> {{ job.levels.join(", ") }}
        </p>
        <div class="job-buttons">
          <router-link to="/jobs" class="btn back-btn">Back</router-link>
          <button @click="applyForJob" class="btn apply-btn">Apply</button>
        </div>
      </div>
      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  created() {
    this.fetchJobDetails();
  },
  methods: {
    fetchJobDetails() {
      const dbUrl = `https://job-dashboard-vue2-default-rtdb.firebaseio.com/jobs/${this.id}.json`;
      this.$http
        .get(dbUrl)
        .then((response) => {
          this.job = response.body;
        })
        .catch((error) => {
          console.error("Error fetching job details:", error);
        });
    },
    applyForJob() {
      alert("Applied for the job!");
    },
  },
};
</script>
<style src="../assets/styles/single-job.css"></style>
