import { errorToast } from './index'
import Taro from '@tarojs/taro'
function request(url, data = {}, method = "GET") {
  return new Promise(function (resolve, reject) {
    Taro.request({
      url: url,
      data: data,
      method: method,
      header: {
        'Content-type': 'application/json'
      },
      success: function (res) {
        if (res.statusCode === 200) {
          const {data} = res;
          if (data.code === 0) {
            resolve(data)
          } else {
            errorToast(data.message)
          }
        } else {
          errorToast('未知错误')
        }
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}
request.get = (url, data) => {
  return request(url, data, 'GET');
}

request.post = (url, data) => {
  return request(url, data, 'POST');
}

export default request;
