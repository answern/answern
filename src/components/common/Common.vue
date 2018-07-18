<template>
  <div>
    <el-container>
      <v-sider></v-sider>
      <el-container>
        <v-header></v-header>
        <v-body></v-body>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import VSider from "./base/VSider";
import VHeader from "./base/VHeader";
import VBody from "./base/VBody";
import VFooter from "./base/VFooter";

export default {
  components: { VSider, VHeader, VBody, VFooter }
};
</script>

<style lang="scss" scoped>
@import '../../styles/mixin.scss';
* {padding: 0px;}
.v-silder{ height:100%;background: $sider-bg;}
</style>
