import CryptoJS from 'crypto-js'

function encryption(params) {
  const key = CryptoJS.enc.Latin1.parse('ksudiksudiksudix')
  const encrypted = CryptoJS.AES.encrypt(params, key, {
    iv: key,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  })
  console.log(encrypted.toString())
  return encrypted.toString()
}

/**
 * 拼接对象为请求字符串
 * @param {Object} obj - 待拼接的对象
 * @returns {string} - 拼接成的请求字符串
 */
function formatGetUri(obj) {
  const params = []

  Object.keys(obj).forEach(key => {
    let value = obj[key]
    // 如果值为undefined我们将其置空
    if (typeof value === 'undefined' || value === null) {
    } else {
      params.push([key, encodeURIComponent(value)].join('='))
    }
    // 对于需要编码的文本（比如说中文）我们要进行编码
  })
  return '?' + params.join('&')
}

export {
  encryption,
  formatGetUri
}