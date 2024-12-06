import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/components/HomePage.vue";
import ResumePage from "@/components/ResumePage.vue";


const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/resume", name: "ResumePage", component: ResumePage },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
