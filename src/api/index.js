import { post } from './request'

export default {
	get_quote(sm) {
		return post(`quote`, sm);
	},
	//获取被保险人信息。
	searchLifeAssured(sm = {}) {
		console.log('ass...........data............');
		console.log('sm.......', sm);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let gridData = null;
				if (!sm.policyCode) {
					gridData = [
						{
							name: "王小虎",
							gender: "N",
							certiType: "身份证",
							certiCode: "32432804154145",
							policyCode: "S100008492305813405724301,S100008492305813405724302,S100008492305813405724303,S100008492305813405724304,S100008492305813405724305,S100008492305813405724306,S100008492305813405724307,S100008492305813405724308,S100008492305813405724309"
						},
						{
							name: "王2虎",
							gender: "N",
							certiType: "身份证",
							certiCode: "32432804154143",
							policyCode: "S100008492305813405724304"
						},
						{
							name: "王3虎",
							gender: "N",
							certiType: "身份证",
							certiCode: "32432804154142",
							policyCode: "S10000849230581340572430h"
						},
						{
							name: "王4虎",
							gender: "N",
							certiType: "身份证",
							certiCode: "32432804154149",
							policyCode: "S100008492305813405724309"
						},
						{
							name: "王9虎",
							gender: "N",
							certiType: "身份证",
							certiCode: "32430804154145",
							policyCode: "S10000849230581340572430w"
						}
					];
				} else {
					gridData = [
						{
							date: "2016-05-02",
							name: "tttt",
							address: "上海市普陀区金沙江路 1518 弄"
						},
						{
							date: "2016-05-04",
							name: "aaa",
							address: "上海市普陀区金沙江路 1518 弄"
						},
						{
							date: "2016-05-01",
							name: "ccc",
							address: "上海市普陀区金沙江路 1518 弄"
						},
						{
							date: "2016-05-03",
							name: "fff",
							address: "上海市普陀区金沙江路 1518 弄"
						}
					];
				}

				resolve(gridData);
			}, 1000)
		});
	},

	//
	selLifeAssured(sm) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let form = {
					assuredName: "王小虎",
					assuredGender: "F",
					assuredCertiType: "1",
					assuredCertiCode: "3294283184145",
					accidentTime: "",
					eventLocation: "",
					claimNature: "",
					claimType: "",
					eventDetails: "",
					caseLevel: ""
				};
				resolve(form);
			}, 1000);
		});
	},

	registerCase(caseinfo) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let caseNo = '4032342315452345'
				resolve(caseNo);
			}, 1000);
		});
	},

	searchProcessingPool(sm) {
		console.log(sm);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let taskData = [{ taskTypeId: "理算", taskStatusId: "未认领", caseNo: "402834314312", notificationDate: "2017-12-01", reviewDate: "2017-12-03", branch: "总公司", lifeAssured: "nacy" },
				{ taskTypeId: "立案", taskStatusId: "未认领", caseNo: "402834314313", notificationDate: "2017-12-01", reviewDate: "2017-12-03", branch: "总公司", lifeAssured: "nacy" },
				{ taskTypeId: "理算", taskStatusId: "未认领", caseNo: "402834314314", notificationDate: "2017-12-01", reviewDate: "2017-12-03", branch: "总公司", lifeAssured: "nacy" },
				{ taskTypeId: "审核", taskStatusId: "未认领", caseNo: "402834314315", notificationDate: "2017-12-01", reviewDate: "2017-12-03", branch: "总公司", lifeAssured: "nacy" },
				{ taskTypeId: "理算", taskStatusId: "未认领", caseNo: "402834314316", notificationDate: "2017-12-01", reviewDate: "2017-12-03", branch: "总公司", lifeAssured: "nacy" }];
				resolve(taskData);
			}, 1000);
		});
	},

	acceptanceEntity(caseNo) {
		console.log(caseNo);
		return new Promise((res, rej) => {
			setTimeout(() => {
				res(caseNo);
			}, 1000);
		});
	},

	getPolicyCollection(caseNo) {
		return new Promise((res, rej) => {
			setTimeout(() => {
				let collecion = [
					{
						policyCode: "SH0000323543", policyHolderName: "BFA0002", currentStatusId: "终止", statusAtEvent: "终止",
						isAccepted: "Y",
						isFreezed: false,
						isSmsSend: true,
						tel: "133823433472"
					},
					{
						policyCode: "SH0000323546", policyHolderName: "BFA0002", currentStatusId: "终止", statusAtEvent: "终止",
						isAccepted: "N",
						isFreezed: false,
						isSmsSend: true,
						tel: "133823433472"
					},
					{
						policyCode: "SH0000323547", policyHolderName: "BFA0002", currentStatusId: "终止", statusAtEvent: "终止",
						isAccepted: "N",
						isFreezed: false,
						isSmsSend: true,
						tel: "133823433472"
					},
					{
						policyCode: "SH0000323548", policyHolderName: "BFA0002", currentStatusId: "终止", statusAtEvent: "终止",
						isAccepted: "N",
						isFreezed: false,
						isSmsSend: true,
						tel: "133823433472"
					}];
				res(collecion);
			}, 500);
		});
	},

	getPolicyDetail(policyCode) {
		return new Promise((res, rej) => {
			setTimeout(() => {
				let major = {
					productCode: "aaaaaaaaaaaa",
					type: "major",
					productName: "安心住院保少儿白金计划",
					lifeAssured: "张三653496",
					jointAssured: "ccc",
					liabStateInEventDate: "生效",
					liabStateNow: "生效",
					actualValidate: "19/01/2018",
					endDate: "19/01/2018",
					isAccepteds: false,
					notifiedAmounts: "1000"
				};
				let secondary1 = {
					type: "secondary",
					productCode: "bbbbbbbbbbbbbbb",
					productName: "安心fjx",
					lifeAssured: "张三653496",
					jointAssured: "ccc",
					liabStateInEventDate: "生效",
					liabStateNow: "生效",
					actualValidate: "19/01/2018",
					endDate: "19/01/2018",
					isAccepteds: false,
					notifiedAmounts: 1000
				};
				let secondary2 = {
					type: "secondary",
					productCode: "cccccccccccccccc",
					productName: "安心d",
					lifeAssured: "张三653496",
					jointAssured: "vvvsdsd",
					liabStateInEventDate: "生效",
					liabStateNow: "生效",
					actualValidate: "19/01/2018",
					endDate: "19/01/2018",
					isAccepteds: false,
					notifiedAmounts: 1000
				};
				res([major, secondary1, secondary2]);
			}, 1000);
		});
	}
}