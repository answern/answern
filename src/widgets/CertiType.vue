<template>
  <v-select :options="options" :value="value" @input="$emit('input', $event)" />
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      options: [
        { label: "无", value: "-1" },
        { label: "身份证", value: "0" },
        { label: "军人证", value: "1" }
      ]
    };
  }
};
</script>