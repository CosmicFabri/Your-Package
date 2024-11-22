import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/Home.vue";
import Package from "./components/Package.vue";
import Parcel from "./components/Parcel.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/send-package", component: Package },
  { path: "/view-parcel", component: Parcel },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
