<template>
  <div class="tagView">
    <div class="tagItem" v-for="i in 20" :class="{ checked: $route.name == 'Home' }" @click="jump('Home')">
      <span>首页</span>
    </div>
    <div
      class="tagItem"
      :class="{ checked: $route.name == tag.name, cantClose: tag.meta ? tag.meta.cantClose : false }"
      @click="jump(tag.name)"
      v-for="(tag, index) in list"
      :key="index"
    >
      <span>{{ tag.meta ? tag.meta.title : tag.name }}</span>
      <i class="iconfont u-guanbi" @click.stop="toggleTag(tag, 'remove')" />
    </div>
  </div>
</template>
<script>
export default {
  name: "tagView",
  //cache是否缓存
  props: ["cache"],
  computed: {
    list: function() {
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
    if (this.cache) {
    } else {
      // 设置首页
      this.$store.commit("setTagList", [this.$router.options.routes.find((item) => item.path == "/").children[0]]);
    }
  },
  methods: {
    toggleTag(tag, type) {
      let data = [];
      if (type == "add") {
        if (this.list.find((item) => item.path == tag.path) || tag.path == "/home") return;
        data = this.list;
        data.push(tag);
      } else {
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
      if (this.cache) {
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
  .tagItem {
    padding: 0 5px;
    display: inline-block;
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
</style>
