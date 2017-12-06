/**
 * @file 封装获取数据的函数
 */
const Axios = require('axios')

const isProduction = process.env.NODE_ENV === 'production'
const ERR_OK = 0
const BASE = isProduction ? '/' : '/proxy/'

/**
 * 发送请求的函数
 * 返回 Promise
 */
function getHttp (url, params) {
  return new Promise((resolve, reject) => {
    Axios.get(BASE + url, {
      params: params
    }).then(res => {
      if (res.data.code === ERR_OK) {
        resolve(res.data)
      } else {
        console.error('接口数据返回失败：' + res.data.msg + '\n地址：' + url + '\n参数：' + JSON.stringify(params))
        reject(res.data.msg)
      }
    }).catch(e => {
      console.error(e)
    })
  })
}

/**
 * 获取文章列表
 * @param {Number} catid -栏目id，必须
 * @param {NUmber} page -页码，可选，默认1
 * @param {Number} pagesize -数量，可选，默认10
 */
export function getChapterInfo (bookId, chapterId) {
  return getHttp('bookapi/getChapterInfo', {
    _csrfToken: 'L8OQ51gXrh5Eo25lUFnjTSDFTxEJKzMIlfLmVdMo',
    bookId: bookId,
    chapterId: chapterId
  })
}
