<template>
  <el-select :value="value" @input="$emit('input', $event)" :placeholder="placeholder" :style="{width: width}">
    <el-option :label="opt.label" :value="opt.value" v-for="opt in options" :key="opt.value"></el-option>
  </el-select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "情选择"
    },
    width:{
      type: String,
      default: '100%'
    }
  }
};
</script>
