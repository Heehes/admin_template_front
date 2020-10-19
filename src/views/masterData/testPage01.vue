<template>
  <div ref="pageBox">
    <SearchBox ref="SearchBox">
      <el-form slot="form" :inline="true" label-width="80px" class="unitWidth" size="small">
        <el-form-item label="活动名称">
          <el-input placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-select placeholder="请选择活动区域" v-model="testValue">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-time-picker placeholder="选择时间"></el-time-picker>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input placeholder="请输入"></el-input>
        </el-form-item>
      </el-form>
      <template slot="btns">
        <el-button size="small" type="primary">搜索</el-button>
      </template>
    </SearchBox>
    <LabelContent title="客户抱怨记录" ref="LabelContent">
      <div slot="btns">
        <el-button size="small" type="success"> 新增 </el-button>
        <el-button size="small" type="warning"> 批量移除 </el-button>
      </div>
    </LabelContent>
    <div class="tableBox">
      <el-table stripe ref="multipleTable" height="50vh" :data="tableData" class="center" :height="tableHeight + 'px'">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="value" label="日期" />
        <el-table-column prop="value" label="姓名" />
        <el-table-column prop="value" label="地址" show-overflow-tooltip />
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <i class="editBtn iconfont u-youjianbianji" />
            <i class="delBtn iconfont u-shanchu" />
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="paginationChange"
        @current-change="paginationChange"
        :current-page="testValue"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="testValue"
        layout="total, sizes, prev, pager, next, jumper"
        :total="testValue"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Factory",
  data() {
    return {
      tableHeight: 0, //表格高度

      testValue: 1,
      tableData: [{ value: "11" }, { value: "11" }],
    };
  },
  mounted() {
    //设置表格高度
    this.$nextTick(() => {
      let page = this.$refs.pageBox.offsetHeight || 0; //卡片高度
      let SearchBox = this.$refs.SearchBox ? this.$refs.SearchBox.$el.offsetHeight : 0; //搜索框高度
      let LabelContent = this.$refs.LabelContent ? this.$refs.LabelContent.$el.offsetHeight : 0; //内容标题高度
      this.tableHeight = page - (SearchBox + LabelContent + 20 + 30); //padding -20,分页 -30
    });
  },
  methods: {
    paginationChange(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="scss" scoped></style>
