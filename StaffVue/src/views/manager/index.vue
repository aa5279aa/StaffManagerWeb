<template>
  <div class="container">
    <!-- 左侧 -->
    <div class="left-menu">
      <button>员工列表</button>
      <button>管理员列表</button>
    </div>

    <!-- 右侧 -->
    <div class="right-content">

      <div class="action-content">
        <button>新增</button>
        <button>无</button>
      </div>
      

      <div>
        <OnlineDataItem
          v-for="(v, i) in pathList"
          :key="i"
          :index="i + 1"
          :item="v"
          :showType="'path'"
          v-on:clickItem="handleClickItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import OnlineDataItem from '../onlineData/components/onlineDataItem.vue'
export default {
  components: {
    // OnlineDataItem
  },
  data() {
    return {
      select: 0,
      pathList: [],
      selectItem: {},
      showLoading: false,
      fileMap: new Map([
        ['1', 'eol'],
        ['2', 'hex'],
        ['3', 'bin'],
        ['4', 's19']
      ])
    }
  },
  computed: {},
  created() {
    this.requestMenu()
  },
  mounted() {},
  watch: {
    $route() {
      this.requestMenu()
    }
  },
  methods: {
    handleClickItem(item) {
      console.log('handleClickItem:' + JSON.stringify(item))
      this.selectItem = item
      if (item.identifyFileType == undefined || item.identifyFileType == '') {
        this.$router.push({
          name: 'PathIndex',
          params: {
            treeId: item.id,
            label: item.name,
            parse: this.$route.params.parse
          }
        })
      } else {
        //弹出文件选择的选择框
        this.$refs.refFile.dispatchEvent(new MouseEvent('click'))
      }
    },
    fileLoad() {
      //获取读取的文件File对象 下面两种方法实现效果一样
      //方法一:原生html获取
      // const selectedFile = document.getElementById('files').files[0];
      //方法二:Vue实现
      let filters = this.selectItem.filterFileFormat.split(',')
      const selectedFile = this.$refs.refFile.files[0]
      var name = selectedFile.name //选中文件的文件名
      var size = selectedFile.size //选中文件的大小
      this.$refs.refFile.value = null
      let that = this

      var suffix = name.substring(name.lastIndexOf('.') + 1).toLowerCase()
      // if (suffix != 'bin' && suffix != 'hex' && suffix != 'eol') {
      //   alert('不支持的格式类型')
      //   return
      // }
      var desc = '仅支持'
      var checkResult = filters.some(item => {
        let fileType = that.fileMap.get(item)
        desc += fileType + ','
        return fileType == suffix
      })
      if (desc.endsWith(',')) {
        desc = desc.substring(0, desc.length - 1)
      }
      desc += '类型'
      if (!checkResult) {
        alert(desc)
        return
      }
      console.log('文件名:' + name + '大小:' + size + ',后缀名:' + suffix)
      if (this.$route.params.parse) {
        this.$router.push({
          name: 'parseFileIndex',
          params: {
            file: selectedFile
          }
        })
        return
      }
      //选中之后跳转页面
      this.$router.push({
        name: 'ConversionIndex',
        params: {
          status: 1,
          id: this.selectItem.id,
          file: selectedFile
        }
      })
    },

    requestMenu() {
      this.showLoading = true
      this.$apis.user
        .requestHomeMenu({
          id: this.$route.params.treeId || 0
        })
        .then(res => {
          console.log(res)
          this.pathList = res.data
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.showLoading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex: 1;
  width: 100%;
  border-radius: 4px;
  background: #fff;
  flex-direction: row;

  .left-menu {
    border: 1px solid #000;
    width: 20%;
    padding: 20px;
    display: flex;
    flex-direction: column;

    button {
      margin-top: 10px;
      padding: 10px;
    }
  }

  .right-content {
    display: flex;
    flex-direction: column;
    width: 80%;

    .action-content{
      margin: 20px;
      display: flex;
      flex-direction: row;
      button {
        margin: 10px;
        padding: 10px;
      }

    }
  }
}
</style>
