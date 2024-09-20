<template>
  <div id="add-job">
    <h2>Add a New Job Post</h2>
    <form>
      <label for="job-title">Job title:</label>
      <input v-model.lazy="job.title" type="text" id="job-title" required />
      <label for="job-content">Job Description:</label>
      <textarea
        v-model.lazy="job.content"
        name="job-content"
        id="job-content"
      ></textarea>
      <div id="checkboxes">
        <input
          v-model="job.levels"
          type="checkbox"
          name="junior"
          id="level-junior"
          value="junior"
        />
        <label for="level-junior">Junior</label>

        <input
          v-model="job.levels"
          type="checkbox"
          name="middle"
          id="level-middle"
          value="middle"
        />
        <label for="level-middle">Middle</label>

        <input
          v-model="job.levels"
          type="checkbox"
          name="senior"
          id="level-senior"
          value="senior"
        />
        <label for="level-senior">Senior</label>
      </div>
      <label for="category">Category:</label>
      <select v-model="job.category" id="category">
        <option
          v-for="category in job.categories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
      <label for="job-tags">Tags:</label>
      <input
        v-model="job.tagInput"
        @input="updateTags"
        type="text"
        id="job-tags"
        placeholder="Enter comma-separated tags"
      />
    </form>
    <button
      @click.prevent="addJob"
      class="gradient-button"
      :disabled="isSubmitDisabled"
    >
      Add Job!
    </button>
    <!-- Popup  -->
    <div v-if="isSubmitted" class="popup">
      <div class="popup-content">
        <h3>Job offer added!</h3>
        <p>Thank you for adding your new job offer.</p>
        <button @click="closePopup">Close</button>
      </div>
    </div>
    <div id="preview">
      <h3>Job Preview</h3>
      <p>Job title:{{ job.title }}</p>
      <p>Job Description:</p>
      <p>{{ job.content }}</p>
      <p>
        Tags:
        <span v-for="(tag, index) in job.tags" :key="index">{{ tag }}</span>
      </p>
      <p>
        Category: <span>{{ job.category }}</span>
      </p>
      <p>Job Level:</p>
      <ul class="job-levels">
        <li v-for="level in job.levels" :key="level">
          {{ levelToUpper(level) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      job: {
        title: "",
        content: "",
        tagInput: "",
        tags: [],
        levels: [],
        categories: [
          "Frontend",
          "Backend",
          "Fullstack",
          "AI/ML",
          "Data Science",
        ],
        category: "",
      },
      isSubmitted: false,
      isSubmitDisabled: true,
    };
  },
  watch: {
    job: {
      deep: true,
      handler() {
        this.checkFormValidity();
      },
    },
  },
  methods: {
    checkFormValidity() {
      this.isSubmitDisabled = !(
        this.job.title &&
        this.job.content &&
        this.job.tagInput &&
        this.job.levels.length > 0 &&
        this.job.category
      );
    },
    updateTags() {
      this.job.tags = this.job.tagInput
        .split(",")
        .filter((tag) => tag.length > 0);
    },
    levelToUpper(level) {
      return level[0].toUpperCase() + level.slice(1).toLowerCase();
    },
    addJob() {
      const dbUrl =
        "https://job-dashboard-vue2-default-rtdb.firebaseio.com/jobs.json";
      const jobData = {
        title: this.job.title,
        content: this.job.content,
        tags: this.job.tags,
        levels: this.job.levels,
        category: this.job.category,
      };
      this.$http
        .post(dbUrl, jobData)
        .then((response) => {
          console.log("Job added successfully:", response.body);
          this.isSubmitted = true;
          this.resetForm();
        })
        .catch((error) => {
          console.error("Error adding job:", error);
        });
    },
    resetForm() {
      this.job.title = "";
      this.job.content = "";
      this.job.tagInput = "";
      this.job.tags = [];
      this.job.levels = [];
      this.job.category = "";
      this.isSubmitDisabled = true;
    },
    closePopup() {
      this.isSubmitted = false;
    },
  },
};
</script>
<style src="../assets/styles/add-job.css"></style>
