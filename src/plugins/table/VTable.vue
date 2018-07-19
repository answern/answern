<template>
  <div class="v-table">
    <el-table ref="__reftable__" :row-class-name="setRowCls" :header-row-class-name="setHeaderCls" :cell-class-name="setColumnCls" :highlight-current-row="true" @row-click="clickRow" :data="data" v-loading="loading" :border="border" style="width: 100%" @selection-change="handleSelectionChange" @expand-change="expandRow">
      <slot name="expand"></slot>
      <el-table-column v-if="type === colType.check" type="selection" :align="align" :width="width" />
      <el-table-column v-if="type === colType.radio" label="选择" :align="align" :width="width">
        <template slot-scope="scope">
          <el-radio v-hideLab v-model="choice" :label="scope.$index" @change.native="getCurrentRow(scope.row)"></el-radio>
        </template>
      </el-table-column>
      <slot></slot>
    </el-table>
  </div>
</template>

<script>
let rowKey = 0;
export default {
  directives: {
    hideLab(el) {
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
    },
    toggle: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      choice: "",
      align: "center",
      width: "60",
      colType: {
        check: "check",
        radio: "radio"
      },
      expandedRows: [],
      expanded: false
    };
  },
  methods: {
    setColumnCls({ row, column, rowIndex, columnIndex }) {
      let { type, colType } = this;
      return "";
    },
    setRowKey(row) {
      return "" + rowKey++;
    },
    setHeaderCls(val) {
      return "v-header-cls";
    },
    setRowCls({ row, rowIndex }) {
      return "";
    },
    expandRow(row, expandedRows) {
      this.$emit("expand-change", { row, expandedRows });
      if (!this.expanded) this.expandedRows.push(row);
    },
    clickRow(row, event, column) {
      if(!this.toggle) return;
      this.expanded = this.expandedRows.indexOf(row) !== -1;
      if (this.expanded) {
        this.expandedRows = this.expandedRows.filter(r => r != row);
      }
      this.$refs["__reftable__"].toggleRowExpansion(row, !this.expanded);
      //this.$emit("expand-change", { row });
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

<style>
.el-table .v-header-cls th {
  background: oldlace;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
}
.el-table .v-column-cls {
  background: #ffffff;
  border-right: none;
}
</style>

