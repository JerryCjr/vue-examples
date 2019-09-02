import { Scene } from "phaser";

export default class PlayScene extends Scene {
  constructor() {
    super({ key: "PlayScene" });
  }

  create() {
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("mummy"),
      frameRate: 16,
      repeat: 0
    });
    var sprite = this.add.sprite(50, 300, "mummy").setScale(4);
    sprite.play("walk");
    sprite.anims.setRepeat(7);
    this.tweens.add({
      targets: sprite,
      x: 750,
      duration: 8800,
      ease: "Linear"
    });
    sprite.on(
      "animationrepeat-walk",
      function() {
        var poop = this.add.image(sprite.x - 32, 300, "poo").setScale(0.5);
        this.tweens.add({
          targets: poop,
          props: {
            x: {
              value: "-=64",
              ease: "Power1"
            },
            y: {
              value: "+=50",
              ease: "Bounce.easeOut"
            }
          },
          duration: 750
        });
      },
      this
    );
  }
}
