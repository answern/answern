const COL_FLEX = 24;
let map = (f, arr) => arr.map(f);

export default {
  name: 'Grid',
  props: {
    col: {
      type: Number,
      default: 4
    },
    gutter: {
      type: Number,
      default: 20
    }
  },
  render(h) {
    let def_slots = this.$slots.default;
    if (!def_slots) throw new Error("slots should not be empty in v-grid tag ");
    let vnodes = def_slots.filter(vnode => !!vnode.tag);
    let {col, gutter } = this;
    
    let colspan = COL_FLEX / col;
    let rowspan = Math.ceil(vnodes.length / col);
    let row_arr = Array(rowspan).fill(null);
    let col_arr = Array(col).fill(null);
    //渲染列
    let renderCol = _row => map((n, index) => {
      return (
        <el-col span={colspan}>
          {vnodes[_row * col + index]}
        </el-col>
      );
    }, col_arr);

    //渲染行
    let renderRow = map((n, index) => {
      return (
        <el-row gutter={gutter}>
          {renderCol(index)}
        </el-row>
      );
    }, row_arr);


    return (
      <div>{renderRow}</div>
    )

  }
}