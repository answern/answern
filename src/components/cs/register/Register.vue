<template>
	<div>
		<h4>register 2</h4>
		{{wd}}
		<button @click="show">bb</button>
	</div>

</template>

<script>
export default {
  data() {
    return {
      wd: "sss"
    };
  },
  created() {
    console.log(this.$route);
  },
  methods: {
    show() {
      this.wd = "bb";
    }
  }
};
</script>
