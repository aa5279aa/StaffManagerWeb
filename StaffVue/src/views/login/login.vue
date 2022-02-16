<!-- 扫码登录 -->
<template>
  <div class="login-view">
    <form action="form_action" method="get" class="login-form">
      <p><b>员工管理系统</b></p>
      <p>账号: <input type="text" name="fname" /></p>
      <p>密码: <input type="text" name="lname" /></p>
      <input type="submit" value="登录" />
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      isJump: false,
      timer: null,
      timer2: null,
      code: this.$route.query.code,
      show: false,
      msg: '该账户为首次使用, 请您确认是否绑定此电脑, 绑定后不可修改, 只能在此电脑使用',
      appid: 'wx8f2de73d2dd6bfe3',
      redirect_uri: encodeURIComponent('https://api.51gonggui.com/decoder-data/#/login')
    }
  },
  computed: {},
  // watch: {
  //   code(val) {
  //     if (val) this.requestLogin(val)
  //   }
  // },
  created() {
    console.log('this.$route.query.code:', this.$route.query.code)
    this.timer = setInterval(() => {
      if (this.$route.query.code && !this.isJump) this.actionLogin(this.$route.query.code)
    }, 350)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  mounted() {},
  methods: {
    actionLogin(code, agreeStatus = 1) {
      this.isJump = true
      console.log('actionLogin')
      //获取mac
      let times = 0
      let that = this
      let isExe = false
      let deviceMacl = ''
      this.timer2 = setInterval(() => {
        if (window.exeCall) {
          isExe = true
          window.exeCall &&
            window.exeCall.getHashCode().then(function (deviceMac) {
              let tokenJson = { 'device-mac': deviceMac }
              deviceMacl = deviceMac
              window.exeCall.des3EncodeECB(JSON.stringify(tokenJson), 1).then(function (token) {
                window.exeCall.saveCache('token', token).then(function (ret) {
                  console.log('save token:' + ret)
                  that.$store.commit('SET_TOKEN', token)
                })
              })
            })
        }
        if (that.$store.state.token != undefined && that.$store.state.token != '') {
          clearInterval(this.timer)
          that.requestLogin(code, deviceMacl, agreeStatus)
          return
        }
        if (times++ >= 10) {
          clearInterval(this.timer)
          if (isExe) {
            console.log('无法登录')
            return
          }
          that.$store.commit(
            'SET_TOKEN',
            '9kG+McRaUpUPSLf378O1UC+FEV9MljjtHWlqhzApu+ITTJtSTk09uvWfXyF6 h+lvNW4q36DMI0z3KZLyBYo7ItXcqTLwClPRvbzObIj0lzY='
          )
          that.requestLogin(code, deviceMacl, agreeStatus)
          return
        }
      }, 500)
    },
    /**
     * 扫码登录回调,拿到code, 发起登录
     */
    requestLogin(code, deviceMacl, agreeStatus = 1) {
      const params = { code, agreeStatus }

      //请求登录
      params.deviceMac = deviceMacl
      this.$apis.user.requestLogin(params).then(data => {
        console.log('requestLogin:', data)
        if (data.loginStatus === 0) {
          this.$store.commit('SET_LOGIN_MARK')
          this.$router.replace({ name: 'Dashboard' })
        } else if (data.loginStatus === 1) {
          this.msg = data.message
          this.show = true
        } else {
          this.$message({
            message: data.message,
            type: 'error'
          })
        }
      })
    },

    /**
     * 授权确认绑定
     */
    confirmBinding() {
      this.actionLogin(this.$route.query.code, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-view {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  // background-color: rgb(51, 51, 51);
  background-color: #fff;
  display: flex;
   justify-content: center;
  padding: 50px;
}
.login-form{
 
  width: 30%;
  height: 30%;
  border: 1px solid #000;
}
</style>
