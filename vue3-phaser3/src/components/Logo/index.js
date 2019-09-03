import Phaser from "phaser";

import preload from "./scenes/preload";
import create from "./scenes/create";
let game;

function launch(_w, _h) {
  game = new Phaser.Game({
    type: Phaser.AUTO,
    width: _w,
    height: _h,
    parent: "game-container",
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 200 }
      }
    },
    scene: {
      preload,
      create
    }
  });
}

function over() {
  game && game.destroy();
}

export default {
  launch,
  over
};
export { launch, over };
