import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";
import store from "../store/store.js";
import { IS_USER_AUTHENTICATED_GETTER } from "@/store/storeConstants";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    meta: { auth: false },
  },
  {
    path: "/",
    name: "Homepage",
    component: HomeView,
    meta: { auth: true },
  },
  //   Handling unknown routes
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    "auth" in to.meta &&
    to.meta.auth &&
    !store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`]
  ) {
    next("/login");
  } else if (
    "auth" in to.meta &&
    !to.meta.auth &&
    store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`]
  ) {
    next("/");
  } else {
    next();
  }
});

export default router;
