<template>
  <div class="root">
    <div id="game-container" v-if="downloaded" />
    <div class="placeholder" v-else>Downloading ...</div>
  </div>
</template>


<script>
export default {
  name: "GameContainer",
  props: {
    gameKey: {
      type: String
    }
  },
  data() {
    return {
      downloaded: false,
      game: null
    };
  },
  async mounted() {
    this.game = await import(
      /* webpackChunkName: "chunk-[request][index]" */ `@/components/${this.gameKey}/index`
    );
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    this.downloaded = true;
    this.$nextTick(() => this.game.launch(width, height));
  },
  destroyed() {
    // 销毁game
    this.game.over();
  }
};
</script>

<style lang="less" scoped>
.root {
  width: 100vw;
  height: 100vh;
}
#game-container {
  width: 100vw;
  height: 100vh;
  border: 1px dashed purple;
}
.placeholder {
  font-size: 2rem;
  font-family: "Courier New", Courier, monospace;
}
</style>
