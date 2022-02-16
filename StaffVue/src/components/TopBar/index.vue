<template>
  <div class="top-bar">
    <!-- <template v-if="fullscreenMode">
      <span>数据宝</span>
      <el-divider direction="vertical"></el-divider>
      <span>王三 18663631111</span>
      <span class="coin-text">下载币：88</span>
      <span class="time-box">20210808 10:25</span>
    </template>
    <template v-else> -->
    <img class="logo" src="../../assets/image/sjb.png" alt="数据宝" />
    <!-- <img class="coin-pic" src="../../assets/image/coin.png" /> -->
    <!-- <span>下载币：88</span> -->
    <img class="time-pic" src="../../assets/image/time.png" />
    <span class="time-box">{{ userInfo.todayDate }}</span>
    <img class="user-pic" :src="userInfo.headImgUrl" alt="" />
    <span class="userinfo">{{ userInfo.uname + ' ' + userInfo.uphone }}</span>
    <!-- </template> -->
    <el-button class="log-out" size="mini" @click="logOut">退出登录</el-button>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      userInfo: this.$store.state.userInfo || {
        headImgUrl: '',
        uphone: '',
        uname: '',
        userId: '',
        todayDate: ''
      },
      fullscreenMode: document.documentElement.clientWidth > 1440
    }
  },
  created() {
    this.initTopBar()
    this.requestUserInfo()
  },
  methods: {
    initTopBar() {
      const self = this
      const resizeHandler = _.debounce(function () {
        self.fullscreenMode = document.documentElement.clientWidth > 1440
      }, 1000)
      window.addEventListener('resize', resizeHandler)
      this.$once('hook:beforeDestroy', () => {
        window.removeEventListener('resize', resizeHandler)
      })
    },

    requestUserInfo() {
      if (this.$store.state.token == undefined || this.$store.state.token == '') {
        return
      }
      this.$apis.user.requestUserInfo().then(res => {
        const data = res.data
        this.$store.commit('SET_USER_INFO', data)
        this.userInfo = data
      })
    },

    /**
     * 退出登录
     */
    logOut() {
      this.$store.commit('REMOVE_LOGIN_MARK')
      this.$router.replace({ name: 'login' })
    }
  }
}
</script>

<style lang="scss" scoped>
.top-bar {
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  background: #002140;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 14px;
  .coin-text {
    margin-left: 15px;
  }
  .logo {
    width: 120px;
    height: 48px;
  }
  .coin-pic,
  .time-pic {
    width: 32px;
    height: 32px;
    // margin-left: 30px;
  }
  .time-pic {
    // margin-left: 23px;
  }
  .user-pic {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 4px;
  }
  .time-box {
    margin-right: auto;
  }
  .userinfo {
    margin-right: 30px;
  }
  .log-out {
    color: #002140;
    background-color: #ffffff;
    // margin-left: auto;
  }
}
</style>
