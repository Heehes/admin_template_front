<template>
  <div class="u-menu">
    <el-scrollbar>
      <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
        <div v-for="(route,index) in menus" :key="index">
          <!-- meta中未配置图标则为默认图标 el-icon-menu -->
          <!-- 标题未配置则为name -->
          <div v-if="!route.hidden">
            <!-- 含子页面 -->
            <el-submenu
              :index="route.name"
              v-if="route.children && route.children.length>0 && route.name"
            >
              <template slot="title">
                <div>
                  <i :class="route.meta? route.meta.icon||'el-icon-menu':'el-icon-menu'"></i>
                  <span slot="title">{{route.meta?route.meta.title:route.name}}</span>
                </div>
              </template>
              <!-- 子页面 -->
              <div v-for="(item,index) in route.children" :key="index">
                <el-menu-item :index="item.name" @click="jump(item.name)">
                  <span slot="title">{{item.meta?item.meta.title:item.name}}</span>
                </el-menu-item>
              </div>
            </el-submenu>
            <!-- 单页面 -->
            <el-menu-item
              v-else-if="route.children && route.children.length>0"
              :index="route.children[0].name"
              @click="jump(route.children[0].name)"
            >
              <i
                :class="route.children[0].meta? route.children[0].meta.icon||'el-icon-tickets':'el-icon-tickets'"
              ></i>
              <span
                slot="title"
              >{{route.children[0].meta?route.children[0].meta.title:route.children[0].name}}</span>
            </el-menu-item>
          </div>
        </div>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  name: "Menu",
  props: ["isCollapse"],
  data() {
    return {
      menus: [],
    };
  },
  mounted() {
    this.menus = JSON.parse(JSON.stringify(this.$router.options.routes));
    console.log(this.menus);
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.el-scrollbar {
  height: calc(100% + 17px);
  width: 100%;
}
.el-scrollbar .el-scrollbar__wrap {
  overflow-y: scroll;
  width: 110%;
}
</style>
