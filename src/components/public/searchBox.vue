<template>
  <div class="searchBox">
    <div class="formBox">
      <slot name="form"></slot>
    </div>
    <div class="btnBox">
      <slot name="btns"></slot>
    </div>
  </div>
</template>
<script>
export default {
  // 标题
  name: "searchBox",
  data() {
    return {};
  },
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
