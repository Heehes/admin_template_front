<template>
  <div class="tagView">
    <div class="tagItem">
      首页
    </div>
    <div class="tagItem" v-for="(tag, index) in list" :key="index" @click="toggleTag(tag, 'remove')">
      {{ tag.meta.title || tag.name }}
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
      if(this.cache){
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
      if(this.cache){
          
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.tagView {
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  background-color: red;
}
.tagItem {
  border: 1px solid #ccc;
  float: left;
  height: 30px;
  line-height: 30px;
  font-size: 0.9em;
}
</style>
