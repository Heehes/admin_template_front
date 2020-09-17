<template>
  <el-container>
    <el-header>
        
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <tagView :cache="true"></tagView>
        <transition name="fade-transform" mode="out-in">
          <router-view :key="key" />
        </transition>
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
    return {};
  },
};
</script>

<style lang="scss" scoped>
    .el-container{
        width: 100%;
        height: 100%;
        .el-header{
            background: rgb(65, 125, 245);
            box-shadow: 0 0px 10px 0px rgb(65, 125, 245);
        }
        .el-container{
            overflow: hidden;
            .el-aside{
                background-color: #fff;
                box-shadow: -10px 10px 20px 0px #000000;
            }
            .el-main{
                padding: 10px 20px;
                // background-color: #000000
            }
        }
    }
</style>
