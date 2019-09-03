import Phaser from "phaser";
import BootScene from "./scenes/BootScene";
import PlayScene from "./scenes/PlayScene";

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
        gravity: {
          y: 300
        },
        debug: false
      }
    },
    scene: [BootScene, PlayScene]
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
