<template>
  <el-switch :value="value" @input="$emit('input', $event)" active-color="#13ce66" inactive-color="#ff4949" :active-text="on" :inactive-text="off">
  </el-switch>
</template>

<script>


export default {
  props: {
    off: {
      type: String,
      default: "否"
    },
    on: {
      type: String,
      default: "是"
    },
    value: [String, Boolean, Number]
  }
};
</script>
