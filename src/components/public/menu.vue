<template>
  <div class="u-menu">
    <el-scrollbar>
      <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item index="2">
            <span slot="title">导航二</span>
          </el-menu-item>
        </el-submenu>

        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  name: "Menu",
  props: ["isCollapse"],
  data() {
    return {};
  },
  mounted() {
    //   authPower
    this.getMenu();
  },
  methods: {
    getMenu() {
      let menus = JSON.parse(JSON.stringify(this.$router.options.routes));
      menus = menus.filter((item) => {
        if (item.hidden) return;    //是否隐藏
        if(this.authPower(item.role))
        return item;
      });
      console.log(menus);
    },
  },
};
</script>
<style lang="scss" scoped>
.u-menu {
  height: 100%;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-scrollbar {
    height: calc(100% + 17px);
    width: 100%;
  }
  .el-scrollbar .el-scrollbar__wrap {
    overflow-y: scroll;
    width: 110%;
  }
}
</style>
