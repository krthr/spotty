import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "app-layout" */ "../layouts/AppLayout.vue"),
    children: [
      {
        path: "browse",
        component: () => import("../views/Home.vue"),
        children: [
          {
            path: "featured",
            name: "featured",
            component: () => import("../views/Featured.vue")
          },
          {
            path: "genres",
            name: "genres",
            component: () => import("../views/Genres.vue")
          },
          {
            path: "discover",
            name: "discover",
            component: () => import("../views/Discover.vue")
          },
          {
            path: "",
            redirect: "/browse/featured"
          }
        ]
      },
      {
        path: "album/:id",
        name: "album",
        component: () => import("../views/Album.vue")
      },
      {
        path: "artist/:id",
        component: () => import("../views/Artist.vue"),
        children: [
          {
            path: "",
            name: "artist",
            component: () => import("../views/ArtistOverview.vue")
          },
          {
            path: "about",
            name: "artist-about",
            component: () => import("../views/ArtistAbout.vue")
          }
        ]
      },
      {
        path: "search",
        name: "search",
        component: () => import("../views/Search.vue")
      },
      {
        path: "queue",
        name: "queue",
        component: () => import("../views/Queue.vue")
      },
      {
        path: "*",
        redirect: {
          name: "featured"
        }
      }
    ],
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: "/auth",
    component: () =>
      import(/* webpackChunkName: "auth-layout" */ "../layouts/AuthLayout.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/Login.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // TODO Implemnt auth logic here

  if (to.matched.some(r => r.meta.isAuthRequired)) {
    // verify if the user is authenticated
  }

  next();
});

export default router;
