<template>
  <v-switch :value="value" @input="$emit('input', $event)" on="是" off="否" />
</template>

<script>
export default {
  props: {
    value: [Boolean, String, Number]
  }
};
</script>
