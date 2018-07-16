<template>
  <div>
    <el-steps :active="active" align-center finish-status="finish">
      <el-step ref="step" :title="acc.title" v-for="(acc, index) in acceptance" :key="acc.name">
        <i slot="icon" :step="acc.name">{{index+1}}</i>
      </el-step>
    </el-steps>
    <div>
      <keep-alive>
        <router-view @step="step" v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view @step="step" v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script>
import acceptance from "@/router/claim/acceptance/acceptance";
let title = ["案件录入", "立案保单", "立案小结"];

export default {
  watch: {
    $route(to, from) {
      if(from.name.match(/acceptance/g)){

      }
      this.init(to.name);
    }
  },
  created() {
    this.init(this.$route.name);
  },
  mounted() {
    let vm = this;
    let steps = vm.$refs.step;
    let names = vm.acceptance.map(i => i.name);
    steps.forEach((step, index) => {
      step.$el.addEventListener(
        "click",
        e => {
          e.stopPropagation();
          let caseNo = vm.$route.params.caseNo;
          let name = names[index];
          this.$router.push({ name, params: { caseNo } });
        },
        false
      );
    });
  },
  data() {
    return {
      vm: this,
      acceptance: acceptance.children.map((i, n) => ({
        name: i.name,
        title: title[n]
      })),
      active: 0
    };
  },
  methods: {
    init(name) {
      if (name.match(/acceptance/g)) {
        this.active = this.acceptance.map(i => i.name).indexOf(name);
      }
    },
    step(msg) {
      console.log(msg);
    }
  },
  deactivated() {
    console.log("deactivated");
  }
};
</script>

<style lang="scss" scoped>
.el-steps i {
  cursor: pointer;
}
</style>
