import { Scene } from "phaser";
import poo from "@/assets/Shit/poo.png";
import mummySrc from "@/assets/Shit/mummy37x45.png";

export default class BootScene extends Scene {
  constructor() {
    super({
      key: "BootScene"
    });
  }

  preload() {
    this.load.image("poo", poo);
    this.load.spritesheet("mummy", mummySrc, {
      frameWidth: 37,
      frameHeight: 45
    });
  }

  create() {
    this.scene.start("PlayScene");
  }
}
