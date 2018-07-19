<template>
  <v-input :value="value" :resize="resize" :rows="rows" v-bind="$attrs" :type="'textarea'" @input="$emit('input', $event)" />
</template>

<script>
import Vue from "vue";

export default {
  props: {
    value: {
      type: String
    },
    resize: {
      type: String,
      default: "none"
    },
    rows: {
      type: Number,
      default: 3
    }
  }
};
</script>
