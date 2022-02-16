<!-- 弹窗组件---登录绑定授权弹窗-->
<template>
  <!-- title="温馨提示" -->
  <el-dialog
    :modal-append-to-body="false"
    :close-on-click-modal="false"
    :show-close="false"
    :visible="show"
    width="460px"
  >
    <div class="cont">
      <span class="msg">{{ msg }}</span>
      <el-checkbox v-model="checked">我已知晓并同意上述的绑定要求</el-checkbox>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" plain @click="confirmBinding">确认绑定</el-button>
      <el-button @click="closeDialog">取消</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'DialogAuthorization',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    msg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      checked: false
    }
  },
  watch: {},
  methods: {
    closeDialog() {
      this.$emit('update:show', false)
    },
    /**
     * 确认绑定
     */
    confirmBinding() {
      if (!this.checked) {
        this.$message({
          message: '请先同意绑定要求',
          type: 'info'
        })
        return
      }

      this.$emit('sure')
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog__header {
  color: #303133;
  font: 600 20px/28px 'PingFangSC-Medium';
}
::v-deep .el-checkbox__label {
  font-weight: 400;
  color: #333;
}

.cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .msg {
    text-align: left;
    margin-bottom: 10px;
    color: #666;
  }
}
</style>
