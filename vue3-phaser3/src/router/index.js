import Vue from "vue";
import Router from "vue-router";
import GameCenter from "@/components/GameCenter";
import Demo from "@/components/Demo/Demo";
import Logo from "@/components/Logo/Logo";
import Shit from "@/components/Shit/Shit";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "GameCenter",
      component: GameCenter
    },
    {
      path: "/Demo",
      name: "Demo",
      component: Demo
    },
    {
      path: "/Logo",
      name: "Logo",
      component: Logo
    },
    {
      path: "/Shit",
      name: "Shit",
      component: Shit
    }
  ]
});
