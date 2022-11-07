import { createWebHistory, createRouter } from "vue-router";
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;