<template>
	<el-main>
		<v-tab>
			<router-view></router-view>
		</v-tab>
	</el-main>
</template>

<script>
import VTab from "@/components/common/base/VTab";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: { VTab }
};
</script>

<style scoped>
</style>
