import Taro from '@tarojs/taro'
export function errorToast(msg = '') {
  Taro.showToast({
    title: msg,
    image: '../static/img/icon_error.png'
  })
}