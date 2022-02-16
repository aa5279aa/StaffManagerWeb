<template>

  <div class="data-item-wrap">
    <div class="title">
      {{ item.name }}
    </div>
    <div class="label-wrap">
      <span>ID:{{ item.hexFileId }}</span>
      <span v-for="(v, i) in this.item.fileTagList" :key="i">{{ v }}</span>
    </div>
    <div class="options-wrap">
      <div @click="goToDetail">数据详情</div>
      <div v-loading.fullscreen="downloadLoading" element-loading-spinner="el-icon-loading" @click="downloadData">
        下载数据
      </div>
      <div v-if="isOptimization" class="update" :class="{ enable: item.updateStatus === 0 }" @click="optimizationData">
        {{ item.updateStatus === 1 ? '使用该数据' : '不支持使用' }}
      </div>
      <div v-if="type" class="update" @click="flashData">
        {{ '刷写该数据' }}
      </div>
    </div>
  </div>
</template>

<script>
import { downloadFile } from '@/utils/utils'

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
    flashData() {
      console.log('flashData')
      this.downloadLoading = true
      // hexId
      this.$apis.onlineData
        .getDownloadUrlByHexId({
          id: this.item.id,
          dataSource: '1',
          userId: this.$store.state.userInfo.userId
        })
        .then(res => {
          if (res.downloadLimit === 0) {
            this.downloadLoading = false
            // 不可下载
            this.$confirm(res.downloadHint || '', '提示', {
              confirmButtonText: '确定',
              showCancelButton: false,
              showClose: false,
              type: 'info'
            }).then(() => {})
            return
          }
          //
          window.exeCall.showFlashPage(res.fileUrl)
          this.downloadLoading = false
        })
        .catch(err => {
          console.log(err)
          this.downloadLoading = false
          this.$message({
            message: '下载失败，请重试！',
            type: 'error'
          })
        })
    },
    optimizationData() {
      if (this.item.updateStatus === 0) {
        console.log('----:不支持优化')
        return
      }
      this.$router.push({
        path: '/parseFile',
        query: {
          id: this.item.id,
          fileUrl: encodeURIComponent(this.item.fileUrl)
        }
      })
    },

    /**
     * 跳转数据详情
     */
    goToDetail() {
      this.$router.push({
        name: 'onlineDataResultTable',
        params: {
          info: JSON.stringify(this.item)
        }
      })
    },
    /**
     * 下载数据逻辑
     */
    downloadData() {
      this.downloadLoading = true
      // hexId
      this.$apis.onlineData
        .getDownloadUrlByHexId({
          id: this.item.id,
          dataSource: '1',
          userId: this.$store.state.userInfo.userId
        })
        .then(res => {
          // console.log('getDownloadUrlByHexId: ', JSON.stringify(res))
          // window.open(res.fileUrl, '_blank')
          if (res.downloadLimit === 0) {
            this.downloadLoading = false
            // 不可下载
            this.$confirm(res.downloadHint || '', '提示', {
              confirmButtonText: '确定',
              showCancelButton: false,
              showClose: false,
              type: 'info'
            }).then(() => {})
            return
          }
          downloadFile(res.fileUrl)
          this.downloadLoading = false
        })
        .catch(err => {
          console.log(err)
          this.downloadLoading = false
          this.$message({
            message: '下载失败，请重试！',
            type: 'error'
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.data-item-wrap {
  min-height: 84px;
  background: #ffffff;
  border-radius: 2px;
  padding: 14px 18px 0;
  border-bottom: 1px solid #eeeeee;
  position: relative;
  .title {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 22px;
    margin-bottom: 6px;
  }
  .label-wrap {
    font-size: 0;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #3382ff;
    line-height: 17px;
    max-width: calc(100% - 280px);
    display: flex;
    flex-wrap: wrap;
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
  .options-wrap {
    position: absolute;
    bottom: 16px;
    right: 18px;
    width: 280px;
    display: flex;
    justify-content: flex-end;
    div {
      width: 90px;
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
    div:first-child {
      margin-right: 10px;
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
    div:last-child {
      color: #fff;
      background-color: #0062ff;
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
