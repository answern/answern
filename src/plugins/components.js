import VCollapseItem from './collapse/VCollapseItem.vue';
import VCollapse from './collapse/VCollapse.vue';
import VTextarea from './input/VTextarea.vue';
import VConfirm from './dialog/VConfirm.vue';
import VSelect from './select/VSelect.vue';
import VTable from './table/VTable.vue';
import VTableColumn from './table/VTableColumn.vue';
import VInput from './input/VInput.vue';
import VGrid from './layout/_Grid';
import VFormItem from './form/_FormItem';
import VSwitch from './switch/VSwitch';
import VButtonGroup from './layout/VButtonGroup';
import VDatePicker from './picker/VDatePicker';

export default (Vue) => {
  Vue.component("VCollapse", VCollapse);
  Vue.component("VCollapseItem", VCollapseItem);
  Vue.component("VConfirm", VConfirm);
  Vue.component("VInput", VInput);
  Vue.component("VTextarea", VTextarea);
  Vue.component("VSelect", VSelect);
  Vue.component("VGrid", VGrid);
  Vue.component("VTable", VTable);
  Vue.component("VTableColumn", VTableColumn);
  Vue.component("VFormItem", VFormItem);
  Vue.component("VSwitch", VSwitch);
  Vue.component("VButtonGroup", VButtonGroup);
  Vue.component("VDatePicker", VDatePicker);
}

