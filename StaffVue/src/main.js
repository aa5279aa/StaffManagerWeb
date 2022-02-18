import store from './store'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './global.js'
Vue.prototype.HTTPURL = 'http://localhost:9020/StaffVue/#/'
Vue.prototype.SERVE_URL = 'http://localhost:8080/staff/'

const lstore = store;
console.log('lstore:'+lstore)
router.beforeEach((to, from, next) => {
  // if (window.location.href.indexOf('code') >= 0) {
  //   // 如果url中包含code,则保存到store中
  //   // let code = window.location.href.split('?')[1]
  //   // code = code.substring(5, code.indexOf('&'))
  //   // store.state.code = code
  // }
  debugger
  console.log('path:' + to.path+',isLogin:'+lstore.state.isLogin)
  if (to.path == '/login' || lstore.state.isLogin) {
    next()
    return
  }
  next('/login')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')