import Vue from 'vue'
import Vuex from 'vuex'
// import { encryptedByDES } from '@/utils/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isExe: false,
    token: null,
    userInfo: JSON.parse(localStorage.getItem('userInfo') || 'null'),
    fileJson: JSON.parse(localStorage.getItem('file_json') || 'null'), // 大文件json
    smallSpreadObj: null, // 临时传递的浅拷贝对象
    uploadFileJson: JSON.parse(localStorage.getItem('upload_file_json') || '[]'), // 最终上传的json对象
    fileUniqueKey: localStorage.getItem('fileUniqueKey'), // 修改数据的唯一标识
    isOptimization: false // 是否支持数据优化
  },
  mutations: {
    SET_TOKEN(state, token) {
      console.log('SET_TOKEN', 'token:' + token)
      if (token == undefined || token != '') {
        state.token = token
      }
    },

    // 设置存储用户已登录标识
    SET_LOGIN_MARK(state) {
      state.isLogin = true
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
    },

    /// 设置是否支持优化
    SET_OPTIMIZATION(state, optimization) {
      state.isOptimization = optimization
    },

    /// 存储即将修改的数据的唯一key
    SET_FILE_UNIQUEKEY(state, k) {
      state.fileUniqueKey = k
      localStorage.setItem('fileUniqueKey', k)
    },

    // 存储josn文件
    SET_FILE_JOSN(state, file = {}) {
      state.fileJson = file
      // console.log('SET_FILE_JOSN: ', file)
      localStorage.setItem('file_json', JSON.stringify(file))
    },

    // 临时存储大文件中的某个属性对象
    SET_SMALL_SPREAD_OBJ(state, obj) {
      state.smallSpreadObj = obj
    },

    // 存储数据修改项
    SET_UPLOAD_FILE_JSON(state, obj) {
      state.uploadFileJson.push(obj)
      const tmpArr = []
      const ids = []

      state.uploadFileJson.reverse().forEach(item => {
        if (ids.findIndex(v => v === item.id) === -1) {
          ids.push(item.id)
          tmpArr.push(item)
        }
      })
      state.uploadFileJson = tmpArr
      console.log('tmpArr: ', state.uploadFileJson, ids)

      localStorage.setItem('upload_file_json', JSON.stringify(tmpArr))
    },
    SET_UPLOAD_FILE_JSON_ARRAY(state, arr = []) {
      const arr1 = state.uploadFileJson.concat(arr).reverse()
      const tmpArr = []
      const ids = []
      arr1.forEach(item => {
        if (ids.findIndex(v => v === item.id) === -1) {
          ids.push(item.id)
          tmpArr.push(item)
        }
      })
      state.uploadFileJson = tmpArr
      console.log('tmpArr: ', arr, arr1, state.uploadFileJson, ids)
      localStorage.setItem('upload_file_json', JSON.stringify(tmpArr))
    },

    /// 上传成功清除存储文件
    REMOVE_FILE_JSON(state) {
      state.uploadFileJson = []
      state.fileJson = null
      localStorage.removeItem('upload_file_json')
      localStorage.removeItem('file_json')
      localStorage.removeItem('fileUniqueKey')
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
