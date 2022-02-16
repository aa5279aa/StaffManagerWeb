<!-- 扫码登录 -->
<template>
  <div class="login-view">
    <div class="login-form">
      <p><b>员工{{accountInfo.accountId!=undefined?'修改':'新增'}}</b></p>
      <p v-show="accountInfo.accountId != undefined">编号: {{ accountInfo.accountId }}</p>
      <p>工号: <input type="text" v-model="accountInfo.jobId" /></p>
      <p>账户名: <input type="text" v-model="accountInfo.account" /></p>
      <p>入职日期: <input type="text" v-model="accountInfo.entryDate" /></p>
      <p>职位：<input type="text" v-model="accountInfo.position" /></p>
      <p>简介: <input type="text" v-model="accountInfo.describes" /></p>
      <p>备注: <input type="text" v-model="accountInfo.remark" /></p>
      <p>头像: <input type="text" v-model="accountInfo.imgUrl" /></p>

      <button @click="requestRegister">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    console.log('data')
    return {
      isJump: false,
      accountInfo: {}
    }
  },
  computed: {},
  created() {
    // debugger
    var accountInfo = this.$route.params
    this.accountInfo = accountInfo
  },

  mounted() {},
  methods: {
    requestRegister() {
      debugger

      const params = {
        accountInfo: JSON.stringify(this.accountInfo)
      }
      console.log('account:' + JSON.stringify(params))
      //请求登录

      this.$apis.user
        .requestSet(params)
        .then(data => {
          debugger
          console.log(data)
          alert(data.result)
          this.$router.go(-1)
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
.login-view {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  // background-color: rgb(51, 51, 51);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: left;
  justify-items: left;
  width: 50%;
  border: 1px solid #000;
  padding: 50px;
  p {
    width: 60%;
    margin-left: 20%;

    display: flex;
    flex-direction: row;
    justify-content: left;
    b {
      width: 100%;
    }
  }
  button {
    width: 40%;
    height: 30px;
    margin-left: 30%;
  }
}
</style>
