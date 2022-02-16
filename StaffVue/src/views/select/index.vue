<template>
  <div v-loading="showLoading" class="online-data-wrap">
    <div class="online-data-content">
      <p>员工信息</p>
      <div>
        <p>编号:{{account.accountId}}<p/>
        <p>姓名:{{account.accountName}}<p/>
        <p>姓名:{{account.accountName}}<p/>
        <p>姓名:{{account.accountName}}<p/>
        <p>姓名:{{account.accountName}}<p/>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data() {
    return {
      account : {
        accountId :1001,
        accountName : 'liuyu',
      }
    }
  },
  computed: {},
  created() {
    // this.requestAccount()
  },
  mounted() {},
  watch: {
    $route() {
      // this.requestAccount()
    }
  },
  methods: {
    requestAccount() {
      this.showLoading = true
      this.$apis.user
        .requestHomeMenu({
          id: this.$route.params.accountId || 0
        })
        .then(res => {
          console.log(res)
          this.account = res.data
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
.online-data-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #f7f8fa;
  padding: 17px 16px;
  .p{
    background-color: #000aaa;
    width: 100%;
    text-align: center;
  }
  .online-data-content {
    width: 30%;
    border: 1px solid #000;
    border-radius: 4px;
    background: #fff;
    justify-content: center;
  
  }
}
</style>
