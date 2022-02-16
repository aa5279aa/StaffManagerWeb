import Vue from 'vue'
import Filters from './utils/filters'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api'
import 'normalize.css' // reset default css
import './assets/style/index.scss'

Vue.config.productionTip = false

Vue.prototype.$apis = api
Vue.use(ElementUI)

for (let key in Filters) {
  Vue.filter(key, Filters[key])
}
