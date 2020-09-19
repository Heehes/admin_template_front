<template>
  <div class="tagView">
    <el-scrollbar>
      <div class="tagLi" v-for="(tag, index) in list" :key="index">
        <div
          v-if="!tag.hidden"
          @click="jump(tag.name)"
          class="tagItem"
          :class="{ checked: $route.name == tag.name, cantClose: tag.meta ? tag.meta.cantClose : false }"
        >
          <span>{{ tag.meta.title }}</span>
          <i class="iconfont u-guanbi" @click.stop="toggleTag(tag, 'remove')" />
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  name: "tagView",
  //cache是否缓存
  props: ["cache"],
  computed: {
    list: function () {
      return this.$store.state.tagList;
    },
  },
  data() {
    return {};
  },
  watch: {
    $route() {
      this.toggleTag(this.$route, "add");
    },
  },
  mounted() {
    //获取已缓存
    if (this.cache) {
      this.$store.commit("setTagList", this.lsGet("tagView") || []);
    }
    // 添加首页
    this.toggleTag(
      this.$router.options.routes.find((item) => item.path == "/").children[0],
      "add"
    );
    //添加当前页面
    this.toggleTag(this.$route, "add");
  },
  methods: {
    toggleTag(intoTag, type) {
      let tag = {
        meta: {
          title: intoTag.meta ? intoTag.meta.title : intoTag.name,
          cantClose: intoTag.meta ? intoTag.meta.cantClose : false
        },
        hidden: typeof(intoTag.hidden)=='undefined'? false : intoTag.hidden   ,
        name: intoTag.name,
        path: intoTag.path,
      };
      // 新增
      let data = [];
      if (type == "add") {
        //是否已存在
        if (this.list.find((item) => item.path == tag.path)) return;
        data = this.list;
        data.push(tag);
      } else {
        // 删除
        data = this.list.filter((item) => {
          if (item.path != tag.path) {
            return item;
          } else {
            //关闭当前页跳转到home
            if (tag.path == this.$route.path) {
              this.$router.push({ name: "Home" });
            }
          }
        });
      }
      this.$store.commit("setTagList", data);
      //缓存到ls
      if (this.cache) {
        this.lsSet("tagView", data);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.tagView {
  white-space: nowrap;
  width: calc(100% - 30px);
  margin-left: 30px;
  height: 30px;
  margin-bottom: 10px;
  .tagLi {
      display: inline-block;
    .tagItem {
      /* float: left; */
      margin-top: 4px;
      padding: 0 5px;
      width: auto;
      height: 30px;
      line-height: 30px;
      font-size: 0.9em;
      font-weight: bold;
      margin-right: 10px;
      cursor: pointer;
      user-select: none;
      border-radius: 8px;
      overflow: hidden;
      span {
        letter-spacing: 1px;
        transition: padding 0.3s;
        float: left;
        padding: 0 15px;
      }
      i {
        margin-top: 5px;
        border-radius: 50%;
        height: 20px;
        line-height: 20px;
        text-align: center;
        transition: width 0.3s;
        font-size: 0.8em;
        float: left;
        overflow: hidden;
        width: 0px;
      }
      i:hover {
      }
    }
    .tagItem:hover {
      span {
        padding: 0 5px;
      }
      i {
        width: 20px;
      }
    }
    .tagItem.cantClose:hover {
      span {
        padding: 0 15px !important;
      }
      i {
        width: 0px !important;
      }
    }
  }
}

//el-scrollbar
.el-scrollbar {
  text-align: left;
  width: 100%;
}
.el-scrollbar__wrap {
  overflow-x: scroll;
  overflow-y: scroll;
  width: 110%;
  height: 120%;
}
.tagView::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
