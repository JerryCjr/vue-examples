import Vue from "vue";
import Router from "vue-router";
import GameCenter from "@/components/GameCenter";
import GameContainer from '@/components/GameContainer';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      name: "GameCenter",
      component: GameCenter
    },
    {
      path: "/game/:gameKey",
      name: "game",
      component: GameContainer,
      props: true
    }
  ]
});
