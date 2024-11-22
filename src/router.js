import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/Home.vue";
import Package from "./components/Package.vue";
import Package1 from "./components/Package-1.vue";
import Package2 from "./components/Package-2.vue";
import Parcel from "./components/Parcel.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/send-package", component: Package },
  { path: "/send-package-1", component: Package1 },
  { path: "/send-package-2", component: Package2 },
  { path: "/view-parcel", component: Parcel },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
