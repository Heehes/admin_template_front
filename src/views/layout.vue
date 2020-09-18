<template>
  <el-container>
    <el-header>
    </el-header>
    <el-container>
      <el-aside width="200px" :class="{unfold:unfold}">
        <div class="unfoldBtn" @click="unfold = !unfold">
          <i class="el-icon-s-fold"></i>
        </div>
        Aside
      </el-aside>
      <el-main>
        <tagView :cache="false"></tagView>
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
import tagView from '@/components/public/tagView.vue'
export default {
  name: "Layout",
  components:{
      tagView
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
  data() {
    return {
      unfold:true, //菜单展开
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
