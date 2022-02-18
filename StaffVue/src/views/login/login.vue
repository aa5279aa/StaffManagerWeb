<!-- 扫码登录 -->
<template>
  <div class="login-view">
    <form class="login-form">
      <p><b>员工管理系统</b></p>
      <p>账号: <input type="text" ref="account" /></p>
      <p>密码: <input type="text" ref="password" /></p>
      <input type="submit" value="登录" @click="requestLogin"/>
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
    
  },
  mounted() {},
  methods: {
    /**
     * 扫码登录回调,拿到code, 发起登录
     */
    requestLogin() {
      const params = { 
        account:this.$refs.account.value,
        password:this.$refs.password.value,
      }
      console.log('account:'+params.account)
      //请求登录
      this.$apis.user.requestLogin(params).then(data => {
        console.log('requestLogin:', data)
        debugger
        if (data.isSuccess) {
          //保存用户嘻嘻
          this.$store.commit('SET_LOGIN_MARK')
          this.$router.replace({ name: 'manager' })
        } else {
          this.$message({
            message: '请输入正确的账号密码',
          })
        }
      })
    },
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
