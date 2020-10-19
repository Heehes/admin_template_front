<template>
  <div class="labelContent">
    <span>{{ title }}</span>
    <div class="btnBox">
      <slot name="btns"></slot>
    </div>
  </div>
</template>
<script>
export default {
  // 标题
  name: "labelContent",
  props: ["title"],
  data() {
    return {};
  },
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.btnBox {
  float: right;
  height: 100%;
  overflow: hidden;
  padding-right: 10px;
}
</style>
