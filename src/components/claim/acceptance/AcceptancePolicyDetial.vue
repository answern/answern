<template>
	<el-form ref="detailForm" :model="detailForm">
		<v-grid>
			<v-form-item label="立案保单">
				<v-input :disabled="true" v-model="detailForm.isAccepted" />
			</v-form-item>
			<v-form-item label="手机">
				<v-input :disabled="true" v-model="detailForm.tel" />
			</v-form-item>
			<v-form-item label="发送短信">
				<v-switch v-model="detailForm.isSmsSend"></v-switch>
			</v-form-item>
			<v-form-item label="冻结该保单">
				<v-switch v-model="detailForm.isFreezed" />
			</v-form-item>
		</v-grid>

		<v-table :data="tableData" :loading="loading">
			<el-table-column type="expand" solt="expand">
				<template slot-scope="scope">
					<v-grid>
						<v-form-item label="险种立案">
							<v-switch v-model="scope.row.isAccepteds" />
						</v-form-item>
						<v-form-item label="赔付金额">
							<el-input-number style="width:100%" v-model="scope.row.notifiedAmounts" :precision="2" :step="0.1" :max="999999999999"></el-input-number>
						</v-form-item>
					</v-grid>
				</template>
			</el-table-column>
			<v-table-column prop="productName" label="产品名称" />
			<v-table-column prop="lifeAssured" label="被保人" />
			<v-table-column prop="jointAssured" label="第二被保人" />
			<v-table-column prop="liabStateInEventDate" label="事故日险种状态" />
			<v-table-column prop="liabStateNow" label="险种当前状态" />
			<v-table-column prop="actualValidate" label="生效日期" />
			<v-table-column prop="endDate" label="终止日期" />
		</v-table>

		<el-button type="primary">保存</el-button>
	</el-form>

</template>

<script>
import api from "@/api";
import SmsSend from "@/widgets/SmsSend";

export default {
  components: { SmsSend },
  props: ["binding"],
  activated() {
    console.log("Acceptan...detail...active");
  },
  created() {
    console.log("created");
    let { row } = this.binding;
    Object.assign(this.detailForm, { ...row });
    console.log(this.detailForm);
  },
  mounted() {
    console.log("mounted");
    this.getPolicyDetail();
  },
  methods: {
    checkChange() {},

    getPolicyDetail() {
      this.loading = true;
      api.getPolicyDetail().then(data => {
        console.log(data);
        this.tableData = data;

        let mar = data.filter(x => x.type === "major");
        let sec = data.filter(x => x.type === "secondary");
        let { major, secondary } = this.detailForm;
        if (mar.length) {
          major.isAccepteds = mar[0].isAccepteds;
          notifiedAmounts: mar[0].notifiedAmounts;
        }
        if (sec.length) {
          sec.forEach((se, index) => {
            secondary[index] = {
              isAccepteds: se.isAccepteds,
              notifiedAmounts: se.notifiedAmounts
            };
          });
        }
        this.loading = false;
      });
    }
  },
  data() {
    return {
      detailForm: {
        isAccepted: "",
        tel: "",
        isSmsSend: false,
        isFreezed: false,
        major: {
          isAccepteds: false,
          notifiedAmounts: 1000
        },
        secondary: []
      },
      tp: [],
      loading: false,
      tableData: []
    };
  }
};
</script>

