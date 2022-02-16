import Vue from 'vue'
import VueRouter from 'vue-router'
// import NavBar from '../components/NavBar'

Vue.use(VueRouter)

const routes = [
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
  // {
  //   path: '/online',
  //   name: 'OnlineData',
  //   redirect: '/online/onlineDataIndex/0',
  //   component: NavBar,
  //   meta: { title: '在线数据' },
  //   children: [
  //     {
  //       path: 'onlineDataIndex/:treeId?/:label',
  //       name: 'onlineDataIndex',
  //       component: () => import(/* webpackChunkName: "onlineDataIndex" */ '../views/onlineData')
  //     },
  //     {
  //       path: 'onlineDataResult/:treeId/:label?/:config?',
  //       name: 'onlineDataResult',
  //       params: {},
  //       component: () => import(/* webpackChunkName: "onlineDataResult" */ '../views/onlineData/onlineDataResult.vue'),
  //       meta: { title: '数据详情' }
  //     },
  //     {
  //       path: 'onlineDataResultInput/:treeId?/:label?',
  //       name: 'onlineDataResultInput',
  //       component: () =>
  //         import(/* webpackChunkName: "onlineDataResultInput" */ '../views/onlineData/onlineDataResultInput.vue'),
  //       meta: { title: '数据详情' }
  //     },
  //     {
  //       path: 'onlineDataResultTable/:info?',
  //       name: 'onlineDataResultTable',
  //       component: () =>
  //         import(/* webpackChunkName: "onlineDataResultTable" */ '../views/onlineData/onlineDataResultTable.vue'),
  //       meta: { title: '数据详情' }
  //     },
  //     {
  //       path: 'spread',
  //       name: 'spread',
  //       component: () => import('../views/spread/spread.vue'),
  //       meta: { title: 'spread' }
  //     },
  //     {
  //       path: 'spread2',
  //       name: 'spread2',
  //       component: () => import('../views/spread/spread2.vue'),
  //       meta: { title: 'spread2' }
  //     },
  //     {
  //       path: 'spread3',
  //       name: 'spread3',
  //       component: () => import('../views/spread/spread3.vue'),
  //       meta: { title: 'spread3' }
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  base: '/staff/',
  routes
})

export default router
