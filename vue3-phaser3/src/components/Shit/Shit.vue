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
      gameKey: "Shit"
    };
  }
};
</script>

<style lang="less" scoped></style>
