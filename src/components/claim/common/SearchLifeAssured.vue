<template>
  <div class="search-test">
    <!-- search-condition -->
    <el-form ref="assuredForm" :model="assuredForm" label-width="80px">
      <el-row :gutter="10">
        <el-col :span="6">
          <el-form-item label="保单号">
            <el-input v-model="assuredForm.policyCode"></el-input>
          </el-form-item>

        </el-col>
        <el-col :span="6">
          <el-form-item label="姓名">
            <el-input v-model="assuredForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="性别">
            <el-select v-model="assuredForm.gender" placeholder="请选择">
              <el-option label="无" value="-1"></el-option>
              <el-option label="女" value="m"></el-option>
              <el-option label="男" value="f"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="证件类型">
            <el-select v-model="assuredForm.certiType" placeholder="请选择">
              <el-option label="无" value="-1"></el-option>
              <el-option label="身份证" value="1"></el-option>
              <el-option label="军人证" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col :span="6">
          <el-form-item label="证件号码">
            <el-input v-model="assuredForm.certiCode"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="">
            <el-button type="primary" @click="onQuery">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>

      <!-- table list -->
      <el-table :data="tableData" v-loading="loading" :border="false" style="width: 100%" expand-change="expandRow">
        <el-table-column type="expand" align="center">
          <template slot-scope="scope">

            <el-popover trigger="hover" placement="top" v-for="poc in scope.row.policyCode.split(',')" v-bind:key="poc">
              <p>保单号: {{ poc }}</p>
              <p>投保人: {{ scope.row.name }}</p>
              <p>生效时间:2018-01-01</p>
              <p>结束时间:2019-12-31</p>
              <el-tag slot="reference" size="medium" style="margin:5px">{{poc}}</el-tag>
            </el-popover>

          </template>
        </el-table-column>
        <el-table-column label="选择" width="55" align="center">
          <template slot-scope="scope">
            <el-radio v-model="assuredForm.assured" :label="scope.row.certiCode" @change.native="getCurrentRow(scope.row)"></el-radio>
          </template>
        </el-table-column>
        <el-table-column property="name" label="姓名" width="200" align="center"></el-table-column>
        <el-table-column property="gender" label="性别" width="55" align="center"></el-table-column>
        <el-table-column property="certiType" label="证件类型" align="center"></el-table-column>
        <el-table-column property="certiCode" label="证件号码" align="center"></el-table-column>
        <el-table-column label="相关保单">
          <template slot-scope="scope">
            <span class="data-flow">{{scope.row.policyCode}}</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </div>
    </el-form>
  </div>

</template>

<script>
import api from "@/api";

export default {
  props: {
    assuredForm: {
      type: Object,
      default: {}
    },
    searchedAssured: {
      type: Object,
      default: {}
    },
    initialization: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    initialization(val) {
      if (val) {
        this.onQuery(this.assuredForm);
      }
    }
  },
  data() {
    return {
      loading: true,
      tableData: [],
      formLabelWidth: "120px",
      currentPage4: 4
    };
  },
  mounted() {
    this.onQuery(this.assuredForm);
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    expandRow(row, expandedRows) {
      console.log(row);
      console.log(expandedRows);
    },
    onQuery() {
      this.searchLifeAssured(this.assuredForm);
    },

    getCurrentRow(row) {
      console.log(row);
      console.log(row.certiCode);
    },
    async searchLifeAssured(queryCondition) {
      this.loading = true;
      let value = await api.searchLifeAssured(queryCondition);
      if (value) {
        this.tableData = value;
      }
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../styles/mixin.scss";
.data-flow {
  @include ellipsis;
}
.pagination {
  float: right;
}
