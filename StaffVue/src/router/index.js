import Vue from 'vue'
import VueRouter from 'vue-router'
// import NavBar from '../components/NavBar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/login.vue'),
    meta: { title: '登录' }

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
    meta: { title: '登录' }

  },
  {
    path: '/manager',
    name: 'manager',
    component: () => import('../views/manager/index.vue'),
    meta: { title: '管理页面' }
  },
  {
    path: '/select',
    name: 'select',
    component: () => import('../views/select/index.vue'),
    meta: { title: '查询页面' }
  },
  {
    path: '/showqr',
    name: 'showqr',
    component: () => import('../views/showqr/showqr.vue'),
    meta: { title: '二维码页面' }
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('../views/edit/edit.vue'),
    meta: { title: '编辑页面' }
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../views/edit/upload.vue'),
    meta: { title: '上传页面' }
  }
]

const router = new VueRouter({
  // base: '/staff/',
  routes:routes,
  // mode: 'history'
})

export default router
