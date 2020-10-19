<template>
  <el-container>
    <el-header>
      <div class="logoInfo">
        <img src="logo.png" />
        <span>XXX公司系统后台</span>
      </div>
      <div class="userInfoBox">
        <div><i class="iconfont u-59" /><span>2020-04-03 15:48:12</span></div>
        <div><i class="iconfont u-yonghu1" /><span>您好，哈哈哈</span></div>
        <div style="cursor: pointer;" @click="logOut"><i class="iconfont u-guanji " /><span>退出</span></div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <div class="isCollapseBtn" :class="{isCollapse:isCollapse}" @click="isCollapse = !isCollapse">
          <i class="el-icon-s-fold"></i>
        </div>
        <Menu :isCollapse="isCollapse"></Menu>
      </el-aside>
      <el-main>
        <!--TagView  cache 是否开启缓存 -->
        <TagView :cache="true"></TagView>
        <div class="pageBox" style="height:calc(100% - 40px)">
          <transition name="fade-transform" mode="out-in">
            <router-view :key="key" />
          </transition>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from '@/components/public/menu.vue'
import TagView from '@/components/public/tagView.vue'
export default {
  name: "Layout",
  components:{
      TagView,
      Menu
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
  data() {
    return {
      isCollapse: false, //菜单展开
    };
  },
  methods:{
    //退出登录
    logOut(){
      //清除tagView
      localStorage.setItem("tagView", '');
      this.lsSet('userInfo',{})
      this.jump('/login')
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
