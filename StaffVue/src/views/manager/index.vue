<template>
  <div class="container">
    <!-- 左侧 -->
    <div class="left-menu">
      <button>员工列表</button>
      <!-- <button>管理员列表</button> -->
    </div>

    <!-- 右侧 -->
    <div class="right-content">
      <div class="action-content">
        <button @click="addAccount">新增</button>
        <button>无</button>
      </div>

      <div>
        <staffItem v-for="(v, i) in accountList" :key="i" :index="i + 1" :item="v" v-on:accountId="handleClickDel" />
      </div>
    </div>
  </div>
</template>

<script>
import staffItem from '../onlineData/components/staffItem.vue'
export default {
  components: {
    staffItem
  },
  data() {
    return {
      select: 0,
      accountList: []
    }
  },
  computed: {},
  created() {
    this.requestAccountList()
  },
  mounted() {
    console.log('mounted')
  },
  watch: {
    // $route() {
    //   this.requestAccountList()
    // }
  },
  methods: {
    addAccount() {
      this.$router.push({
        name: 'edit',
        params: {}
      })
    },

    handleClickDel(accountId) {
      console.log('handleClickItem:accountId:' + accountId)
      var params = {
        accountId: accountId
      }
      this.$apis.user
        .requestDel(params)
        .then(data => {
          console.log(data)
          alert(data.message)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.showLoading = false
          this.requestAccountList()
        })
    },

    requestAccountList() {
      this.showLoading = true
      var params = {
        accountList: '',
        start: 0,
        maxNum: 20
      }
      this.$apis.user
        .requestSelect(params)
        .then(data => {
          console.log(data)
          this.accountList = data.accountList
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
.container {
  display: flex;
  flex: 1;
  width: 100%;
  border-radius: 4px;
  background: #fff;
  flex-direction: row;

  .left-menu {
    border: 1px solid #000;
    width: 20%;
    padding: 20px;
    display: flex;
    flex-direction: column;

    button {
      margin-top: 10px;
      padding: 10px;
    }
  }

  .right-content {
    display: flex;
    flex-direction: column;
    width: 80%;

    .action-content {
      margin: 20px;
      display: flex;
      flex-direction: row;
      button {
        margin: 10px;
        padding: 10px;
      }
    }
  }
}
</style>
