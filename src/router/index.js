import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tour from "../views/Tour.vue";
import Interest from "../views/Interest.vue";
import Category from "../views/Category.vue";
import Place from "../views/Place.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import IntroTour from "../views/IntroTour.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/signin",
  },
  {
    path: "/dashboard-default",
    name: "Tổng quan",
    component: Dashboard,
  },
  {
    path: "/tour",
    name: "Tour",
    component: Tour,
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
  },
  {
    path: "/interest",
    name: "Interest",
    component: Interest,
  },
  {
    path: "/place",
    name: "Place",
    component: Place,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/intro-tour",
    name: "search-intro",
    component: IntroTour,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
