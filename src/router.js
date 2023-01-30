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
        path: "/events",
        component: () => import("@/views/events-pages/EventsHomePage.vue"),
      },
      {
        path: "/events/:id",
        component: () =>
          import(
            "@/components/pages/event/home-page-items/event-inner-page/_id.vue"
          ),
      },
      // News
      {
        path: "/news",
        component: () => import("@/views/events-pages/NewsHomePage.vue"),
      },
      {
        path: "/news/:id",
        component: () => import("@/views/events-pages/news-inner-page/_id.vue"),
      },

      // Media Materials
      {
        path: "/materials",
        component: () => import("@/views/events-pages/MediaMaterials.vue"),
      },

      // Exhibits
      {
        path: "/exhibits",
        component: () => import("@/views/collection-pages/ExhibitsPage.vue"),
      },
      {
        path: "/exhibits/:id",
        component: () =>
          import(
            "@/views/collection-pages/exhibits-inner-page/ExhibitsInnerPage.vue"
          ),
      },
      // Books
      {
        path: "/books",
        component: () => import("@/views/collection-pages/BooksPage.vue"),
      },
      {
        path: "/books/:id",
        component: () =>
          import("@/views/collection-pages/books-inner-page/_id.vue"),
      },

      // Collection Tools
      {
        path: "/tools",
        component: () => import("@/views/collection-pages/ToolsPage.vue"),
      },
      {
        path: "/tools/:id",
        component: () =>
          import("@/views/collection-pages/tools-inner-page/_id.vue"),
      },

      // Gallery Photos
      {
        path: "/photos",
        component: () => import("@/views/gallery-pages/PhotosPage.vue"),
      },

      // Gallery 3D
      {
        path: "/files",
        component: () => import("@/views/gallery-pages/FilesPage.vue"),
      },
      {
        path: "/files/:id",
        component: () =>
          import("@/views/gallery-pages/file-inner-pages/_id.vue"),
      },

      // Gallery Videos
      {
        path: "/videos",
        component: () => import("@/views/gallery-pages/VideosPage.vue"),
      },

      // Service Magazine
      {
        path: "/magazine",
        component: () => import("@/views/service-pages/MagazinePage.vue"),
      },
      {
        path: '/magazine/:id',
        component: () => import('@/views/service-pages/magazine-inner-page/_id.vue')
      },

      // Service Visit Museum
      {
        path: '/visit-museum',
        component: ()=>import('@/views/service-pages/VisitMuseumPage.vue')
      },

      // Service Volunteers Museum
      {
        path: '/volunteers',
        component: () => import('@/views/service-pages/MuseumVolunteers.vue')
      },

      // Service Bank Cards
      {
        path: '/bank-cards',
        component: () => import ('@/views/service-pages/MuseumBankCards.vue')
      },
      // Service Bank Cards Inner Page
      {
        path: '/bank-cards/:id',
        component: () => import('@/views/service-pages/bank-card-inner-page/_id.vue')
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
