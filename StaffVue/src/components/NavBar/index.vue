<template>
  <div class="app-wrap">
    <div class="nav-bar">
      <el-button class="back-btn" type="primary" size="mini" icon="el-icon-arrow-left" @click="goBack">返回</el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="(item, index) in navList"
          :key="index"
          :to="{
            path: item.path,
            query: item.query
          }"
          ><span :class="index == 0 ? 'home-font' : 'path-font'">{{ item.label }}</span></el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <router-view style="flex: 1" />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      navList: []
    }
  },
  watch: {
    $route(val) {
      // this.getBreadcrumb()
      const index = this.navList.findIndex(v => {
        return v.path === val.path
      })

      if (index > 0) {
        // navList 中已存在该导航路径，则移除后续路径
        this.navList.splice(index + 1)
      } else {
        this.navList.push({
          path: val.path,
          label: val.params.label || val.meta.title,
          query: val.query
        })
      }
    }
  },
  computed: {},
  created() {
    this.getBreadcrumb()
  },
  mounted() {},
  methods: {
    getBreadcrumb() {
      const matched = this.$route.matched

      this.navList = matched
        .filter(item => item.meta && item.meta.title)
        .map(item => {
          // if (item.path.indexOf('onlineDataIndex') && item.path.indexOf(':treeId?') > 0) {
          //   // 处理在线数据下 默认的treeId 为 0 的情况
          //   item.path = item.path.replace(':treeId?', 0)
          // }
          if (item.path === '/online') {
            // 处理 路由文件中 /online 被重定向到 /online/onlineDataIndex/0 的特殊情况
            item.path = '/online/onlineDataIndex/0'
          }
          return { path: item.path, label: item.meta.title, query: item.query }
        })

      this.navList.unshift({ path: '/', label: '首页' })

      // console.log(33, matched)
    },
    goBack() {
      // this.$router.back()
      let last_value
      do {
        last_value = this.navList[this.navList.length - 1]
        if (last_value.path == '/generateData') {
          this.navList.pop()
          last_value = this.navList[this.navList.length - 1]
        }

        this.navList.pop()
        last_value = this.navList[this.navList.length - 1]
      } while (last_value.label == undefined || last_value.label.length == 0)

      this.$router.replace({
        path: last_value.path,
        query: last_value.query
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-wrap {
  display: flex;
  flex-direction: column;
}
.nav-bar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  background: #ffffff;
  ::v-deep .el-button--mini {
    padding-left: 7px;
    font-size: 14px;
    font-weight: 400;
    font-family: PingFangSC-Regular, PingFang SC;
  }
  .back-btn {
    box-sizing: border-box;
    width: 64px;
    height: 28px;
    background-color: #0062ff;
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home-font {
    color: #999999;
  }
  .path-font {
    color: #666666;
  }
}
</style>
