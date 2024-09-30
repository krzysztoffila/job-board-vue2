import addJob from "@/components/addJob.vue";
import showJobs from "@/components/showJobs.vue";
import singleJob from "@/components/singleJob.vue";
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
  {
    path: "/jobs/:id",
    name: "singleJob",
    component: singleJob,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
