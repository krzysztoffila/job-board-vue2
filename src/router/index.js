import App from "@/App.vue";
import AddJob from "@/components/addJob.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: App,
  },
  {
    path: "/",
    name: "home",
    component: AddJob,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
