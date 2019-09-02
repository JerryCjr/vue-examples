<template>
  <div class="root">
    <h1>gameCenter</h1>
    <p v-for="(item, index) in examList" :key="index" @click="go(item)">{{item.name}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      examList: [
        {
          name: "关卡1",
          key: "Demo"
        },
        {
          name: "关卡2",
          key: "Logo"
        },
        {
          name: "关卡3",
          key: "Shit"
        }
      ]
    };
  },
  methods: {
    go(_item) {
      this.$router.push({ name: _item.key });
    }
  }
};
</script>

<style lang="less" scoped>
.root {
  width: 100vw;
  height: 100vh;
}
</style>
