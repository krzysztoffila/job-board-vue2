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
          <img src="@/assets/icons/bookmark.svg" alt="Bookmark Icon" />
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

<style scoped>
.job-card {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  padding: 20px;
  margin: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.job-card:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.job-card .company-logo {
  width: 60px;
  height: 60px;
  background: #6a5af9;
  border-radius: 10px;
  margin-right: 15px;
}

.job-card h2 {
  font-size: 20px;
  color: #00ccff;
  margin: 0 0 10px 0;
  text-align: left;
}

.job-card p {
  color: #fff;
  font-size: 16px;
  margin: 5px 0;
}

.bookmark-icon {
  margin-left: auto;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.bookmark-icon img {
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .job-card {
    width: 80%;
  }
}

@media (max-width: 480px) {
  .job-card {
    width: 100%;
  }
}
</style>
