import { createRouter, createWebHistory } from "vue-router"
import HomePage from "./components/Home.vue"
import Package from "./components/Package.vue"
import Shipment from "./components/Shipment.vue"
import Details from "./components/Details.vue"

const routes = [
  { path: "/", component: HomePage },
  { path: "/send-package", component: Package },
  { path: "/choose-shipment", component: Shipment },
  { path: "/shipment-details", component: Details }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
