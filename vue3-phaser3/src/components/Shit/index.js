import Phaser from "phaser";
import BootScene from "./scenes/BootScene";
import PlayScene from "./scenes/PlayScene";
let game;
function launch(_w, _h) {
  game = new Phaser.Game({
    width: _w,
    height: _h,
    type: Phaser.AUTO,
    parent: "game-container",
    pixelArt: true,
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
