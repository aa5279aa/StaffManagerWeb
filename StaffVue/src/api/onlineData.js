import request from '@/utils/request'

// 获取ECU列表数据
export function getEcuData(data) {
  return request({
    url: '/mftapi/ark/auth/ecuData/listByParentId',
    method: 'post',
    data
  })
}

// 获取HEX列表数据
export function getHexList(data) {
  return request({
    url: '/mftapi/ark/auth/ecuData/listHexByForm',
    method: 'post',
    data
  })
}

// 获取高级搜索项数据
export function getOptionsList(data) {
  return request({
    url: '/mftapi/ark/auth/ecuData/listSearchValueByLeaf',
    method: 'post',
    data
  })
}

// 根据搜索关键字获取HEX列表数据
export function getHexListByKeyword(data) {
  return request({
    url: '/mftapi/ark/auth/ecuData/getByHexFileId',
    method: 'post',
    data
  })
}

// 根据treeId获取页面展示配置
export function getMindConfigByTreeId(data) {
  return request({
    url: '/mftapi/api/auth/ecuData/mind/get_mind_config',
    method: 'post',
    data
  })
}

// 根据手动输入的配置项获取HEX列表数据
export function getHexListByConfig(data) {
  return request({
    url: '/mftapi/ark/auth/ecuData/exactSearchListHexByForm',
    method: 'post',
    data
  })
}

// 根据HEX文件ID获取下载地址
export function getDownloadUrlByHexId(data) {
  return request({
    url: '/mftapi/ark/public/data_center/get_file_url',
    method: 'post',
    data
  })
}

// 文件解析与替换
export function getFileAnalysis(data) {
  return request({
    url: '/mftapi/ark/auth/data_treasure/analysis/v1/getFileAnalysis',
    method: 'post',
    data
  })
}

// 文件转换
export function getFileConversion(data) {
  return request({
    url: '/mftapi/ark/auth/data_treasure/conversion/v1/getFileConversion',
    method: 'post',
    data
  })
}

// 获取风险警告信息
export function getRiskInfo(data) {
  return request({
    url: '/mftapi/ark/auth/info/v1/get/getInfoList',
    method: 'post',
    data
  })
}

// 生成数据
export function generateData(data) {
  return request({
    url: '/mftapi/ark/auth/data_treasure/analysis/v1/fileReplacae',
    method: 'post',
    data
  })
}
