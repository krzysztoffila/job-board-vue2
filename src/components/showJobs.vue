<template>
  <div id="show-jobs">
    <h1>All IT Jobs in one place!</h1>
    <div v-if="filteredJobs.length === 0">No jobs available.</div>
    <div v-else>
      <div v-for="(job, index) in paginatedJobs" :key="index" class="job-card">
        <router-link :to="{ name: 'singleJob', params: { id: job.id } }">
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
        </router-link>
        <div class="bookmark-icon" @click="toggleBookmark(job)">
          <img
            :src="
              job.bookmarked
                ? require('@/assets/icons/bookmark_heart.svg')
                : require('@/assets/icons/bookmark.svg')
            "
            alt="Bookmark"
          />
        </div>
      </div>
      <div class="pagination">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="pagination-button"
        >
          &lt;
        </button>
        <span class="pagination-info"
          >Page {{ currentPage }} of {{ totalPages }}</span
        >
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="pagination-button"
        >
          &gt;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// Importuj filtr i inne potrzebne zasoby
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
      currentPage: 1,
      pageSize: 5,
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
    totalPages() {
      return Math.ceil(this.filteredJobs.length / this.pageSize);
    },
    paginatedJobs() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.filteredJobs.slice(start, start + this.pageSize);
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
        // Tutaj jest fragment, który przypisuje dane z Firebase
        this.jobs = Object.keys(response.body).map((key) => ({
          id: key, // Dodaj ID jako klucz
          ...response.body[key], // Reszta danych z odpowiedzi
          bookmarked: false, // Dodaj pole do bookmarkowania
        }));
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    toggleBookmark(job) {
      job.bookmarked = !job.bookmarked;
    },
  },
};
</script>
<style src="../assets/styles/show-jobs.css"></style>
