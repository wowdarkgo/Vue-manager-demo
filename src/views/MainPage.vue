<template>
  <el-container class="container">
    <el-aside width="auto"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header height="40px">
        <common-header></common-header>
      </el-header>
      <el-main>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>

  </el-container>

</template>

<script>
import CommonAside from "../components/CommonAside";
import CommonHeader from "../components/CommonHeader";
export default {
  name: "MainPage",
  data() {
    return {};
  },
  methods: {
    tan() {
      alert("诶嘿");
    },
  },
  components: {
    CommonAside,
    CommonHeader,
  },
};
</script>

<style lang='less' scoped>
.container{
  height: 100%;
}
.el-header {
  background-color: #949ca6;
}

.el-aside {
  background-color: #545c65;
  // height: 100%;
}

//过渡动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>