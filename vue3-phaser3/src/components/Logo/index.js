import Phaser from "phaser";

import preload from "./scenes/preload";
import create from "./scenes/create";

function launch(_w, _h) {
  new Phaser.Game({
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
export default launch;
export { launch };
