<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
}
</style>
