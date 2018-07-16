<template>
  <el-table-column :property="prop" :label="label" :width="width" :align="align" :show-overflow-tooltip="tip">
  </el-table-column>
</template>

<script>
export default {
  props: {
    prop: {
      type: String
    },
    label: {
      type: String,
      default: "header-title"
    },
    width: {
      type: Number
    },
    align: {
      type: String,
      default: "center"
    },
    type: {
      type: String
    },
    tip: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
.el-table th {
  background: red;
}
</style>