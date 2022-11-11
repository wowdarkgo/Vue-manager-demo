<template>
  <div class="backGround">
  <div></div>
    <div>
    <el-form
      :model="form"
      :rules="rules"
      :inline="true"
      label-position="right"
      ref="form"
      label-width="100px"
      class="login"
    >
      <h3 style="color: white; font-size: 18px; margin-left: 125px">
        用户登录
      </h3>
      <el-form-item label="用户名称" prop="username" class="username">
        <el-input
          v-model="form.username"
          aria-autocomplete="off"
          placeholder="输入您的用户名"
          class="username"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-form-item label="用户密码" prop="password" class="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="form.password"
          ></el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item class="login_submit">
        <el-button type="primary" @click="login" class="login_btn"
          >登录</el-button
        >
        <el-button @click="loginOut">退出</el-button>
      </el-form-item>
    </el-form>
    </div>
    </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: "请输入账号/用户名", trigger: "blur" },
          { min: 2, message: "用户名字符个数不少于2位", trigger: "blur" },
        ],
        password: [{ required: true, message: "输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      this.$http.post("api/permission/getMenu", this.form).then((res) => {
        res = res.data;
        if (res.code === 20000) {
          this.$store.commit("clearMenu"); //初始化菜单
          this.$store.commit("setMenu", res.data.menu); //放入获取到的菜单
          this.$store.commit("setToken", res.data.token); //放入获取到的token信息
          this.$store.commit("addMenu", this.$router); //动态渲染路由
          this.$router.push("/"); //跳转到首页
        } else {
          this.$message.warning(res.data.message);
        }
      });
    },
    loginOut() {
      this.$store.commit("clearToken");
      this.$store.commit("clearMenu"); //两部清理先前存的token与菜单
      location.reload(); //重定向回本页,reload刷新
    },
  },
};
</script>

<style lang="less">
.login {
  width: 300px;
  border: 1px solid #eaeaea;
  margin: 180px auto;
  padding: 20px 20px 10px 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #cac6c6;
}
.backGround {
  background: url("../../assets/LoginBackGround.jpg");
  height: 100%;
  width: 100%;
}
.username .el-form-item__label {
  color: white;
}
.password .el-form-item__label {
  color: white;
}
.login_submit {
  margin-left: 90px;
}
</style>