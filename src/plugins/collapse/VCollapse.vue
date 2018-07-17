<template>
  <el-collapse :value="value" :accordion="accordion" @input="$emit('input', $event)" @change="$emit('change', $event)">
    <slot></slot>
  </el-collapse>
</template>

<script>
export default {
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    value: {
      type: this.accordion ? String : Array,
      default: () => {
        return this.accordion ? "" : [];
      }
    }
  }
};
</script>
<style scoped>
.el-collapse{
  border:0;
}
</style>