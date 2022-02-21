import request from '@/utils/request'

export function requestLogin(data) {
  return request({
    url: '/admin_select',
    method: 'post',
    params: data
  })
}

export function requestSelect(data) {
  return request({
    url: '/account_select',
    method: 'post',
    params: data
  })
}

export function requestDel(data) {
  return request({
    url: '/account_del',
    method: 'post',
    params: data
  })
}

export function requestSet(data) {
  return request({
    url: 'account_set',
    method: 'post',
    params: data
  })
}

export function updateImg(data, config) {
  return request({
    url: 'upload_img',
    method: 'post',
    formData: data,
    config: config
  })
}
