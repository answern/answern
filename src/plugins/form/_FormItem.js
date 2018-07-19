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
    },
    pair: {
      type: Boolean,
      default: false
    }
  },
  render(h, context) {
    let { label, prop, pair } = this;
    let vnodes = this.$slots.default;
    if (vnodes && vnodes.length === 1) {
      let binding = vnodes[0].data.model && vnodes[0].data.model.expression || '';
      prop = binding.substring(1 + binding.lastIndexOf('.'));
    }
    let lb = pair ? (<div class='form-item-label'>&nbsp;</div>) : (<div class='form-item-label'>{label}</div>)
    return (
      <el-form-item prop={prop}>
        {lb}
        {vnodes}
      </el-form-item>
    )

  }
}