<template>
  <div>
    <h4>客户基本资料变更--审核页面</h4>
    {{$route.params.policycode}}
    <input v-model="policycode" />
    <button @click="gobackCollection()">返回审核列表</button>
    <button @click="showDialog()">open</button>
    <v-confirm title="被保险人" :show.sync="show" @confirm="confirm">
      <stp />
    </v-confirm>
    <div class="page"></div>

    <v-collapse>
      <v-collapse-item>
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        <button @click="showDialog()">open</button>
        <input v-model="policycode" />
        <v-confirm title="被保险人" :show.sync="show" @confirm="confirm">
          <stp />
        </v-confirm>
      </v-collapse-item>
      <v-collapse-item>
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        <button @click="showDialog()">open</button>
        <input v-model="policycode" />
        <v-confirm title="被保险人" :show.sync="show" @confirm="confirm">
          <stp />
        </v-confirm>
      </v-collapse-item>
    </v-collapse>
  </div>

</template>




<script>
import SearchLifeAssured from "@/components/claim/common/SearchLifeAssured";

let Stp = {
  template: `<h2>{{title}}</h2>`,
  data() {
    return {
      title: "aaa"
    };
  }
};

export default {
  components: {
    SearchLifeAssured,
    Stp
  },
  activated() {
    console.log("activated");
    this.init();
  },
  created() {
    console.log(this.$route.params.policycode);
  },
  data() {
    return {
      policycode: "",
      show: false,
      aaa: "",
      bbb: ""
    };
  },
  methods: {
    showDialog() {
      this.show = true;
      console.log();
    },
    confirm(vm) {
      console.log(vm);
      this.show = false;
    },
    init() {
      console.log("init");
      this.policycode = "HAAAAAAAAAAAA";
    },
    gobackCollection() {
      this.$router.push({ name: "approvecollection" });
    }
  }
};
</script>

<style lang="scss" scoped>
$red: #f90;
.page {
  background: $red;
  height: 100px;
  width: 100px;
}
</style>
