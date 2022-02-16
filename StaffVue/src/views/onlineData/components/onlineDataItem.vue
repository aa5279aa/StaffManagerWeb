<template>
  <div class="online-data-item" @click="linkTo">
    <span>{{ index | handleNumber }}</span>
    {{ showType == 'ecu' ? item.treeName : item.name }}
    <img src="../../../assets/image/right-arrow.png" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number
    },
    showType: {
      type: String,
      default: 'ecu'
    },
    item: {
      type: Object,
      required: true
    }
  },
  filters: {
    handleNumber(val) {
      return val <= 9 ? '0' + val : val
    }
  },
  components: {},
  methods: {
    /**
     * 点击事件逻辑处理
     */
    linkTo() {
      console.log('linkTo')
      if (this.showType == 'ecu') {
        this.actionEcu()
        return
      }
      if (this.showType == 'path') {
        this.actionPath()
        return
      }
    },
    actionPath() {
      console.log('actionPath')
      this.$emit('clickItem', this.item)
    },
    actionEcu() {
      if (this.item.haveConfigInfo) {
        // 跳转到 行驶证配置信息页面
        this.$router.push({
          name: 'onlineDataResultInput',
          params: {
            treeId: this.item.id,
            label: this.item.treeName
          }
        })
      } else if (!this.item.isLeaf) {
        // 以子节点ID刷新当前页面
        this.$router.push({
          // name: this.$route.name.indexOf('Index1') > 0 ? 'onlineDataIndex' : 'onlineDataIndex1',
          name: 'onlineDataIndex',
          params: {
            treeId: this.item.id,
            label: this.item.treeName
          }
        })
      } else {
        // 进入数据结果页面
        this.$router.push({
          name: 'onlineDataResult',
          params: {
            treeId: this.item.id,
            label: this.item.treeName
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.online-data-item {
  user-select: none;
  cursor: pointer;
  height: 60px;
  line-height: 60px;
  padding-left: 48px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  span {
    position: absolute;
    left: 23px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #0062ff;
  }
  img {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
}
.online-data-item:hover {
  background-color: #f5f5f5;
}
.online-data-item:active {
  background-color: #e8e8e8;
}
</style>
