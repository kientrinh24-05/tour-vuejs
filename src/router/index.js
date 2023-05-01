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
import User from "../views/User.vue";


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
    meta: {
      requiresAuth: true,
      isAdmin: true,
      authorizedRoles: ['admin']
    }
  },
  {
    path: "/tour",
    name: "Tour",
    component: Tour,
    meta: {
      requiresAuth: true,
      isAdmin: true,
      authorizedRoles: ['admin']
    }
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
    meta: {
      requiresAuth: true,
      isAdmin: true,
      authorizedRoles: ['admin']
    }
  },
  {
    path: "/interest",
    name: "Interest",
    component: Interest,
    meta: {
      requiresAuth: true,
      isAdmin: true,
      authorizedRoles: ['admin']
    }
  },
  {
    path: "/place",
    name: "Place",
    component: Place,
    meta: {
      requiresAuth: true,
      isAdmin: true,
      authorizedRoles: ['admin']
    }
  },
  {
    path: "/user",
    name: "User",
    component: User,
    meta: {
      requiresAuth: true,
      isAdmin: true,
      authorizedRoles: ['admin']
    }
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
    meta: {
      requiresAuth: true,
      isAdmin: true,
      authorizedRoles: ['admin']
    }
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
    meta: {
      requiresAuth: true,
      isAdmin: true,
      authorizedRoles: ['admin']
    }
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
    meta: {
      requiresAuth: true,
      isAdmin: true,
      authorizedRoles: ['admin']
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true,
      isAdmin: true,
      authorizedRoles: ['admin']
    }
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
    meta: {
      requiresAuth: true,
      isAdmin: true,
      authorizedRoles: ['admin']
    }
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

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     next('/')
//   } else {
//     if (to.meta.isAdmin) {
//       next('/user')
//     } else {
//       next()
//     }
//   }
// })

export default router;
