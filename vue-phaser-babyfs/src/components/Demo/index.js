import Phaser from "phaser";
import BootScene from "./scenes/BootScene";
import PlayScene from "./scenes/PlayScene";

function launch(_w, _h) {
  new Phaser.Game({
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
export default launch;
export { launch };
