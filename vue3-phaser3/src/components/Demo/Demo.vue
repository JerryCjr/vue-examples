<template>
  <GameContainer :gameKey="gameKey"></GameContainer>
</template>


<script>
import GameContainer from "../GameContainer";
export default {
  components: {
    GameContainer
  },
  name: "Game",
  data() {
    return {
      gameKey: "Demo"
    };
  }
};
</script>

<style lang="less" scoped></style>
