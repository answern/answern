<template>
  <div>
    <!-- 搜查按钮 -->
    <div class="button-group-default">
      <el-button type="primary" @click="open">搜索被保险人</el-button>
    </div>

    <!-- 表单信息 -->
    <div>
      <el-form ref="form" :model="form">
        <el-row :gutter="10">
          <el-col :span="6">

            <span>案件号</span>
            <v-input v-model="form.caseNo" :readonly="true" />

          </el-col>
        </el-row>
        <v-collapse :accordion="true">
          <v-collapse-item title="被保险人信息" class="icon-search">
            <el-row :gutter="10">
              <el-col :span="6">
                <el-form-item label="被保险人姓名">
                  <v-input v-model="form.assuredName"></v-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="性别">
                  <el-input v-model="form.assuredGender" readonly></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="证件类型">
                  <el-input v-model="form.assuredCertiType" readonly></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="证件号码">
                  <el-input v-model="form.assuredCertiCode" readonly></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </v-collapse-item>

          <el-collapse-item title="理赔信息">
            <el-row :gutter="10">
              <el-col :span="6">
                <el-form-item label="出事日期*">

                  <el-date-picker v-model="form.accidentTime" type="date" placeholder="选择日期" value-format="timestamp">
                  </el-date-picker>

                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="事故地点*">
                  <el-input v-model="form.eventLocation"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="理赔案件性质*">
                  <claim-nature v-model="form.claimNature"></claim-nature>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="理赔案件类型*">
                  <claim-type v-model="form.claimType" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="10">
              <el-col :span="12">
                <el-form-item label="事故详情*">
                  <el-input type="textarea" v-model="form.eventDetails" resize="none"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="案件等级">
                  <case-level v-model="form.caseLevel" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>

          <el-collapse-item title="报案人信息">
            <el-row :gutter="10">
              <el-col :span="6">
                <el-form-item label="报案日期*">
                  <el-input v-model="form.kkk" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="报案人姓名">
                  <el-input v-model="form.lll"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="与被保险人的关系">
                  <el-input v-model="form.mmm"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="报案方式">
                  <el-input v-model="form.nnn"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="10">
              <el-col :span="6">
                <el-form-item label="手　机">
                  <el-input v-model="form.ooo" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="联系电话">
                  <el-input v-model="form.ppp"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="邮件地址">
                  <el-input v-model="form.qqq"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="邮政编码">
                  <el-input v-model="form.rrr"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="10">
              <el-col :span="12">
                <el-form-item label="地 址">
                  <el-input v-model="form.sss"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>

          <el-collapse-item title="理赔备注">
            <el-row :gutter="10">
              <el-col :span="6">
                <el-form-item label="理赔员*">
                  <el-input v-model="form.ttt"></el-input>
                </el-form-item>
              </el-col>

            </el-row>

            <el-row :gutter="10">
              <el-col :span="6">
                <el-form-item label="历史备注">
                  <el-input v-model="form.uuu" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="备注">
                  <el-input v-model="form.vvv"></el-input>
                </el-form-item>
              </el-col>

            </el-row>

          </el-collapse-item>
        </v-collapse>

      </el-form>

      <div class="button-group">

        <template v-if="!form.caseNo.length">
          <el-button type="primary" @click="onSubmit()">提交</el-button>
          <el-button type="primary">延迟报案</el-button>
        </template>
        <template v-else>
          <el-button type="primary" @click="acceptanceEntity()">立案</el-button>
          <el-button type="primary" @click="goOnRegistering()">继续报案</el-button>
          <el-button type="primary">文件清单</el-button>
        </template>

      </div>
    </div>

    <!-- 弹框 -->
    <v-confirm title="被保险人" :show.sync="show" @confirm="confirm" :width="80">
      <search-life-assured :assuredForm="assuredForm" :searchedAssured="searchedAssured" :initialization="show" />
    </v-confirm>

  </div>

</template>

<script>
import SearchLifeAssured from "@/components/claim/common/SearchLifeAssured";
import ClaimNature from "@/widgets/ClaimNature";
import ClaimType from "@/widgets/ClaimType";
import CaseLevel from "@/widgets/CaseLevel";

import api from "@/api";
import { $loading, $success } from "@/pub/tool";

export default {
  components: {
    ClaimNature,
    ClaimType,
    CaseLevel,
    SearchLifeAssured
  },
  filters: {
    formateGender(val) {
      return val === "F" ? "女" : "男";
    }
  },
  data() {
    return {
      show: false,
      assuredForm: {
        policyCode: "",
        name: "",
        gender: "",
        certiType: "",
        certiCode: "",
        assured: ""
      },
      searchedAssured: {},
      form: {
        caseNo: "",
        assuredName: "",
        assuredGender: "",
        assuredCertiType: "",
        assuredCertiCode: "",
        accidentTime: "",
        eventLocation: "",
        claimNature: "",
        claimType: "",
        eventDetails: "",
        caseLevel: "",
        kkk: "",
        lll: "",
        mmm: "",
        nnn: "",
        ooo: "",
        ppp: "",
        qqq: "",
        rrr: "",
        sss: "",
        ttt: "",
        uuu: "",
        vvv: ""
      }
    };
  },
  methods: {
    open() {
      this.show = true;
    },
    /**
     * 搜索被保险人弹框（确认）回调函数
     */
    async confirm() {
      console.log(this.assuredForm);
      console.log(this.searchedAssured);
      let loading = $loading.call(this);
      let value = await this.selLifeAssured();
      loading.close();
      console.log(value);
      Object.assign(this.form, value);
      this.show = false;
    },
    async acceptanceEntity() {
      let caseNo = this.form.caseNo;
      let loading = $loading.call(this);
      let value = await api.acceptanceEntity(caseNo);
      loading.close();
      this.$router.push({ name: "acceptanceEntity", params: { caseNo } });
    },
    goOnRegistering() {
      this.form.caseNo = "";
    },
    /**
     * 案件提交
     */
    async onSubmit() {
      let sm = {
        policyCode: "${policyCode}",
        productCodeFlag: "07P002",
        totalAmount: "1000000",
        totalPremium: "2000",
        applyDate: "2017-04-25",
        policyStartDate: "2017-05-10 00:00:00",
        policyEndDate: "2018-05-09 23:59:59",
        systemSource: "78",
        isAfterPremium: "1",
        chargeMode: "2",
        noBillingPreNo: "",
        province: "130000",
        city: "130100",
        countiesFlag: "163",
        businessSources: "02",
        chanMeAction: "0201",
        clerkNumber: "000009",
        clerkName: "黄坤",
        oprPerson: "000214",
        issueMechanism: "02000012",
        channelCode: "EC16110005",
        batch: "333333",
        agent: "U02002000011",
        agMeement: "U02002000011-01",
        agFeeRatio: "50",
        orgCode: "02000012",
        disHandling: "B",
        insuranceDays: "365",
        signingDate: "2017-03-09 13:51:37",
        sinSymbol: "0",
        regSign: "1",
        nucleusDate: "2017-03-09 13:51:37",
        policyHolder: {
          partyId: "1",
          firstName: "VCV${count}",
          certiCode: "371428196810088003",
          mobileTel: "17701861097",
          email: "402855563@qq.com",
          certiType: "120001",
          birthdate: "1989-10-08",
          jobCode: "000101",
          relationToLA: "601002"
        },
        insureds: [
          {
            partyId: "2",
            firstName: "EDQ${count}",
            certiCode: "371428196810088003",
            mobileTel: "17701861097",
            email: "402855563@qq.com",
            certiType: "120001",
            birthdate: "1968-10-08",
            socialSecFlag: "Y",
            jobCode: "000101",
            relationToPH: "601003"
          }
        ],
        beneficiaries: [
          {
            partyId: "2",
            insuredPartyId: "2",
            firstName: "EDQ${count}",
            certiType: "120001",
            certiCode: "371428196810088003",
            shareRate: "100",
            birthdate: "1968-10-08",
            shareOrder: "1",
            designation: "601005"
          }
        ],
        coverages: [
          {
            coverageId: "1",
            amount: "1000000",
            prem: "2000",
            productCode: "07H003",
            coveragePeriod: "2",
            productId: "0",
            chargeYear: "0",
            chargePeriod: "1",
            coverageYear: "1",
            masterCoverageId: null,
            CoverageInsuredList: [
              {
                orderId: "1",
                partyId: "2",
                calcPrem: "2000"
              }
            ]
          }
        ]
      };
      await api.get_quote(sm);
      this.registerCase(this.form);
    },
    async registerCase(caseinfo) {
      let loading = $loading.call(this);
      let caseNo = await api.registerCase(caseinfo);
      if (caseNo) {
        console.log(caseNo);
        this.form.caseNo = caseNo;
        $success.call(this, { message: "报案成功" });
        //debugger;
        //this.$router.push({ name: "acceptanceEntity", params: { caseNo } });
      }
      loading.close();
    },
    async selLifeAssured(q) {
      let value = await api.selLifeAssured();
      return value;
    }
  }
};
</script>

<style scoped>
@import '../../../styles/style.css';
.el-form-item__label {
  font-size: 12px;
}
.button-group {
  margin: 10px 5px;
  float: right;
}
.button-group-default {
  margin: 10px 5px;
}
</style>

<style>
.el-radio__label {
  display: none;
}
.flex-direction column > .el-dialog__body {
  overflow: auto;
}
</style>