<template>
  <div class="data-item-wrap">
    <div class="left-options">
      <span>编号：{{ item.accountId }}</span>
      <div class="label-wrap">
        <span>工号:{{ item.jobId }}</span>
        <span>姓名:{{ item.account }}</span>
      </div>
    </div>
    <div class="right-options">
      <div @click="goToEdit">编辑</div>
      <div @click="goToSelect">查看</div>
      <div @click="clickDelete">删除</div>
      <div @click="goToQr">生成二维码</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    type: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  data() {
    return {
      isOptimization: this.$store.state.isOptimization,
      downloadLoading: false
    }
  },
  methods: {
    /**
     * 跳转数据详情
     */
    goToEdit() {
      this.$router.push({
        name: 'edit',
        params: this.item
      })
    },

    clickDelete() {
      //通知外部
      this.$emit('accountId', this.item.accountId)
    },

    goToSelect() {
      this.$router.push({
        name: 'select',
        params: this.item
      })
    },

    goToQr() {
      var myUrl = this.VUE_URL + 'select?accountId=' + this.item.accountId
      console.log('myUrl:' + myUrl)
      var url = '	https://api.pwmqr.com/qrcode/create/?url=' + encodeURIComponent(myUrl)
      console.log(url)
      window.open(url, '_blank')
      // this.$router.push({
      //   name: 'showqr',
      //   params: {
      //     info: JSON.stringify(this.item)
      //   }
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.data-item-wrap {
  background: #ffffff;
  border-radius: 2px;
  padding: 14px 18px 0;
  border-bottom: 1px solid #eeeeee;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .left-options {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 22px;
    margin-bottom: 6px;
    .label-wrap {
      font-size: 0;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #3382ff;
      line-height: 17px;
      display: flex;
      margin-bottom: 6px;
      span {
        font-size: 12px;
        padding: 0 5px;
        border-radius: 3px;
        border: 1px solid #3382ff;
        margin-right: 9px;
        margin-top: 6px;
      }
    }
  }

  .right-options {
    width: 40%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    div {
      margin-right: 10px;
      width: 80px;
      height: 24px;
      line-height: 22px;
      float: left;
      text-align: center;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      border-radius: 2px;
      border: 1px solid #0062ff;
      cursor: pointer;
      color: #0062ff;
    }
    .update {
      margin-left: 10px;
      background-color: #0062ff;
      color: #fff;
    }
    .enable {
      background-color: #0062ff;
      color: #fff;
      opacity: 0.4;
    }
  }
}
.data-item-wrap:hover {
  background-color: #d7d9dc;
}
.data-item-wrap:active {
  background-color: #c0c1c4;
}
</style>
