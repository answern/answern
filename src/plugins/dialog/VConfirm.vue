<!--
    use html like this

    <div slot="dialogBody">
      <input v-model="aaa"/>
      <input v-model="bbb"/>
    </div>
    
    or

    <search-life-assured slot="dialogBody"/>
-->
<template>
  <el-dialog @open="onOpen" :append-to-body="true" :title="title" :show="show" :visible.sync="dialogVisible" :width="`${width}%`" @close="onClose" :before-close="onBeforeClose">
    <div class="v-dialog-body">
      <slot></slot>
      <!--
      <slot name="dialogBody"></slot>
      -->
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="onCancel()">取 消</el-button>
      <el-button type="primary" @click="onConfirm()">确 定</el-button>
    </div>
  </el-dialog>

</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 80
    },
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "dialog"
    }
  },
  watch: {
    show() {
      return (this.dialogVisible = this.show);
    }
  },
  data() {
    return {
      dialogVisible: this.show
    };
  },
  mounted() {
    let componentInstance = null;
    let { dialogBody } = this.$slots;
    let _dialogBodyLen = dialogBody && dialogBody.length;
    let _defaultLen = this.$slots.default && this.$slots.default.length;
    if (_dialogBodyLen === 1 || _defaultLen === 1) {
      componentInstance = _dialogBodyLen
        ? dialogBody[0].componentInstance || dialogBody[0].context
        : this.$slots.default[0].componentInstance ||
          this.$slots.default[0].context;
    } else {
      throw new Error(
        "can not regnize the slot, a single root tag should be required"
      );
    }
    this.soltScope = componentInstance;
  },
  methods: {
    onCancel() {
      console.log("this is cancel");
      this.$emit("cancel", this.soltScope);
      this.onClose();
    },
    onOpen() {
      console.log("dialog open");
    },
    onConfirm() {
      console.log("this is confirm", this.soltScope);
      this.$emit("confirm");
    },
    onBeforeClose() {
      console.log("this is beforeClose");
      this.onClose();
    },
    onClose() {
      this.$emit("update:show", false);
    }
  }
};
</script>