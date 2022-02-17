import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './global.js'
Vue.prototype.HTTPURL = 'http://localhost:9020/StaffVue/#/'

router.beforeEach((to, from, next) => {
  // if (window.location.href.indexOf('code') >= 0) {
  //   // 如果url中包含code,则保存到store中
  //   // let code = window.location.href.split('?')[1]
  //   // code = code.substring(5, code.indexOf('&'))
  //   // store.state.code = code
  // }
  console.log('path:' + to.path)
  if (to.path == '/login' || store.state.token) {
    next()
    return
  }
  let times = 0
  let isExe = false
  let timer = setInterval(() => {

    let token = store.state.token
    if (typeof token == 'string' && token != '') {
      clearInterval(timer)
      next()
      return
    }
    if (times++ >= 5) {
      clearInterval(timer)
      //如果exe提示登录
      if (isExe) {
        console.log('无法登录')
        next('/login')
        return
      }
      //如果不是exe则设置默认token
      store.commit(
        'SET_TOKEN',
        '9kG+McRaUpUPSLf378O1UC+FEV9MljjtHWlqhzApu+ITTJtSTk09uvWfXyF6 h+lvNW4q36DMI0z3KZLyBYo7ItXcqTLwClPRvbzObIj0lzY='
      )
      next()
    }
  }, 500)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')