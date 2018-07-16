<template>
  <v-input type="textarea" :rows="2"/>
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
      type: Number
    }
  }
};
</script>
