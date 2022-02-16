/* eslint-disable no-undef */
import CryptoJS from 'crypto-js'

export function getChildItem(fileJson, idxs) {
  let selectItem = fileJson
  for (let i = 0; i < idxs.length; i++) {
    if (i == 0) {
      selectItem = selectItem[idxs[i]]
    } else {
      selectItem = selectItem.siniTreeBeans[idxs[i]]
    }
  }
  return selectItem
}

export function downloadFile(url, savePath = '') {
  if (window.exeCall) {
    window.exeCall.downloadFile(url, savePath).then(function (ret) {
      window.exeCall.showMessage(`下载${ret ? '成功' : '失败'}`)
    })
  } else {
    window.open(url, '_blank')
  }
}

// export function des3EncodeECB() {
//   // 1 表示使用 RAIL_TOOL_DES_KEY 加密, 2 表示使用 DECODER_FILE_DES_KEY 加密, 3 表示 RAIL_TOOL_UPGRADE_DES_KEY 加密
//   exeCall.des3EncodeECB(tmp, 1).then(function (ret) {
//     console.log('ret: ', ret)
//   })
// }

// export function des3DecodeECB() {
//   // 1 表示使用 RAIL_TOOL_DES_KEY 加密, 2 表示使用 DECODER_FILE_DES_KEY 加密, 3 表示 RAIL_TOOL_UPGRADE_DES_KEY 加密
//   exeCall.des3DecodeECB(desstr, 1).then(function (ret) {
//     console.log('ret: ', ret)
//   })
// }

// 3DES解密
export function decryptByDES(ciphertext, key) {
  ciphertext = ciphertext.replaceAll(' ', '') // 异常处理：替换密文中的空格
  var keyHex = CryptoJS.enc.Utf8.parse(key)
  var decrypted = CryptoJS.TripleDES.decrypt(
    {
      ciphertext: CryptoJS.enc.Base64.parse(ciphertext.toString(CryptoJS.enc.Utf8))
    },
    keyHex,
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }
  )
  var result_value = decrypted.toString(CryptoJS.enc.Utf8)
  try {
    return JSON.parse(result_value)
  } catch {
    return result_value
  }
}

// 3DES加密
export function encryptedByDES(text) {
  var encrypted = CryptoJS.TripleDES.encrypt(text, CryptoJS.enc.Utf8.parse('ujmik,*&^yhnRTFvbgcxzp;123324sd87dtr'), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).ciphertext
  encrypted = CryptoJS.enc.Base64.stringify(encrypted)
  return encrypted
}
