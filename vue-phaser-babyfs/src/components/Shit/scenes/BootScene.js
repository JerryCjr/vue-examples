import { Scene } from "phaser";
import poo from "@/assets/Shit/poo.png";
import mummySrc from "@/assets/Shit/mummy37x45.png";

function promiseLoad(_src) {
  const _this = this;
  return new Promise((_resovle, _reject) => {
    let mummy = new Image();
    mummy.onload = _res => {
      _this.textures.addSpriteSheet("mummy", mummy, {
        frameWidth: 37,
        frameHeight: 45
      });
      _resovle();
    };
    mummy.src = _src;
  });
}

export default class BootScene extends Scene {
  constructor() {
    super({
      key: "BootScene"
    });
  }

  async preload() {
    this.textures.addBase64("poo", poo);
    await promiseLoad.call(this, mummySrc);
    this.scene.start("PlayScene");
  }
}
