import PlanetVue from "@/components/Planet.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/mercury"
    },
    {
      path: "/mercury",
      name: "mercury",
      component: PlanetVue,
      props: {
        wikiId: "Mercury_(planet)",
      }
    },
    {
      path: "/venus",
      name: "venus",
      component: PlanetVue,
      props: {
        wikiId: "Venus",
      }
    },
    {
      path: "/earth",
      name: "earth",
      component: PlanetVue,
      props: {
        wikiId: "Earth",
      }
    },
    {
      path: "/mars",
      name: "mars",
      component: PlanetVue,
      props: {
        wikiId: "Mars",
      }
    },
    {
      path: "/jupiter",
      name: "jupiter",
      component: PlanetVue,
      props: {
        wikiId: "Jupiter",
      }
    },
    {
      path: "/saturn",
      name: "saturn",
      component: PlanetVue,
      props: {
        wikiId: "Saturn",
      }
    },
    {
      path: "/uranus",
      name: "uranus",
      component: PlanetVue,
      props: {
        wikiId: "Uranus",
      }
    },
    {
      path: "/neptune",
      name: "neptune",
      component: PlanetVue,
      props: {
        wikiId: "Neptune",
      }
    }
  ],
});

export default router;
