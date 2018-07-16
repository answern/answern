<template>
  <el-collapse-item :name="name">
    <template slot="title">
      <header class="v-collapse-item-header">
        <slot name="icon-slot">
          <i class="header-icon el-icon-info"></i>
        </slot>
        <span class="title-font">{{title}}</span>
      </header>
    </template>
    <section class="v-collapse-item-body">
      <slot></slot>
    </section>
  </el-collapse-item>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "title"
    },
    name: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin paddingLeft($left) {
  padding-left: $left + px;
}

$paddingLeft: 15;
.title-font {
  font-weight: 600;
  font-size: 25px;
}
.v-collapse-item-header {
  background: yellow;
  padding-left: $paddingLeft + 5 + px;
}
.v-collapse-item-header:hover {
  background: pink;
}
.v-collapse-item-body {
  background: gainsboro;
  @include paddingLeft(15);
}
</style>

