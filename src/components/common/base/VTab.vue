<template>
  <div class="v-tabs">
    <el-tabs v-if="openedTabList.length" v-model="activeTab" type="border-card" closable @tab-click="changeTab" @tab-remove="removeTab">
      <el-tab-pane v-for="tab in openedTabList" :key="tab.tabname" :label="tab.title" :name="tab.tabname">

      </el-tab-pane>
      <slot></slot>
    </el-tabs>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  watch: {
    $route(to, from) {
      let { title, tabname } = to.meta;

      let pro = { name: to.name, params: to.params, query: to.query };
      let context = Object.assign({}, pro);
      this.findModule({ title, tabname, context: context });
    }
  },
  created() {
    let { title, tabname } = this.$route.meta;
    let pro = {
      name: this.$route.name,
      params: this.$route.params,
      query: this.$route.query
    };
    let context = Object.assign({}, pro);
    this.findModule({ title, tabname, context: context });
  },
  data() {
    return {};
  },
  computed: {
    activeTab: {
      get() {
        return this.$store.state.activeTab;
      },
      set() {}
    },
    ...mapState(["openedTabList", "activeContext"])
  },

  methods: {
    removeTab(tabname) {
      this.$store.commit("removeTab", { tabname });
      this.$router.push({ ...this.activeContext });
    },
    changeTab(tab) {
      let _tab = this.openedTabList.filter(opener => {
        return opener.tabname === tab.$props.name;
      });
      let context = _tab[0] && _tab[0].context;
      this.$router.push({ ...context });
    },
    findModule(payload) {
      this.$store.commit("findModule", payload);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../styles/mixin.scss";
.v-tabs {
  .el-tabs,
  .el-tabs--border-card {
    background:none;
    border-bottom: 0;
    box-shadow: none;
  }
  .el-tabs--border-card {
    border-top: 1px solid #ebeef5;
  }
}
</style>

