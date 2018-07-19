<template>
  <el-input :value="value" :type="type" :disabled="disabled" :readonly="readonly" v-bind="$attrs"  @input="$emit('input', $event)" :style="{width: width}" />
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
