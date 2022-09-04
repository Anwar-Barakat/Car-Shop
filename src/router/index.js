import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CategoriesView from "../views/CategoryView.vue";
import ContactView from "../views/ContactView.vue";
import ErrorPageView from "../views/ErrorPageView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/categories",
    name: "categories",
    component: CategoriesView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/:catchAll(.*)",
    name: "errorPage",
    component: ErrorPageView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let documentTitle = `${process.env.VUE_APP_TITLE}`;
  if (to.params.pageTitle) {
    documentTitle += ` | ${to.params.pageTitle}`;
  }
  document.title = documentTitle;
  next();
});

export default router;
