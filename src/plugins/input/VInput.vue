<template>
  <el-input :value="value" :style="{width: width}" @input="$emit('input', $event)" :disabled="disabled" :readonly="readonly" />
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    },
    width: {
      type: String,
      default: '100%'
    },
    type: {
      type: String,
      default: "text"
    }
  }
};
</script>
