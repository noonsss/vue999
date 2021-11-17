import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import About from "../views/About.vue";
import Reference from "../views/Reference.vue";
import Youtube from "../views/Youtube.vue";
import Script from "../views/Script.vue";
import Contact from "../views/Contact.vue";
import Portfolio from "../views/Portfolio.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/reference",
    name: "Reference",
    component: Reference,
  },
  {
    path: "/youtube",
    name: "Youtube",
    component: Youtube,
  },
  {
    path: "/script",
    name: "Script",
    component: Script,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
