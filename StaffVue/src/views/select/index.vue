<template>
  <div class="login-view">
    <b>员工信息</b>
    <div class="login-form">
      <p><b>姓名：</b>{{ accountInfo.account }}</p>
      <p><b>编号：</b>{{ accountInfo.accountId }}</p>
      <p><b>工号：</b>{{ accountInfo.jobId }}</p>
      <p><b>职位：</b>{{ accountInfo.position }}</p>
      <p><b>个人简介：</b></p>
      <p>{{ accountInfo.describes }}</p>
      <br />
      <div class="imgae" v-show="accountInfo.imgUrl!=undefined && accountInfo.imgUrl.substr(0, 4) == 'http'">
        <p><b>个人风采:</b></p>
        <img alt="图片" :src="accountInfo.imgUrl" style="width: 80%;" />
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
      accountInfo: {}
    }
  },
  computed: {},
  created() {
    debugger
    var accountInfo = this.$route.params
    if (accountInfo.accountId != undefined) {
      this.accountInfo = accountInfo
      return
    }
    const accountId = this.$route.query.accountId
    this.selectAccountInfo(accountId)
  },
  mounted() {},
  watch: {
    $route() {
      // this.requestAccount()
    }
  },
  methods: {
    selectAccountInfo(accountId) {
      const params = {
        accountList: accountId
      }
      this.$apis.user.requestSelect(params).then(data => {
        debugger
        console.log('requestSelect:', data)
        this.accountInfo = data.accountList[0]
      })
    },
    clickClose() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-view {
  padding-top: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
  // background-color: rgb(51, 51, 51);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: left;
  justify-items: left;
  width: 50%;
  margin-top: 10px;

  p {
    margin: 0;
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    line-height: 30px;
  }

  .imgae {
    display: flex;
    justify-items: left;
    flex-direction: column;
    justify-content: left;
    align-items: left;

    margin: 0;
    p {
      margin: 0;
    }
  }
}
.color {
  background-color: aqua;
}
</style>
