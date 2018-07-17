<template>
  <div class="search-test">
    <!-- search-condition -->
    <el-form ref="taskForm" :model="taskForm" label-width="80px">
      <v-collapse v-model="taskPanel">
        <v-collapse-item title="任务搜索" name="taskSearch">
          <el-row :gutter="10">
            <el-col :span="6">
              <el-form-item label="任务名称">
                <el-select v-model="taskForm.taskTypeId">
                  <el-option label="报案" value="0"></el-option>
                  <el-option label="立案" value="1"></el-option>
                  <el-option label="理算" value="2"></el-option>
                  <el-option label="签批" value="3"></el-option>
                </el-select>
              </el-form-item>

            </el-col>
            <el-col :span="6">
              <el-form-item label="任务状态">
                <el-select v-model="taskForm.taskStatusId">
                  <el-option label="未认领" value="0"></el-option>
                  <el-option label="已认领" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="分公司">
                <el-select v-model="taskForm.operOrg">
                  <el-option label="总公司" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="证件号码">
                <v-input v-model="taskForm.certiCode"></v-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="10">
            <el-col :span="6">
              <el-form-item label="案件号">
                <v-input v-model="taskForm.caseNo"></v-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="理赔类型">
                <el-select v-model="taskForm.claimType" placeholder="请选择">
                  <el-option label="事故" value="0"></el-option>
                  <el-option label="病故" value="1"></el-option>
                  <el-option label="女性生育" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="被保人">
                <v-input v-model="taskForm.insuredName" placeholder="请选择">

                </v-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="证件类型">
                <el-select v-model="taskForm.certiType" placeholder="请选择">
                  <el-option label="无" value="-1"></el-option>
                  <el-option label="身份证" value="1"></el-option>
                  <el-option label="军人证" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

          </el-row>
          <el-row :gutter="10">

            <el-col :span="12">
              <el-form-item label="报案日从">
                <el-date-picker v-model="taskForm.regCaseDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="">

                <el-button type="primary" @click="onQuery">查询</el-button>
                <el-button type="primary">重置</el-button>
              </el-form-item>
            </el-col>
          </el-row>

        </v-collapse-item>
        <v-collapse-item title="任务搜索列表" name="taskCollection" >
          <!-- table list-->
          <v-table :data="tableData" :loading="loading">
            <v-table-column v-bind="col" v-for="(col, index) in tp1" :key="index" />
            <el-table-column label="案件号" width="200" align="center">
              <template slot-scope="scope">
                <router-link :to="{name:'acceptanceEntity', params:{caseNo:scope.row.caseNo}}">{{scope.row.caseNo}}</router-link>
              </template>
            </el-table-column>
            <v-table-column v-bind="col" v-for="(col, index) in tp2" :key="index" />
            <el-table-column label="操作" width="200" align="center">
              <template slot-scope="scope">
                <a href="#" style="text-decoration:underline" @click="claim(scope.row.caseNo)">认领</a>
              </template>
            </el-table-column>
          </v-table>
        </v-collapse-item>
      </v-collapse>
    </el-form>
  </div>

</template>

<script>
import api from "@/api";

export default {
  activated() {
    this.init();
  },
  data() {
    return {
      taskPanel: ["taskSearch", "taskCollection"],
      loading: false,
      tp1: {
        taskTypeId: { prop: "taskTypeId", label: "任务名称" },
        taskStatusId: { prop: "taskStatusId", label: "任务状态" }
      },
      tp2: {
        notificationDate: { prop: "notificationDate", label: "报案日期" },
        reviewDate: { prop: "reviewDate", label: "审核日期" },
        branch: { prop: "branch", label: "分公司" },
        lifeAssured: { prop: "lifeAssured", label: "被保人" }
      },
      tableData: [],
      taskForm: {
        taskTypeId: "",
        taskStatusId: "",
        operOrg: "",
        regCaseDate: "",
        caseNo: "",
        policyCode: "",
        claimType: "",
        insuredName: "",
        certiType: "",
        certiCode: ""
      }
    };
  },
  methods: {
    init() {
      console.log("init");
      this.searchProcessingPool(this.taskForm);
    },
    onQuery() {
      this.searchProcessingPool(this.taskForm);
    },
    claim(caseNo) {
      this.searchProcessingPool(caseNo);
    },
    async searchProcessingPool(sm) {
      this.loading = true;
      this.tableData = await api.searchProcessingPool(sm);
      this.loading = false;
    }
  }
};
</script>

