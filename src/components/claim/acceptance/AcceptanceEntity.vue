<template>
  <div>
    <el-form ref="caseForm" :model="caseForm">
      <v-collapse>
        <!--案件号-->
        <v-collapse-item title="案件号">
          <v-grid>
            <v-form-item label="案件号">
              <v-input v-model="caseNo" :disabled="true" />
            </v-form-item>
          </v-grid>
        </v-collapse-item>
        <!--理赔信息-->
        <v-collapse-item title="理赔信息">
          <v-grid>
            <v-form-item label="被保人姓名">
              <v-input v-model="caseForm.accierName" />
            </v-form-item>
            <v-form-item label="理赔类型">
              <claim-type v-model="caseForm.claimType" />
            </v-form-item>
            <v-form-item label="事故日期*">
              <el-date-picker v-model="caseForm.accidentTime" />
            </v-form-item>
            <v-form-item label="理赔案件性质*">
              <claim-nature v-model="caseForm.claimNature" />
            </v-form-item>
            <v-form-item label="事故地点*">
              <v-input v-model="caseForm.eventLocation" />
            </v-form-item>
            <v-form-item label="报案日期*">
              <el-date-picker v-model="caseForm.notificationDate" />
            </v-form-item>
            <v-form-item label="医院代码">
              <v-input v-model="caseForm.hospitalId" />
            </v-form-item>
            <v-form-item label="疾病类型">
              <v-input v-model="caseForm.diseaseType" />
            </v-form-item>
            <v-form-item label="ICD-10">
              <v-input v-model="caseForm.ourCode" />
            </v-form-item>
            <v-form-item label="住院日期">
              <el-date-picker v-model="caseForm.admissionDate" />
            </v-form-item>
            <v-form-item label="出院日期">
              <el-date-picker v-model="caseForm.dischargeDate" />
            </v-form-item>
            <v-form-item label="事故详情*">
              <v-input v-model="caseForm.eventDetails" />
            </v-form-item>
          </v-grid>
        </v-collapse-item>
        <!--申请人信息-->
        <v-collapse-item title="申请人信息">
          <v-grid>
            <v-form-item label="申请人姓名">
              <v-input v-model="caseForm.clmtName" />
            </v-form-item>
            <v-form-item label="申请人类型">
              <v-select v-model="caseForm.clmtType" :options="[{label:'aaa', value:'aaa'}]" />
            </v-form-item>
            <v-form-item label="证件类型">
              <v-select v-model="caseForm.clmtCertiType" :options="[{label:'aaa', value:'aaa'}]" />
            </v-form-item>
            <v-form-item label="证件号码">
              <v-input v-model="caseForm.clmtCertiNo" />
            </v-form-item>
            <v-form-item label="申请日期">
              <el-date-picker v-model="caseForm.clmtDate" />
            </v-form-item>
            <v-form-item label="邮政编码">
              <v-input v-model="caseForm.clmtZipCode" />
            </v-form-item>
            <v-form-item label="邮件地址">
              <v-input v-model="caseForm.clmtEmail" />
            </v-form-item>
            <v-form-item label="联系电话">
              <v-input v-model="caseForm.clmtPhone" />
            </v-form-item>
          </v-grid>
          <el-row :gutter="10">
            <el-col :span="12">
              <el-form-item label="地址">
                <v-input v-model="caseForm.clmtAddr" />
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <v-form-item label="是否发送短信">
                <el-switch v-model="caseForm.isClaimantSms" inactive-color="#ff4949" active-text="发送" inactive-text="不发">
                </el-switch>
              </v-form-item>
            </el-col>
          </el-row>
        </v-collapse-item>
        <!--案件等级-->
        <v-collapse-item title="案件等级">
          <v-grid>
            <v-form-item label="案件等级">
              <case-level v-model="caseForm.caseLevel" />
            </v-form-item>
            <v-form-item label="案件上诉">
              <v-textarea v-model="caseForm.appealCase" />
            </v-form-item>
          </v-grid>
        </v-collapse-item>
      </v-collapse>
    </el-form>
    <div style="margin:10px;float:right">
      <el-button type="primary" @click="next">下一步</el-button>
      <el-button type="primary" @click="next">影像预览</el-button>
      <el-button type="primary" @click="next">万象影像预览</el-button>
      <el-button type="primary" @click="$router.push({name: 'mytask'})">返回任务列表</el-button>
    </div>

  </div>

</template>

<script>
import ClaimNature from "@/widgets/ClaimNature";
import ClaimType from "@/widgets/ClaimType";
import CaseLevel from "@/widgets/CaseLevel";

export default {
  components: {
    ClaimNature,
    ClaimType,
    CaseLevel
  },
  computed: {
    caseNo(a, b) {
      console.log(a, b);
      return this.$route.params.caseNo;
    }
  },
  data() {
    return {
      caseForm: {
        accierName: "",
        claimType: "",
        accidentTime: "",
        claimNature: "",
        eventLocation: "",
        notificationDate: "",
        hospitalId: "",
        diseaseType: "",
        admissionDate: "",
        ourCode: "",
        dischargeDate: "",
        eventDetails: "",
        clmtName: "",
        clmtType: "",
        clmtCertiType: "",
        clmtCertiNo: "",
        clmtDate: "",
        clmtZipCode: "",
        clmtAddr: "",
        clmtPhone: "",
        clmtEmail: "",
        isClaimantSms: "",
        caseLevel: "",
        appealCase: ""
      }
    };
  },
  methods: {
    next() {
      this.$router.push({ name: "acceptancePolicy", params: "1242341354435" });
      this.$emit("step", "policy");
    }
  },
  activated() {
    console.log("enter");
  }
};
</script>
