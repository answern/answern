<template>
  <v-select :options="options" :value="value" @input="$emit('input', $event)" />
</template>

<script>
export default {
  props: ["value"],
  mounted(){
    
  },
  data() {
    return {
      options: [{ label: "事故", value: "0" }, { label: "病故", value: "1" }]
    };
  }
};
</script>
