<template>
	<div>
		<h4>保全录入--搜索保单--页面</h4>

		<el-form ref="form" :model="form">
			<v-grid>
				<el-form-item prop="name">
					<div style="font-size:10px">aaaa</div>
					<v-input v-model="form.name" :disabled="true" />
				</el-form-item>
				<v-form-item prop="age">
					<v-input v-model="form.age" /><v-input v-model="form.age" />
				</v-form-item>
				<el-button @click="reset('form')">重置</el-button>
			</v-grid>

			<v-table ref="table" :loading="loading" :data="tableData" type="check" @check-change="handle" @expand-change="expandRow">
				<!--expand-->
				<el-table-column type="expand" slot="expand" align="center">
					<template slot-scope="scope">
						<popup :binding="scope" />
					</template>
				</el-table-column>
				<!--other-->
				<v-table-column v-bind="col" v-for="(col, index) in tp" :key="index" />
				<!--operation-->
				<el-table-column label="操作" align="center">
					<template slot-scope="scope">
						<el-button type="primary" @click="query">查询</el-button>
					</template>
				</el-table-column>

			</v-table>
			<el-button @click="clear" type="primary">清除</el-button>
			<el-button type="primary" @click="submit">提交</el-button>
		</el-form>
	</div>

</template>

<script>
let popup = {
  props: ["binding"],
  render() {
		let { binding: { row } } = this;
    return (
      <el-popover trigger="hover" placement="top">
        <p>保单号: {row.name}</p>
        <p>投保人: {row.age}</p>
        <p>生效时间:2018-01-01</p>
        <p>结束时间:2019-12-31</p>
				<el-tag slot="reference" size="medium" style="margin:5px">
				{row.name}
				</el-tag>
      </el-popover>
    );
  }
};

export default {
  components: { popup },
  data() {
    return {
			loading: false,
      form: { name: "sss", age: "" },
      selections: [],
      caseA: "12",
      radio: null,
      tp: {
        id: { prop: "id", label: "ID" },
        name: { prop: "name", label: "ss名字" },
        age: { prop: "age", label: "年龄" }
      },
      tableData: [
        { id: "124", name: "jhon", age: 32 },
        { id: "4235", name: "tom", age: 78 },
        { id: "8921", name: "jhon", age: 32 }
      ]
    };
  },
  methods: {
		query(){
			this.loading = true;
				setTimeout(()=>{
				this.loading = false;
			}, 1000);
		},
		submit(){
			let loading = this.$$loading('fffffffffffff');
			setTimeout(()=>{
				loading.close();
				this.$$success('aaaaaaaaaa');
			}, 1000);
		},
    reset(name) {
      this.$refs[name].resetFields();
    },
    handle(selections) {
      console.log(selections);
      this.selections = selections;
    },
    handle1(val) {
			console.log(val)
      this.radio = val;
    },
    clear() {
      this.$refs.table.clearSelection();
		},
		expandRow({row, expandedRows}){
			console.log(row);
			console.log(expandedRows);
		}
  }
};
</script>
