<template>
  <div class="v-table">
    <el-table ref="__reftable__" row-class-name="row-class" :data="data" v-loading="loading" :border="border" style="width: 100%" @selection-change="handleSelectionChange" @expand-change="expandRow">
      <slot name="expand"></slot>
      <el-table-column v-if="type === `check`" type="selection" :align="align" :width="width" />
      <el-table-column v-if="type === `radio`" label="选择" :align="align" :width="width">
        <template slot-scope="scope">
          <el-radio v-labelHide v-model="choice" :label="scope.$index" @change.native="getCurrentRow(scope.row)"></el-radio>
        </template>
      </el-table-column>
      <slot></slot>
    </el-table>
  </div>
</template>

<script>
export default {
  directives: {
    labelHide(el) {
      el.lastChild.style.display = "none";
    }
  },
  props: {
    data: {
      type: Array
    },
    loading: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    type: {
      type: String
    }
  },
  data() {
    return {
      choice: "",
      align: "center",
      width: "60"
    };
  },
  methods: {
    expandRow(row, expandedRows) {
      this.$emit("expand-change", { row, expandedRows });
    },
    handleSelectionChange(val) {
      this.$emit("check-change", val);
    },
    getCurrentRow(row) {
      this.$emit("radio-change", row);
    },
    clearSelection() {
      if (this.type === "check") {
        this.$refs["__reftable__"].clearSelection();
      } else {
        this.choice = "";
        this.$emit("radio-change", null);
      }
    }
  }
};
</script>


