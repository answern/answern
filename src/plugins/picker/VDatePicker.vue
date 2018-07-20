<template>
  <el-date-picker :value="value" @input="input" :type="type" :placeholder="placeholder" :value-format="valformat"  :style="{width: width}" />
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number]
    },
    type: {
      type: String,
      default: "date"
    },
    placeholder: {
      type: String,
      default: "选择日期"
    },
    valformat: {
      type: String,
      default: "timestamp"
    },
     width: {
      type: String,
      default: '100%'
    },
  },
  methods: {
    input($event) {
      this.$emit("input", $event);
    }
  }
};
</script>
