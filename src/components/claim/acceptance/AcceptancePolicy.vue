<template>
  <v-collapse>
    <v-collapse-item title="立案保单">
      <v-table :data="tableData" :loading="loading">
        <el-table-column type="expand" solt="expand" @expand-change="expandRow">
          <template slot-scope="scope">
            <acceptance-policy-detial :binding="scope" />
          </template>
        </el-table-column>
        
        <v-table-column v-bind="col" v-for="(col, index) in tp" :key="index" />
      </v-table>
    </v-collapse-item>
  </v-collapse>
</template>
<script>
import api from "@/api";
import AcceptancePolicyDetial from "./AcceptancePolicyDetial";

export default {
  components: { AcceptancePolicyDetial },
  activated() {
    console.log("ssssssssssssssssssssssssss");
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      loading: false,
      tp: [
        { prop: "policyCode", label: "保单号" },
        { prop: "policyHolderName", label: "投保人" },
        { prop: "currentStatusId", label: "当前保单状态" },
        { prop: "statusAtEvent", label: "事故日保单状态" }
      ],
      tableData: []
    };
  },
  methods: {
    reset(name) {
      this.$refs[name].resetFields();
    },
    next() {
      this.$router.push({
        name: "acceptanceSummary",
        params: this.$route.params.caseNo
      });
      this.$emit("step", "summary");
    },
    init() {
      this.getPolicyCollection();
    },
    async getPolicyCollection() {
      this.loading = true;
      this.tableData = await api.getPolicyCollection();
      this.loading = false;
    },
    expandRow(val) {
      let { row } = val;
    }
  }
};
</script>