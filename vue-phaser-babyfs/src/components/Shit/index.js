import Phaser from "phaser";
import BootScene from "./scenes/BootScene";
import PlayScene from "./scenes/PlayScene";

function launch(_w, _h) {
  new Phaser.Game({
    type: Phaser.AUTO,
    parent: "game-container",
    pixelArt: true,
    scene: [BootScene, PlayScene]
  });
}

export default launch;
export { launch };
