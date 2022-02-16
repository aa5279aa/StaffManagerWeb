<template>
  <div class="result-wrap">
    <div>
      <el-table :data="tableData" border style="width: 100%" :header-cell-style="{ background: '#F8F8F8' }">
        <el-table-column prop="dataId" label="数据ID"> </el-table-column>
        <el-table-column prop="value" label="原始值"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.formatData()
  },
  methods: {
    /**
     * 转换数据格式
     */
    formatData() {
      const dataList = []
      JSON.parse(this.$route.params.info).moreInfoList.forEach(val => {
        const obj = {}
        const itemArr = val.split(':')
        obj.dataId = itemArr[0].trim()
        obj.value = itemArr[1].trim()
        dataList.push(obj)
      })
      this.tableData = dataList
    },

    tableRowClassName({ rowIndex }) {
      console.log(rowIndex)
      if (rowIndex === 0) {
        return 'head-row'
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
.result-wrap {
  position: relative;
  > div {
    padding: 16px 15px;
    height: 100%;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
</style>
