<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :key="index" v-for="(item ,index) in breadCurmb">
      {{item}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {
    breadCurmb: Array,
    required: true
  }
};
</script>

