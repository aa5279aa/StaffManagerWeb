<template>
  <div class="result-wrap">
    <SearchBar v-if="!this.$route.params.config" @submit="submit" @search="search" />
    <div v-loading="totalPage < 0" element-loading-text="正在查找中..." class="content">
      <div v-infinite-scroll="loadMore" infinite-scroll-distance="120">
        <DateItem v-for="(v, i) in hexList" :key="i" :item="v" :type="isFlash" />
        <div v-if="showNoData" class="no-data">
          <img src="../../assets/image/no_data.png" alt="" />
          <p>暂无数据</p>
        </div>
        <div
          v-if="pageNum <= totalPage"
          v-loading="isLoading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          style="height: 60px; width: 100%; padding-bottom: 20px"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/searchBar.vue'
import DateItem from './components/dataItem.vue'
export default {
  components: {
    SearchBar,
    DateItem
  },
  data() {
    return {
      hexList: [],
      pageSize: 13,
      pageNum: 1,
      totalPage: -1,
      isLoading: false,
      params: {},
      showNoData: false,
      isFlash: false
    }
  },
  created() {
    debugger
    this.isFlash = this.$route.query.isFlash == 'true'
    if (this.$route.params.config) {
      this.getHexListByConfig()
    } else {
      this.getHexList()
    }
  },
  methods: {
    init() {
      this.pageNum = 1
      this.totalPage = -1
      this.hexList = []
      this.params = {}
      this.showNoData = false
    },
    /**
     * 高级筛选弹框逻辑
     */
    submit(data) {
      console.log(data)
      this.init()
      this.params = { content: JSON.stringify(data) }
      this.getHexList()
    },
    /**
     * 搜索框逻辑
     */
    search(data) {
      console.log(data)
      this.init()
      if (data === '') {
        this.getHexList()
      } else {
        this.params = { id: data }
        this.getHexListByKeyword()
      }
    },
    /**
     * 筛选 及 默认 搜索接口
     */
    getHexList() {
      if (this.isLoading) return
      this.isLoading = true
      this.$apis.onlineData
        .getHexList({
          treeId: this.$route.params.treeId,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          ...this.params
        })
        .then(res => {
          console.log(res)
          this.totalPage = Math.ceil(res.data.total / this.pageSize)
          this.hexList = this.hexList.concat(res.data.list)
          this.pageNum++
        })
        .catch(err => {
          console.log(err)
          this.showNoDataImg()
        })
        .finally(() => {
          this.isLoading = false
          this.showNoDataImg()
        })
    },
    /**
     * 滚动加载更多
     */
    loadMore() {
      if (this.pageNum > this.totalPage) return
      if (this.$route.params.config) {
        this.getHexListByConfig()
      } else if (this.params.id) {
        this.getHexListByKeyword()
      } else {
        this.getHexList()
      }
    },
    /**
     * 展示缺省图
     */
    showNoDataImg() {
      if (this.hexList.length === 0) {
        this.totalPage = 0
        this.showNoData = true
      }
    },
    /**
     * 搜索关键字专用 搜索接口
     */
    getHexListByKeyword() {
      if (this.isLoading) return
      this.isLoading = true
      this.$apis.onlineData
        .getHexListByKeyword({
          treeId: this.$route.params.treeId,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          ...this.params
        })
        .then(res => {
          console.log(res)
          this.totalPage = Math.ceil(res.data.total / this.pageSize)
          this.hexList = this.hexList.concat(res.data.list)
          this.pageNum++
        })
        .catch(err => {
          console.log(err)
          this.showNoDataImg()
        })
        .finally(() => {
          this.isLoading = false
          this.showNoDataImg()
        })
    },
    /**
     * 根据手动输入配置项 搜索接口
     */
    getHexListByConfig() {
      console.log('执行了这个请求')
      if (this.isLoading) return
      this.isLoading = true
      const configParams = JSON.parse(this.$route.params.config)
      this.$apis.onlineData
        .getHexListByConfig({
          treeId: this.$route.params.treeId,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          selfdoms: configParams.selfdoms,
          configId: configParams.configId,
          ...this.params
        })
        .then(res => {
          console.log(res)
          this.totalPage = Math.ceil(res.data.total / this.pageSize)
          this.hexList = this.hexList.concat(res.data.list)
          this.pageNum++
        })
        .catch(err => {
          console.log(err)
          this.showNoDataImg()
        })
        .finally(() => {
          this.isLoading = false
          this.showNoDataImg()
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.result-wrap {
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    height: 100%;
    padding: 16px 15px;
    position: relative;
    > div {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      overflow: auto;
      .no-data {
        text-align: center;
        color: #999;
        padding-top: 161px;
        text-align: center;
        img {
          width: 270px;
          height: 144px;
        }
        p {
          margin-top: 10px;
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
