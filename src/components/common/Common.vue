<template>
  <div>
    <el-container>
      <v-sider></v-sider>
      <el-container>
        <v-header></v-header>
        <v-body></v-body>
        <el-footer>Footer</el-footer>
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

<style scoped>
* {
  padding: 0px;
}
.el-footer {
  background: yellow;
}
</style>
