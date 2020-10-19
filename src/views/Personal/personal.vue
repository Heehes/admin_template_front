<template>
  <div class="page">
    <LabelContent title="个人中心" />
    <el-form label-width="100px" class="u-form" size="small">
      <el-form-item label="姓名">
        <el-input placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input placeholder="请输入"></el-input>
      </el-form-item>
    </el-form>
    <LabelContent title="密码修改" />
    <el-form label-width="100px" class="u-form" size="small">
      <el-form-item label="当前密码">
        <el-input :type="oldPwdShow ? 'password' : 'text'" placeholder="请输入">
          <i slot="suffix" class="iconfont" :class="oldPwdShow ? 'u-bukejian' : 'u-kejian'" @click="oldPwdShow = !oldPwdShow" />
        </el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input :type="newPwdShow ? 'password' : 'text'" placeholder="请输入">
          <i slot="suffix" class="iconfont" :class="newPwdShow ? 'u-bukejian' : 'u-kejian'" @click="newPwdShow = !newPwdShow" />
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="test" type="primary">修改</el-button>
      </el-form-item>
    </el-form>
    <div class="bottomBtnBox">
        <el-button class="long" @click="test" type="primary" size="small">修改</el-button>
        <el-button class="long" @click="test" type="info" size="small">修改</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Factory",
  data() {
    return {
      name: "",
      //密码不可见控制
      oldPwdShow: true,
      newPwdShow: true,
    };
  },
  mounted() {},
  methods: {
    test() {
      this.$http
        .request({
          url: "https://www.baidu.com/sugrec",
          method: "GET",
          showLoading: true,
          params: {},
        })
        .then((resp) => {})
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
