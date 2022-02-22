import store from './store'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './global.js'

const lstore = store
router.beforeEach((to, from, next) => {
  debugger
  document.title = '京东金融员工信息'
  if (to.path == '/') {
    next()
    return
  }
  if (to.path == '/select') {
    next()
    return
  }
  if (lstore.state.isLogin) {
    next();
    return;
  }
  next('/')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
