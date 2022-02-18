import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
// import { getToken } from '@/utils/auth'
import { decryptByDES } from '@/utils/utils'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: 'http://yapi.mft100.cn/mock/37', // url = base url + request url
  baseURL: process.env.NODE_ENV === 'production' ? 'http://localhost:8080/staff/' : '/proxyApi', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    let res = response.data
    if (typeof res.data === 'string') {
      // 加密内容
      res.data = decryptByDES(res.data, 'ujmik,*&^yhnRTFvbgcxzp;123324sd87dtr')
    }
    console.log('接口返回', res)
    // TODO
    // 请求队列中的相同url、不同参数的请求，cancel掉前一个未返回结果的请求

    // if the custom code is not 20000, it is judged as an error.
    if (res.data?.status !== 200 && res.status !== 200) {
      Message({
        message: res.msg || res.data?.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.data.status === 50008 || res.data.status === 50012 || res.data.status === 50014) {
        // to re-login
        MessageBox.confirm(
          'You have been logged out, you can cancel to stay on this page, or log in again',
          'Confirm logout',
          {
            confirmButtonText: 'Re-Login',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }
        ).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.msg || res.data?.message || 'Error'))
    } else {
      return res.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
