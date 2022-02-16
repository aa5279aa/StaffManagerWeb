<template>
  <div class="result-wrap">
    <div v-loading="isLoading" class="detail-page">
      <div class="left-content">
        <!-- <div class="title">机动车行驶证</div>
        <div class="tip">-通过行驶证，可以匹配到适合该车辆的原车数据。</div>
        <div class="main">
          <img src="../../assets/image/license.png" alt="机动车行驶证" />
          <div>机动车行驶证</div>
        </div> -->
        <div>
          <div v-if="info.tipsInfo && info.tipsInfo.content" v-html="info.tipsInfo.content" class="html-wrap"></div>

          <div
            v-if="info.demoInfoId && info.demoInfoId.content"
            v-html="info.demoInfoId.content"
            class="html-wrap"
          ></div>
        </div>
      </div>

      <div class="right-content">
        <div class="title">手动输入</div>
        <div class="tip">-请输入{{ formatInputTile }}</div>
        <div class="main">
          <div v-for="(v, i) in info.extendVos" :key="i" class="form-item">
            <div class="label">{{ v.name }}</div>
            <input v-model.trim="v.value" type="text" :placeholder="`请输入${v.name}`" />
          </div>

          <div style="margin-top: 32px; text-align: center; width: 564px">
            <div class="submit-btn" @click="search">开始查找数据</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {}
    }
  },
  computed: {
    formatInputTile() {
      const arr = this.info.extendVos || []

      if (arr.length === 0) return

      const formatArr = arr.map(v => {
        return `【${v.name}】`
      })

      return formatArr.join('')
    }
  },
  created() {
    this.getMindConfigByTreeId()
  },
  methods: {
    /**
     * 开始查找数据逻辑
     */
    search() {
      let arr = []

      for (let i = 0; i < this.info.extendVos.length; i++) {
        const val = this.info.extendVos[i]

        if (val.value !== null && val.value !== undefined) {
          arr.push({
            hexKey: val.searchKey,
            hexValue: val.value
          })
        } else {
          return this.$message({
            message: '请先输入所有配置项',
            type: 'warning'
          })
        }
      }

      this.$router.push({
        name: 'onlineDataResult',
        params: {
          treeId: this.$route.params.treeId,
          label: '识别结果',
          config: JSON.stringify({
            selfdoms: arr,
            configId: this.info.configId
          })
        }
      })
    },
    /**
     * 获取默认展示配置
     */
    getMindConfigByTreeId() {
      this.isLoading = true
      this.$apis.onlineData
        .getMindConfigByTreeId({
          treeId: this.$route.params.treeId
        })
        .then(res => {
          console.log(res)
          this.info = res.data
          this.isLoading = false
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.result-wrap {
  padding: 16px 15px;
  .detail-page {
    height: 100%;
    background: #ffffff;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    .title {
      // padding-top: 25px;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 28px;
    }
    .tip {
      padding-top: 8px;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #cccccc;
    }
    .left-content {
      flex: 1;
      position: relative;
      // .main {
      //   margin-top: 132px;
      //   text-align: center;
      //   img {
      //     width: 410px;
      //     height: 286px;
      //   }
      //   div {
      //     font-size: 14px;
      //     font-family: PingFang-SC-Medium, PingFang-SC;
      //     font-weight: 500;
      //     color: #999999;
      //     line-height: 20px;
      //   }
      // }
      > div {
        padding-left: 48px;
        padding-top: 25px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
      }
      .html-wrap {
        & ::v-deep img {
          max-width: 100% !important;
        }
      }
    }
    .right-content {
      flex: 1;
      padding-left: 70px;
      padding-top: 25px;
      .main {
        padding-top: 48px;
        .form-item {
          margin-bottom: 16px;
          &:nth-last-child(1) {
            margin-bottom: 0;
          }
          .label {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
            line-height: 16px;
            margin-bottom: 12px;
          }
          input {
            width: 564px;
            height: 42px;
            background: #ffffff;
            border-radius: 2px;
            border: 1px solid #aeb4be;
            outline: none;
            text-align: center;
          }
        }
        .submit-btn {
          width: 320px;
          height: 42px;
          text-align: center;
          line-height: 42px;
          background: #2870f6;
          border-radius: 21px;
          font-size: 18px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          display: inline-block;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
