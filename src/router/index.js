import addJob from "@/components/addJob.vue";
import showJobs from "@/components/showJobs.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: showJobs,
  },
  {
    path: "/jobs",
    component: showJobs,
  },
  {
    path: "/add-job",
    component: addJob,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
