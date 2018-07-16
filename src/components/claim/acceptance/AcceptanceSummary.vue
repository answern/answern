<template>
  <div>
    <h1>立案小结页面</h1>
    <el-button type="primary" @click="submit">提交</el-button>
    <el-button type="primary" @click="aaa">录入医疗单据</el-button>
    <el-button type="primary" @click="bbb">返回任务列表</el-button>
  </div>

</template>

<script>
export default {
  methods: {
    submit() {
      let loading = this.$$loading();
      
      
      setTimeout(() => {
        loading.close();
        this.$$success('立案成功');
        this.$router.push({ name: "mytask" });
      }, 1000);
    },
    aaa() {
      console.log("next");
      this.$router.push({ name: "acceptancePolicy", params: "1242341354435" });
      this.$emit("step", "policy");
    },
    bbb() {
      this.$router.push({ name: "mytask" });
    }
  },
  inactivated() {
    console.log("sd");
  }
};
</script>