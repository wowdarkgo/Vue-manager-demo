<template>
  <div>
    <el-button
      class="btn"
      type="primary"
      plain
      icon="el-icon-house"
      size="small"
      @click="BackHome"
      :style="{ display: isNone }"
    ></el-button>
    <div class="home">
      <bread-crumb></bread-crumb>
    </div>
    <span class="year"> {{ getDateYear() }}</span>
    <span>
      <img class="user" src="../assets/head.jpg" alt="" width="2.5%" />
    </span>
    <span>
      <el-button
        class="quit"
        type="danger"
        size="mini"
        round
        icon="el-icon-switch-button"
        @click="quit"
      ></el-button>
    </span>
  </div>
</template>

<script>
import BreadCrumb from "./BreadCrumb";
export default {
  components: { BreadCrumb },
  name: "CommonHeader",
  data() {
    return {
      menu: [],
      isNone: "block",
    };
  },
  methods: {
    BackHome() {
      this.$router.push("/");
    },
    getDateYear() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let dates = date.getDate();
      let dayArr = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let day = date.getDay();
      return "丨  " + year + "年" + month + "月" + dates + "日 " + dayArr[day];
    },
    quit() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.btn {
  float: left;
}
.home {
  float: left;
  margin-left: 1em;
}
.drop {
  float: right;
}
.el-dropdown-link {
  cursor: pointer;
  color: black;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.user {
  float: right;
  border-radius: 50%;
}
.quit {
  float: right;
  margin-right: 1em;
  margin-top: 0.5em;
  background-color: #fff;
  color: red;
}
.year {
  line-height: 38px;
  font-size: 14px;
  margin-left: 20px;
  color: #fff;
}
</style>