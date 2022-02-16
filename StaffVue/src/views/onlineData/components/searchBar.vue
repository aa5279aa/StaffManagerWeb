<template>
  <div class="search-bar-wrap">
    <div class="filter-wrap" @click="filterClick">
      <img src="../../../assets/image/filter.png" alt="" />
      高级筛选
    </div>

    <div class="filter-labels-wrap">
      <span v-for="(v, i) in selectedTags" :key="i" class="label">
        {{ v.split('/')[1] }}
        <img src="../../../assets/image/close.png" alt="" @click="clearTag(v, true)" />
      </span>
    </div>

    <div class="search-input-wrap">
      <div class="input-content">
        <img src="../../../assets/image/search.png" alt="" />
        <input v-model.trim="searchContent" type="text" placeholder="按内容搜索" />
      </div>
      <div class="input-btn" @click="search">搜索</div>
    </div>

    <!-- 高级筛选弹窗 -->
    <el-dialog title="高级筛选" :visible.sync="filterDialogVisible" width="70%" style="border-radius: 20px">
      <div class="main">
        <div class="content">
          <div v-for="(v, i) in options" :key="i" class="item">
            <div class="title">请选择{{ v.itemKey }}：</div>
            <div class="tags">
              <div
                v-for="(val, i) in v.searchItems"
                :key="i"
                :class="['tag', isActive(`${v.itemKey}/${val}`) ? 'active' : '']"
                @click="toggleSelect(`${v.itemKey}/${val}`)"
              >
                {{ val }}
              </div>
            </div>
          </div>
          <div v-if="noData" class="no-data">
            <img src="../../../assets/image/no_data.png" alt="" />
          </div>
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button type="info" plain @click="filterDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    noFilter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      filterDialogVisible: false,
      selectedTags: [],
      tempSelectedTags: [],
      options: [],
      searchContent: '',
      noData: false
    }
  },
  watch: {
    filterDialogVisible(val) {
      if (val) {
        this.tempSelectedTags = [...this.selectedTags]
      } else {
        this.tempSelectedTags = []
      }
    }
  },
  created() {
    if (this.$route.params.config || this.noFilter) return
    this.getOptionsList()
  },
  methods: {
    /**
     * 高级筛选点击逻辑
     */
    filterClick() {
      if (this.$route.params.config || this.noFilter) {
        return this.$message({
          message: '该功能暂不支持使用',
          type: 'warning'
        })
      } else {
        this.filterDialogVisible = true
      }
    },
    /**
     * 搜索框输入逻辑
     */
    search() {
      this.selectedTags = []
      this.$emit('search', this.searchContent)
    },
    /**
     * 获取 高级筛选 筛选项
     */
    getOptionsList() {
      this.$apis.onlineData
        .getOptionsList({
          id: this.$route.params.treeId
        })
        .then(res => {
          // console.log(res)
          this.options = res.data
          this.noData = this.options.length === 0
        })
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * 提交 高级筛选 筛选内容
     */
    submit() {
      if (this.noData) return (this.filterDialogVisible = false)
      this.searchContent = ''
      this.selectedTags = [...this.tempSelectedTags]
      this.filterDialogVisible = false
      this.formatData()
    },
    formatData() {
      const tempArr = []
      this.selectedTags.forEach(v => {
        const infoArr = v.split('/')
        const index = tempArr.findIndex(v => v.itemKey === infoArr[0])
        if (index > -1) {
          tempArr[index].searchItems
            ? tempArr[index].searchItems.push(infoArr[1])
            : (tempArr[index].searchItems = [infoArr[1]])
        } else {
          tempArr.push({
            itemKey: infoArr[0],
            searchItems: [infoArr[1]]
          })
        }
      })
      // console.log(tempArr)
      this.$emit('submit', tempArr)
    },
    /**
     * 移除 已选中的tag
     */
    clearTag(item, isRefresh) {
      let index
      if (isRefresh) {
        index = this.selectedTags.findIndex(v => v === item)
        this.selectedTags.splice(index, 1)
        this.formatData()
      } else {
        index = this.tempSelectedTags.findIndex(v => v === item)
        this.tempSelectedTags.splice(index, 1)
      }
    },
    /**
     * 当前 tag 是否已经激活
     */
    isActive(val) {
      return this.tempSelectedTags.some(v => {
        return v === val
      })
    },
    /**
     * 切换点击 筛选项
     */
    toggleSelect(item) {
      if (this.isActive(item)) {
        console.log(1)
        this.clearTag(item)
      } else {
        console.log(2)
        this.tempSelectedTags.push(item)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar-wrap {
  height: 49px;
  background-color: #fff;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  .filter-wrap {
    width: 92px;
    line-height: 32px;
    height: 32px;
    background: #6b7588;
    border-radius: 3px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    cursor: pointer;
    position: relative;
    text-indent: 28px;
    img {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 50%;
      left: 6px;
      transform: translateY(-50%);
    }
  }
  .filter-labels-wrap {
    flex: 1;
    // height: 32px;
    height: 38px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-left: 11px;
    font-size: 0;
    padding-top: 1px;
    white-space: nowrap;
    position: relative;
    z-index: 1;
    &::-webkit-scrollbar {
      height: 4px;
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 8px;
    }
    .label {
      user-select: none;
      display: inline-block;
      box-sizing: border-box;
      height: 30px;
      line-height: 30px;
      padding-left: 12px;
      padding-right: 35px;
      background: #f1f2f5;
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      margin-right: 16px;
      position: relative;
      img {
        cursor: pointer;
        width: 16px;
        height: 15px;
        position: absolute;
        top: 50%;
        right: 7px;
        transform: translateY(-50%);
      }
    }
  }
  .search-input-wrap {
    width: 305px;
    height: 32px;
    background: #ffffff;
    border-radius: 3px;
    border: 1px solid #e6e6e6;
    display: flex;
    flex-direction: row;
    .input-content {
      flex: 1;
      padding-left: 34px;
      position: relative;
      img {
        width: 18px;
        height: 18px;
        position: absolute;
        top: 50%;
        left: 8px;
        transform: translateY(-50%);
      }
      input {
        outline: none;
        border: none;
        line-height: 30px;
        padding: 0;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333;
      }
    }
    .input-btn {
      user-select: none;
      width: 52px;
      height: 30px;
      background: #6b7588;
      border-radius: 3px;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      cursor: pointer;
    }
  }
  & ::v-deep .el-dialog {
    border-radius: 12px;
    .el-dialog__header {
      border-bottom: 1px solid #e8e8e8;
      padding: 18px 24px 8px;
      .el-dialog__title {
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
      }
    }
    .el-dialog__body {
      padding: 20px 24px;
      .content {
        .item {
          margin-bottom: 8px;
          &:nth-last-child(1) {
            margin-bottom: 0;
          }
          .title {
            position: relative;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #3d4145;
            line-height: 18px;
            text-indent: 12px;
            margin-bottom: 17px;
            &::before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              width: 4px;
              height: 18px;
              background-color: #3382ff;
            }
          }
          .tags {
            overflow: hidden;
            .tag {
              margin-bottom: 12px;
              user-select: none;
              float: left;
              // width: 91px;
              padding: 0 26px;
              height: 36px;
              line-height: 36px;
              text-align: center;
              background: #ffffff;
              border-radius: 2px;
              border: 1px solid #c9ced4;
              margin-right: 16px;
              cursor: pointer;
              position: relative;
              &.active {
                border: 1px solid #0062ff;
                &::after {
                  content: '';
                  width: 16px;
                  height: 16px;
                  position: absolute;
                  right: -1px;
                  bottom: -1px;
                  background-image: url('../../../assets/image/corner.png');
                  background-size: 100%;
                }
              }
              &:hover {
                background: #d7d9dc;
                border-radius: 3px;
                border: 1px solid #d7dbe0;
              }
              &:active {
                background: #c0c1c4;
                border-radius: 3px;
                border: 1px solid #d7dbe0;
              }
            }
          }
        }
        .no-data {
          text-align: center;
          padding: 50px 0 50px;
          img {
            width: 270px;
            height: 144px;
          }
        }
      }
    }
    .el-dialog__footer {
      border-top: 1px solid #e8e8e8;
      padding: 16px 0;
      text-align: center;
      .el-button {
        width: 92px;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 3px;
        & + .el-button {
          margin-left: 48px;
        }
      }
    }
  }
}
</style>
