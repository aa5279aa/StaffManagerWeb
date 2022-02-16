import request from '@/utils/request'

// 获取ECU列表数据
export function getFileList(data) {
  return request({
    url: '/mftapi/ark/auth/ecuData/user/get_file_list',
    method: 'post',
    data
  })
}
