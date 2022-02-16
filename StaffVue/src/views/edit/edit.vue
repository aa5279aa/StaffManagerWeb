<!-- 扫码登录 -->
<template>
  <div class="login-view">
    编辑界面
    <form action="form_action" method="get" class="login-form">
      <p><b>员工管理系统</b></p>
    
      <p>编号: <text type="text">{{}account.accountId}</text></p>
      <p>工号: <input type="text" name="jobid" /></p>
      <p>账户名: <input type="text" name="account" /></p>
      <p>密码: <input type="text" name="password" /></p>
      <p>入职日期: <input type="text" name="entryData" /></p>
      <p>职位：<input type="text" name="position" /></p>
      <p>简介: <input type="text" name="describes" /></p>
      <p>头像: <input type="text" name="imgUrl" /></p>
      <p>备注: <input type="text" name="remark" /></p>
    
      <input type="submit" value="提交" />
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
      acccount: {}
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
    requestRegister(code, deviceMacl, agreeStatus = 1) {    
      const params = { 
          account : this.data.account
      }
      this.$apis.user.requestRegister(params).then(data => {
        console.log('requestRegister:', data)
        
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
.login-form {
  width: 30%;
  height: 30%;
  border: 1px solid #000;
}
</style>
