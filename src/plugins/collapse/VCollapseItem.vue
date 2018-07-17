<template>
  <div class="v-collapse">
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
  </div>
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
@import "../../styles/mixin.scss";

@mixin paddingLeft($left) {
  padding-left: $left + px;
}
$paddingLeft: 20;
.title-font {
  font-weight: 600;
  font-size: 14px;
}
.v-collapse {
  padding-bottom: 10px;
}
.v-collapse-item-header {
  height: 35px;
  line-height: 35px;
  background: #fafafa;
  box-sizing: border-box;
  padding-left: $paddingLeft + px;
  border-bottom: 1px solid #ebeef5;
}
.v-collapse .v-collapse-item-body {
  padding: 10px 20px;
  margin-bottom: -25px;
  background: #ffffff;;
}
.v-collapse .el-collapse-item{
  border: 1px solid #ebeef5;
  padding-bottom:10px;
}

</style>

