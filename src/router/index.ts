import { createRouter, createWebHistory, createWebHashHistory} from "vue-router";
import Mercury from "../views/Mercury.vue";
import Venus from "../views/Venus.vue";
import Earth from "../views/Earth.vue";
import Mars from "../views/Mars.vue";
import Jupiter from "../views/Jupiter.vue";
import Saturn from "../views/Saturn.vue";
import Uranus from "../views/Uranus.vue";
import Neptune from "../views/Neptune.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/planets-proj/mercury",
      name: "mercury",
      component: Mercury,
      alias: "/planets-proj/",
    },
    {
      path: "/planets-proj/venus",
      name: "venus",
      component: Venus,
    },
    {
      path: "/planets-proj/earth",
      name: "earth",
      component: Earth,
    },
    {
      path: "/planets-proj/mars",
      name: "mars",
      component: Mars,
    },
    {
      path: "/planets-proj/jupiter",
      name: "jupiter",
      component: Jupiter,
    },
    {
      path: "/planets-proj/saturn",
      name: "saturn",
      component: Saturn,
    },
    {
      path: "/planets-proj/uranus",
      name: "uranus",
      component: Uranus,
    },
    {
      path: "/planets-proj/neptune",
      name: "neptune",
      component: Neptune,
    },
    {
      path: '/planets-proj/:pathMatch(.*)*',
      redirect:'/planets-proj/'
    },
    {
      path: '/:pathMatch(.*)*',
      redirect:'/planets-proj/'
    }
  ],
});

export default router;
