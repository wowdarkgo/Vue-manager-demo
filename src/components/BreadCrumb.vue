 <template>
  <div class="example-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="(item, index) in breadList"
        :key="index"
        :to="{ path: item.path }"
        class="crumb_item"
        >{{ item.name }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      breadList: [], // 路由集合
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  methods: {
    // isHome() {
    //   // return (route.name = "");
    // },
    getBreadcrumb() {
      let matched = this.$route.matched;
      //如果不是首页
      // if (!this.isHome(matched[0])) {
      matched = [{ path: "/", meta: { title: "首页" } }].concat(matched);
      // }
      this.breadList = matched;
    },
  },
  created() {
    this.getBreadcrumb();
    // console.log(this.$route);
  },
};
</script>
<style scoped>
.crumb_item {
  font-size: 14px;
  line-height: 38px;
}
.el-breadcrumb /deep/.el-breadcrumb__inner {
  color: #fff !important;
}
</style>