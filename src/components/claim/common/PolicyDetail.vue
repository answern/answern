<template>
  <div>
    <el-popover trigger="hover" placement="top" v-for="poc in binding.row.policyCode.split(',')" v-bind:key="poc">
      <p>保单号: {{ poc }}</p>
      <p>投保人: {{ binding.row.name }}</p>
      <p>生效时间:2018-01-01</p>
      <p>结束时间:2019-12-31</p>
      <el-tag slot="reference" size="medium" style="margin:5px">{{poc}}</el-tag>
    </el-popover>
  </div>

</template>

<script>
export default {
  props: ["binding"]
};
</script>
