<template>
  <v-select :options="options" :value="value" @input="$emit('input', $event)" />
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      options: [
        { label: "申诉案件", value: "1" },
        { label: "特殊案件", value: "2" }
      ]
    };
  }
};
</script>
