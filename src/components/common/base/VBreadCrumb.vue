<template>
  <div class="v-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :key="index" v-for="(item ,index) in breadCurmb">
        {{item}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    breadCurmb: Array,
    required: true
  }
};
</script>
<style scoped>
.v-breadcrumb {
  padding: 5px 0;
  margin-bottom: 5px;
}
</style>
