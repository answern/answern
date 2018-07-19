<template>
  <div class="search-assured">
    <!-- search-condition -->
    <el-form ref="assuredForm" :model="assuredForm">
      <v-grid>
        <v-form-item label="保单号">
          <v-input v-model="assuredForm.policyCode" />
        </v-form-item>
        <v-form-item label="姓名">
          <v-input v-model="assuredForm.name" />
        </v-form-item>
        <v-form-item label="性别">
          <gender v-model="assuredForm.gender" />
        </v-form-item>
        <v-form-item label="证件类型">
          <certiType v-model="assuredForm.certiType" />
        </v-form-item>
        <v-form-item label="证件号码">
          <v-input v-model="assuredForm.certiCode" />
        </v-form-item>
        <v-form-item :pair="true">
          <el-button type="primary" @click="onQuery">查询</el-button>
        </v-form-item>
      </v-grid>

      <!-- table list -->
      <v-table :data="tableData" :loading="loading" type="radio" @radio-change="selectAssured" @expand-change="expandRow">
        <el-table-column type="expand" slot="expand" align="center">
          <template slot-scope="scope">
            <policy-detail :binding="scope"/>
          </template>
        </el-table-column>
        <v-table-column prop="name" label="姓名" />
        <v-table-column prop="gender" label="性别" />
        <v-table-column prop="certiType" label="证件类型" />
        <v-table-column prop="certiCode" label="证件号码" />
        <el-table-column label="相关保单" align="center">
          <template slot-scope="scope">
            <span class="data-flow">{{scope.row.policyCode}}</span>
          </template>
        </el-table-column>
      </v-table>
      <div class="pagination">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </div>
    </el-form>
  </div>

</template>

<script>
import api from "@/api";
import PolicyDetail from "./PolicyDetail";
import Gender from "@/widgets/Gender";
import CertiType from "@/widgets/CertiType";

export default {
  components: { Gender, CertiType, PolicyDetail },
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
      currentPage4: 4
    };
  },
  mounted() {
    this.onQuery(this.assuredForm);
  },
  methods: {
    selectAssured(val) {
      console.log(val);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    expandRow({ row, expandedRows }) {
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
</style>
