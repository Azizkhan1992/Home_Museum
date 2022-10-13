import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/components/layouts/MuseumMainLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "/contacts",
        component: () => import("@/views/contacts/index.vue"),
      },
      // About
      {
        path: "/about-museum",
        component: () => import("@/views/about-pages/AboutMuseum.vue"),
      },
      {
        path: "/about-person",
        component: () => import("@/views/about-pages/AboutPerson.vue"),
      },
      {
        path: "/about-title",
        component: () => import("@/views/about-pages/about-title-page"),
      },
      {
        path: "/about-title/:id",
        component: () => import("@/views/about-pages/about-title-page/_id.vue"),
      },
      {
        path: "/scheme-museum",
        component: () => import("@/views/about-pages/AboutSchemeMuseum.vue"),
      },
      {
        path: "/partners",
        component: () => import("@/views/about-pages/AboutPartners.vue"),
      },
      {
        path: "/group-museum",
        component: () => import("@/views/about-pages/AboutMuseumGroup.vue"),
      },
      {
        path: "/documentation",
        component: () => import("@/views/about-pages/AboutPersonDocuments.vue"),
      },
      {
        path: "/questions",
        component: () => import("@/views/about-pages/AboutQuestions.vue"),
      },

      // Events
      {
        path: '/events',
        component: ()=> import('@/views/events-pages/EventsHomePage.vue')
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
