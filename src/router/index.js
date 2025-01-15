import { createRouter, createWebHistory } from "vue-router";

import Company from "@/views/Company.vue";
import Employee from "@/views/Employee.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Company",
      component: Company,
    },
    { path: "/:empleado", name: "Employee", component: Employee, props: true },
  ],
});

export default router;
