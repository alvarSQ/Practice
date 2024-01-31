import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from "vue-router";

const routerHistory = createWebHashHistory();

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import NotFoundPage from "./pages/notFound";
import Item from './pages/_itemAlias.vue'
import Employee from "./pages/Employee";
import CheckList from "./pages/CheckList";
import Carousel from "./pages/Carousel";

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/:itemAlias",
      name: "itemAlias",
      component: Item,
    },
    {
      path: "/Users",
      name: "Employee",
      component: Employee,
    },
    {
      path: "/CheckList",
      name: "CheckList",
      component: CheckList,
    },
    {
      path: "/Carousel",
      name: "Carousel",
      component: Carousel,
    },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: NotFoundPage,
    },
  ],
});

export default routers;
