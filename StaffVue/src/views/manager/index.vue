<template>
  <div class="dashboard">
    <div class="banner">
      <div class="welcome">Hi，欢迎使用商用车数据宝！</div>
      <div class="slogan">找数据，刷数据，就用数据宝</div>
    </div>
    <div class="grids">
      <div v-for="(item, index) in gridList" :key="index" class="grid" @click="navigate(item)">
        <img class="pic" :src="item.src" />
        <span class="title">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      gridList: [
        { src: require('../../assets/image/online-data.png'), title: '在线数据', link: '/online' },
        { src: require('../../assets/image/own-data.png'), title: '我的数据', link: '/own' },
        { src: require('../../assets/image/verify-data.png'), title: '高级搜索', link: '/verify' },
        { src: require('../../assets/image/conversion.png'), title: '格式转换', link: '/path' }
        // { src: require('../../assets/image/own-coin.png'), title: '我的下载币', link: '/coin' },
        // { src: require('../../assets/image/ecu-reader.png'), title: '刷写王', link: '/reader' }
        // { src: require('../../assets/image/update.png'), title: '软件更新', link: '/update' }
      ]
    }
  },
  computed: {},
  created() {
    this.requestMenu()
  },
  mounted() {},
  methods: {
    navigate(item) {
      this.$store.commit('SET_OPTIMIZATION', false)
      this.$router.push(item.link)
    },

    /**
     * 请求首页菜单
     */
    requestMenu() {
      const params = { id: 112254 }
      this.$apis.user.requestHomeMenu(params).then(res => {
        console.log('requestHomeMenu:', JSON.stringify(res))
        // {"data":[{"icon":"http://mft-static.51gonggui.com/pic/CKEditor.png","id":106570,"identifyFileType":0,"menuStatus":1,"name":"我的数据","parentId":112254,"transferAddress":""},{"icon":"http://mft-static.51gonggui.com/pic/引入富文本编辑框.png","id":106571,"identifyFileType":0,"menuStatus":1,"name":"在线数据","parentId":112254,"transferAddress":""},{"icon":"http://mft-static.51gonggui.com/pic/cron表达式.png","id":106572,"identifyFileType":0,"menuStatus":0,"name":"数据验证","parentId":112254,"transferAddress":""},{"id":106573,"identifyFileType":0,"menuStatus":1,"name":"格式转换","parentId":112254},{"id":106574,"identifyFileType":0,"menuStatus":1,"name":"刷写宝","parentId":112254}],"msg":"获取成功","status":200}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100%;
  box-sizing: border-box;
  .banner {
    margin: 16px;
    height: 180px;
    background: #0062ff;
    border-radius: 8px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 32px;
    .welcome {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
    }
    .slogan {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      margin-top: 8px;
      opacity: 0.85;
    }
  }
  .grids {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 200px 200px;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    padding: 0 16px;
    .grid {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      cursor: pointer;
    }
    .grid:hover {
      background: rgba(0, 0, 0, 0.05);
    }
    .grid:active {
      background: #dddddd;
    }
    .pic {
      width: 96px;
      height: 96px;
    }
    .title {
      font-size: 20px;
      font-weight: 500;
      color: #333333;
      line-height: 32px;
      margin-top: 12px;
    }
  }
}
</style>
