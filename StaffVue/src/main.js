import store from './store'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './global.js'

const lstore = store
console.log('lstore:' + lstore)
router.beforeEach((to, from, next) => {
  debugger
  if (to.path == '/login' || to.path == '/select' || lstore.state.isLogin) {
    next()
    if (to.meta.title) {
      document.title = to.meta.title
    }
    return
  }
  next('/login')
  document.title = '登录'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
