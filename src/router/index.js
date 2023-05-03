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
import HomePage from "../views/Home-page.vue";
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
      isPrivate: true
    },
  },
  {
    path: "/tour",
    name: "Tour",
    component: Tour,
    meta: {
      isPrivate: true
    },
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
    meta: {
      isPrivate: true
    },
  },
  {
    path: "/interest",
    name: "Interest",
    component: Interest,
    meta: {
      isPrivate: true
    },
  },
  {
    path: "/place",
    name: "Place",
    component: Place,
    meta: {
      isPrivate: true
    },
  },
  {
    path: "/user",
    name: "User",
    component: User,
    meta: {
      isPrivate: true
    },
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
    meta: {
      isPrivate: true
    },
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
      isPrivate: true
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      isPrivate: true
    },
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/home-page",
    name: "Home Page",
    component: HomePage,
  },
  {
    path: "/intro-tour",
    name: "search-intro",
    component: IntroTour,
    meta: {
      isPrivate: true
    },
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

// const validateRoute = (to, from , next) => {
//   const isAuthorize =  localStorage.getItem('users')
//   const isAdmin = isAuthorize && JSON.parse(isAuthorize).roles[0] === 'ROLE_ADMIN';
//   console.log(isAdmin, 'isAdmin');
//   const isUser = isAuthorize && JSON.parse(isAuthorize).roles[0] === 'ROLE_USER';
//   const isPrivate = to.matched.some(record => record.meta.isPrivate);
//   if(isPrivate) {
//     if (isAdmin) { 
//       console.log('v1');
//       next ()
//     }
//     else if (isUser) {
//       console.log('v2');
//       next({name: 'Signin'})
//     }
//     else { 
//       console.log('v3');
//       next({name: 'Signin'})
//     }
//   } else {
//     next();
//   }
// };

// router.beforeEach((to, from, next) => {
//   console.log('v555');
//   validateRoute(to, from, next);
// });

export default router;
