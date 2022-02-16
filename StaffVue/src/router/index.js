import Vue from 'vue'
import VueRouter from 'vue-router'
import NavBar from '../components/NavBar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard'),
    meta: { title: '首页' }
  },
  {
    path: '/online',
    name: 'OnlineData',
    redirect: '/online/onlineDataIndex/0',
    component: NavBar,
    meta: { title: '在线数据' },
    children: [
      {
        path: 'onlineDataIndex/:treeId?/:label',
        name: 'onlineDataIndex',
        component: () => import(/* webpackChunkName: "onlineDataIndex" */ '../views/onlineData')
      },
      {
        path: 'onlineDataResult/:treeId/:label?/:config?',
        name: 'onlineDataResult',
        params: {},
        component: () => import(/* webpackChunkName: "onlineDataResult" */ '../views/onlineData/onlineDataResult.vue'),
        meta: { title: '数据详情' }
      },
      {
        path: 'onlineDataResultInput/:treeId?/:label?',
        name: 'onlineDataResultInput',
        component: () =>
          import(/* webpackChunkName: "onlineDataResultInput" */ '../views/onlineData/onlineDataResultInput.vue'),
        meta: { title: '数据详情' }
      },
      {
        path: 'onlineDataResultTable/:info?',
        name: 'onlineDataResultTable',
        component: () =>
          import(/* webpackChunkName: "onlineDataResultTable" */ '../views/onlineData/onlineDataResultTable.vue'),
        meta: { title: '数据详情' }
      },
      {
        path: 'spread',
        name: 'spread',
        component: () => import('../views/spread/spread.vue'),
        meta: { title: 'spread' }
      },
      {
        path: 'spread2',
        name: 'spread2',
        component: () => import('../views/spread/spread2.vue'),
        meta: { title: 'spread2' }
      },
      {
        path: 'spread3',
        name: 'spread3',
        component: () => import('../views/spread/spread3.vue'),
        meta: { title: 'spread3' }
      }
    ]
  },
  {
    path: '/own',
    name: 'OwnData',
    component: NavBar,
    meta: { title: '我的数据' },
    children: [
      {
        path: '',
        name: 'OwnDataIndex',
        component: () => import(/* webpackChunkName: "ownData" */ '../views/ownData')
      }
    ]
  },
  {
    path: '/verify',
    name: 'VerifyData',
    component: NavBar,
    meta: { title: '高级搜索' },
    children: [
      {
        path: '',
        name: 'VerifyDataIndex',
        component: () => import(/* webpackChunkName: "verifyData" */ '../views/verifyData')
      }
    ]
  },
  {
    path: '/path',
    name: 'Path',
    component: NavBar,
    meta: { title: '格式转换' },
    redirect: '/path/112264',
    children: [
      {
        name: 'PathIndex',
        path: ':treeId/:parse?',
        component: () => import(/* webpackChunkName: "conversion" */ '../views/pathmenu')
      }
    ]
  },
  {
    path: '/conversion',
    name: 'Conversion',
    component: NavBar,
    meta: { title: '格式转换' },
    params: {},
    children: [
      {
        name: 'ConversionIndex',
        path: '',
        params: {},
        component: () => import(/* webpackChunkName: "conversion" */ '../views/conversion')
      }
    ]
  },
  {
    path: '/coin',
    name: 'OwnCoin',
    component: NavBar,
    meta: { title: '我的下载币' },
    children: [
      {
        path: '',
        name: 'OwnCoinIndex',
        component: () => import(/* webpackChunkName: "ownCoin" */ '../views/spread/spread3')
      }
    ]
  },
  {
    path: '/reader',
    name: 'ECUReader',
    component: NavBar,
    meta: { title: '读取和刷新ECU' },
    children: [
      {
        path: '',
        name: 'ECUReaderIndex',
        component: () => import(/* webpackChunkName: "ECUReader" */ '../views/ECUReader')
      }
    ]
  },
  {
    path: '/update',
    name: 'Update',
    component: NavBar,
    meta: { title: '软件更新' },
    children: [
      {
        path: '',
        name: 'UpdateIndex',
        component: () => import(/* webpackChunkName: "update" */ '../views/update')
      }
    ]
  },
  {
    path: '/fileData',
    name: 'fileData',
    component: NavBar,
    meta: { title: '我的数据' },
    children: [
      {
        path: '',
        name: 'fileDataIndex',
        component: () => import('../views/fileData/index.vue')
      },
      {
        path: '/generateData',
        name: 'generateData',
        component: () => import('../views/fileData/generateData.vue')
      },
      {
        name: 'uiType1List',
        path: '/uiType1List/:idxs?/:idxs?',
        component: () => import('../views/fileData/uiType1List.vue'),
        meta: { title: '' }
      },
      {
        path: '/uiType4Spread',
        name: 'uiType4Spread',
        component: () => import('../views/fileData/uiType4Spread.vue'),
        meta: { title: '' }
      },
      {
        path: '/uiType7Page',
        name: 'uiType7Page',
        component: () => import('../views/fileData/uiType7Page.vue'),
        meta: { title: '' }
      },
      {
        path: '/uiType5Spread',
        name: 'uiType5Spread',
        component: () => import('../views/fileData/uiType5Spread.vue'),
        meta: { title: '' }
      },
      {
        path: '/uiType6Spread',
        name: 'uiType6Spread',
        component: () => import('../views/fileData/uiType6Spread.vue'),
        meta: { title: '' }
      }
    ]
  },
  {
    path: '/parseFile',
    name: 'parseFile',
    component: NavBar,
    meta: { title: '解析文件' },
    children: [
      {
        path: '',
        name: 'parseFileIndex',
        params: {},
        component: () => import('../views/parseFile')
      }
    ]
  }
]

const router = new VueRouter({
  base: '/staff/',
  routes
})

export default router
