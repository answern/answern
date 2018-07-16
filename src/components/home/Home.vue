<template>
	<div :style="{background: bgColor}">
		<h1>Home Page</h1>
		<button @click="chan">changeColor</button>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  data() {
    return {
      bgColor: "#fff"
    };
  },
  methods: {
    chan() {
      this.bgColor = "red";
    }
  }
};
</script>
