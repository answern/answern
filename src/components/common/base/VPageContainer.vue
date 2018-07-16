<template>
  <div>
    <v-bread-crumb :breadCurmb="breadCurmb"></v-bread-crumb>
    <div class="page-content">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script>
import VBreadCrumb from "./VBreadCrumb";
import breadcurmbConfig from "@/pub/breadcurmb.conf";

export default {
  computed: {
    breadCurmb() {
      let cur = this.$route.path.split("/");
      let breadList = [];
      for (let i = 0; i < cur.length; i++) {
        if (breadcurmbConfig[cur[i]]) {
          breadList.push(breadcurmbConfig[cur[i]]);
        }
      }
      console.log("VPageContainer", breadList);
      return breadList;
    }
  },
  components: { VBreadCrumb }
};
</script>

<style scoped>
.page-content {
  height: auto;
}
</style>
