import { Scene } from "phaser";

import sky from "@/assets/Demo/sky.png";
import bomb from "@/assets/Demo/bomb.png";
import thudMp3 from "@/assets/Demo/thud.mp3";
import thudOgg from "@/assets/Demo/thud.ogg";

export default class BootScene extends Scene {
  constructor() {
    super({
      key: "BootScene"
    });
  }

  preload() {
    // this.load.image("sky", sky);  // not supported
    // this.load.image("bomb", bomb); // not supported
    this.textures.addBase64("sky", sky);
    this.textures.addBase64("bomb", bomb);
    this.load.audio("thud", [thudMp3, thudOgg]);
  }

  create() {
    this.scene.start("PlayScene");
  }
}
