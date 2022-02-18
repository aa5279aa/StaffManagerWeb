<template>
  <div v-loading="showLoading" class="login-view">
    <div class="login-form">
      <p><b>员工信息</b></p>
      <div>
        <p v-text="'编号：' + accountInfo.accountId"></p>
        <p v-text="'姓名：' + accountInfo.accountName"></p>
        <p v-text="'工号：' + accountInfo.jobId"></p>
        <p v-text="'入职日期：' + accountInfo.entryDate"></p>
        <p v-text="'职位：' + accountInfo.position"></p>
        <p v-text="'描述：' + accountInfo.describes"></p>
        <p v-text="'备注：' + accountInfo.remark"></p>
        <img v-show="accountInfo.imgUrl.startsWith('http')" class="default-image" :src="accountInfo.imgUrl" onerror="../assets/image/coin.png"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      
      showLoading: false,
      accountInfo: {
        accountId: 1001,
        account: 'liuyu'
      }
    }
  },
  computed: {},
  created() {
    debugger
    var accountInfo = this.$route.params
    this.accountInfo = accountInfo
    
  },
  mounted() {},
  watch: {
    $route() {
      // this.requestAccount()
    }
  },
  methods: {
    clickClose() {
      this.$router.go(-1)
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
