import request from '@/utils/request'

export function requestLogin(data) {
  return request({
    url: '/mftapi/ark/wx/login/v1/get/access_token',
    method: 'post',
    data
  })
}

export function requestHomeMenu(data) {
  return request({
    url: '/mftapi/ark/auth/data_treasure/menu/v1/get/menu_list',
    method: 'post',
    data
  })
}

export function requestUserInfo(data) {
  return request({
    url: '/mftapi/ark/auth/arkUserInfo/v1/get/userInfo',
    method: 'post',
    data
  })
}

// export function getQiniuToken(data) {
//   return request({
//     url: 'https://wx.51gonggui.com/commonrail/api/rest-api/qiniu/uToken.json',
//     method: 'post',
//     data
//   })
// }

// export function logout() {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post'
//   })
// }
