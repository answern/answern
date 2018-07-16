<template>
  <v-select :options="options" :value="value" @input="$emit('input', $event)" />
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      options: [
        { label: "事故", value: "0" },
        { label: "病故", value: "1" },
        { label: "女性生育", value: "2" },
        { label: "重大疾病", value: "3" },
        { label: "重大疾病", value: "4" }
      ]
    };
  }
};
</script>
