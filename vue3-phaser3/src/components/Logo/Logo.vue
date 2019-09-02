<template>
  <div class="root">
    <div id="game-container" v-if="downloaded" />
    <div class="placeholder" v-else>Downloading ...</div>
  </div>
</template>


<script>
export default {
  name: "Game",
  data() {
    return {
      downloaded: false
    };
  },
  async mounted() {
    const logo = await import(
      /* webpackChunkName: "logo" */ "@/components/Logo/index"
    );
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    this.downloaded = true;
    this.$nextTick(() => logo.launch(width, height));
  },
  destroyed () {
      
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
