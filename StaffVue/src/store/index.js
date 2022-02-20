import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('isLogin')
  },
  mutations: {
    SET_TOKEN() {},

    // 设置存储用户已登录标识
    SET_LOGIN_MARK(state) {
      debugger
      state.isLogin = true
      console.log('SET_LOGIN_MARK.state.isLogin:' + state.isLogin)
      localStorage.setItem('isLogin', true)
    },

    // 清除用户登录标识
    REMOVE_LOGIN_MARK(state) {
      state.isLogin = false
      state.userInfo = null
      localStorage.removeItem('userInfo')
      localStorage.removeItem('isLogin')
    },

    // 存储用户信息
    SET_USER_INFO(state, obj) {
      state.userInfo = obj
      localStorage.setItem('userInfo', JSON.stringify(obj))
    }
  },
  getters: {
    /**
     * 用户ID
     */
    getUserId(state) {
      if (state.userInfo) return state.userInfo.userId
      return ''
    }
  },
  actions: {},
  modules: {}
})
