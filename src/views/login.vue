<template>
  <div class="loginBox">
    <div class="login">
      <h2>XX公司系统后台</h2>
      <h4>专业 智能 科技 放心托付</h4>
      <el-input class="loginInput" placeholder="请输入账号" prefix-icon="iconfont u-yonghu1" v-model="userName" style="margin-top:3vh"> </el-input>
      <el-input class="loginInput" placeholder="请输入密码" prefix-icon="iconfont u-mima" v-model="passWord"> </el-input>
      <el-button @click="login" type="primary">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userName: '',
      passWord: ''
    };
  },
  methods: {
    login() {
      this.lsSet('userInfo',{userName:'某某'})
      this.jump("/home");
    },
  },
};
</script>

<style scoped lang="scss">
</style>
