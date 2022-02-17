<!-- 扫码登录 -->
<template>
  <div class="login-view">
    二维码页面
    <img v-if="qrUrl" :src="qrUrl" class="avatar" />
    <wxlogin :theme="'black'" :appid="appid" :scope="'snsapi_login'" :redirect_uri="redirect_uri" />
    <dialog-authorization :show.sync="show" :msg="msg" @sure="confirmBinding" />
  </div>
</template>

<script>
import wxlogin from 'vue-wxlogin'
import DialogAuthorization from './components/dialog-authorization'

export default {
  components: {
    wxlogin,
    DialogAuthorization
  },
  props: {},
  data() {
    return {
      qrUrl:""
    }
  },
  computed: {},
  // watch: {
  //   code(val) {
  //     if (val) this.requestLogin(val)
  //   }
  // },
  created() { 
    //请求接口
    var accoutUrl = this.$route.query.accoutUrl
    console.log('accoutUrl:', accoutUrl)
    //发送请求，
   
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

.avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

.login-view {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  // background-color: rgb(51, 51, 51);
  background-color: #fff;
  padding: 50px;
}
</style>
