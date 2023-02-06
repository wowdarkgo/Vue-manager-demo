<template>
  <div id="app">
    <!-- <main-page></main-page> -->
    <router-view></router-view>
  </div>
</template>

<script>
import MainPage from "./views/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
};
//# sourceMappingURL=file.js.map
</script>

<style >
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
