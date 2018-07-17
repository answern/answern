import './_FormItem.scss';

export default {
  name: 'FormItem',
  props: {
    label: {
      type: String,
      default: 'Field'
    },
    prop: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    let { label, prop } = this;
    let vnodes = this.$slots.default;
    if (vnodes && vnodes.length === 1) {
      let binding = vnodes[0].data.model && vnodes[0].data.model.expression || '';
      prop = binding.substring(1 + binding.lastIndexOf('.'));
    }
    return (
      <el-form-item prop={prop}>
        <div class='form-item-label'>{label}</div>
        {vnodes}
      </el-form-item>
    )

  }
}