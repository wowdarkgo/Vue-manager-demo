<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c65"
    text-color="#fff"
    active-text-color="#c9a072"
    router
  >
    <div class="title" @click="MenuCollapse">
      <el-button
        class="btn"
        type="primary"
        plain
        icon="el-icon-menu"
        size="small"
        @click="MenuCollapse"
      ></el-button>
    </div>
    <el-menu-item
      v-for="item in noChildren"
      :index="item.path"
      :key="item.path"
    >
      <!-- 这里是让导航一，遍历那些没有子导航的元素 -->
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      v-for="item in hasChildren"
      :index="toString(item.path)"
      :key="item.path"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          v-for="item in item.children"
          :index="item.path"
          :key="item.path"
          >{{ item.label }}
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "CommonAside",
  data() {
    return {
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    MenuCollapse(){
      this.$store.commit('MenuCollapse')
    }
  },
  computed: {
    noChildren() {
      return this.$store.state.menu
      .filter((item) => !item.children);
    }, //通过fliter，选出无子菜单的元素
    hasChildren() {
      return this.$store.state.menu.filter((item) => item.children);
    },
    isCollapse(){
      return this.$store.state.isCollapse
    }
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 1000px;
}
.title {
  color: #fff;
  text-align: center;
  font-size: 15px;
}
</style>